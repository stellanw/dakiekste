import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react";
import { PiArrowRightLight } from "react-icons/pi";

export default function ScrollBox({ boxData = [], headline1, headline2, introText, showIcon = false }) {
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Fokus-Modus
  const [focusedIndex, setFocusedIndex] = useState(null);
  const rafScrollToRef = useRef(null);

  // Bookkeeping
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    startScroll: 0,
    lastX: 0,
    lastT: 0,
    vx: 0,
    downTime: 0,
  });
  const rafAutoRef = useRef(null);
  const rafMomentumRef = useRef(null);

  // Loop math
  const seqWRef = useRef(0);
  const startRef = useRef(0);
  const readyRef = useRef(false);

  const posRef = useRef(0);
  const applyScroll = (left) => {
    const c = scrollRef.current;
    if (!c) return;
    posRef.current = left;
    c.scrollLeft = left;
  };
  const getScroll = () => posRef.current;

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const tripleData = useMemo(() => [...boxData, ...boxData, ...boxData], [boxData]);

  const wrapLeft = (left) => {
    const w = seqWRef.current;
    const start = startRef.current;
    if (!readyRef.current || w <= 0) return left;
    if (left - start >= w) return left - w * Math.floor((left - start) / w);
    if (left < start) return left + w * Math.ceil((start - left) / w);
    return left;
  };

  // messen
  const measure = useCallback(() => {
    const c = scrollRef.current;
    if (!c || boxData.length === 0) return;

    const children = c.children;
    if (children.length < boxData.length * 2) return;

    const i0 = 0;
    const i1 = boxData.length;

    const left0 = children[i0].offsetLeft;
    const left1 = children[i1].offsetLeft;

    const seqW = left1 - left0;
    seqWRef.current = seqW;
    startRef.current = left1;

    applyScroll(left1);
    readyRef.current = true;
  }, [boxData.length]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(measure));
    const onResize = () => {
      cancelAnimationFrame(rafAutoRef.current);
      cancelAnimationFrame(rafMomentumRef.current);
      requestAnimationFrame(() => requestAnimationFrame(measure));
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  //no scale bei touch
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    // Safari <16 fallback
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  /* ===========================
     WHEEL: HORIZ/NUDGE OHNE preventDefault
  ============================*/
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX > absY * 1.1 || e.shiftKey) {
        applyScroll(wrapLeft(getScroll() + e.deltaX));
      } else {
        const NUDGE = 0.35; // 0.2–0.5 feintunen
        applyScroll(wrapLeft(getScroll() + e.deltaY * NUDGE));
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []); // nur Refs

  // smooth scroll-to
  const scrollToLeft = useCallback((target, duration = 420) => {
    cancelAnimationFrame(rafScrollToRef.current);
    const start = getScroll();
    const delta = target - start;
    const t0 = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      applyScroll(wrapLeft(start + delta * easeOutCubic(t)));
      if (t < 1) rafScrollToRef.current = requestAnimationFrame(step);
    };
    rafScrollToRef.current = requestAnimationFrame(step);
  }, []);

  // Card zentrieren
  const centerCard = useCallback(
    (i) => {
      const c = scrollRef.current;
      if (!c) return;
      const el = c.children[i];
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const viewCenter = getScroll() + c.clientWidth / 2;
      const target = getScroll() + (elCenter - viewCenter);
      cancelAnimationFrame(rafMomentumRef.current);
      scrollToLeft(target, 420);
    },
    [scrollToLeft]
  );

  // Toggle Focus
  const onCardClick = useCallback(
    (i) => {
      setFocusedIndex((prev) => {
        const next = prev === i ? null : i;
        if (next !== null) requestAnimationFrame(() => centerCard(i));
        return next;
      });
    },
    [centerCard]
  );

  // Outside-Click schließt Focus
  useEffect(() => {
    if (focusedIndex === null) return;
    const onDocPointerDown = (e) => {
      const wrapper = scrollRef.current;
      if (!wrapper) return;
      if (!wrapper.contains(e.target)) {
        setFocusedIndex(null);
        return;
      }
      const cardEl = e.target.closest("[data-card-idx]");
      const idx = cardEl ? Number(cardEl.dataset.cardIdx) : null;
      if (idx !== focusedIndex) setFocusedIndex(null);
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [focusedIndex]);

  // Autoplay
  useEffect(() => {
    if (prefersReducedMotion) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const BASE_SPEED = isMobile ? 0.03 : 0.05;

    let currentSpeed = 0;
    let targetSpeed = 0;
    const LERP = 0.045;

    let last = performance.now();

    const tick = (now) => {
      const c = scrollRef.current;
      if (!c) return;

      const dt = now - last;
      last = now;

      const paused = isDragging || isHovering || isFocused || focusedIndex !== null || !readyRef.current;
      targetSpeed = paused ? 0 : BASE_SPEED;

      currentSpeed += (targetSpeed - currentSpeed) * LERP;

      if (!paused && currentSpeed > 0.0002) {
        applyScroll(wrapLeft(getScroll() + currentSpeed * dt));
      }

      rafAutoRef.current = requestAnimationFrame(tick);
    };

    rafAutoRef.current = requestAnimationFrame(tick);

    const onVis = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(rafAutoRef.current);
      } else {
        rafAutoRef.current = requestAnimationFrame((t) => {
          last = t;
          tick(t);
        });
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(rafAutoRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [isDragging, isHovering, isFocused, prefersReducedMotion, focusedIndex]);

  // Momentum (Drag → Nachrollen)
  const startMomentum = (initialVx) => {
    cancelAnimationFrame(rafMomentumRef.current);
    if (prefersReducedMotion) return;
    const c = scrollRef.current;
    if (!c || !readyRef.current) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const MAX_VX = isMobile ? 1.1 : 1.3;
    const FRICTION = isMobile ? 0.0013 : 0.0011;
    const CUTOFF = 0.0025;

    let vx = Math.max(Math.min(initialVx, MAX_VX), -MAX_VX);
    let last = performance.now();

    const step = (now) => {
      const dt = now - last;
      last = now;

      if (vx > 0) vx = Math.max(0, vx - FRICTION * dt);
      else if (vx < 0) vx = Math.min(0, vx + FRICTION * dt);

      applyScroll(wrapLeft(getScroll() - vx * dt));
      if (Math.abs(vx) > CUTOFF) {
        rafMomentumRef.current = requestAnimationFrame(step);
      }
    };

    if (Math.abs(initialVx) > 0.01) {
      rafMomentumRef.current = requestAnimationFrame(step);
    }
  };

  // Pointer Events + Klick-Erkennung über pointerup
  const CLICK_MAX_DIST = 6; // px – bis zu dieser Bewegung zählt es noch als Klick
  const CLICK_MAX_TIME = 600; // ms – optionaler Zeit-Guard

  const onPointerDown = (e) => {
    const c = scrollRef.current;
    if (!c) return;

    if (focusedIndex !== null) {
      const cardEl = e.target.closest("[data-card-idx]");
      const i = cardEl ? Number(cardEl.dataset.cardIdx) : null;
      if (i !== focusedIndex) setFocusedIndex(null);
    }

    c.setPointerCapture?.(e.pointerId);
    setIsDragging(true);
    c.classList.add("dragging");

    const x = e.clientX;
    const y = e.clientY;
    dragRef.current.startX = x;
    dragRef.current.startY = y;
    dragRef.current.lastX = x;
    dragRef.current.lastT = performance.now();
    dragRef.current.downTime = dragRef.current.lastT;
    dragRef.current.vx = 0;
    dragRef.current.startScroll = getScroll();

    cancelAnimationFrame(rafMomentumRef.current);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const c = scrollRef.current;
    if (!c) return;

    e.preventDefault();

    const x = e.clientX;
    const t = performance.now();
    const dx = x - dragRef.current.startX;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const DRAG_GAIN = isMobile ? 1.3 : 1.15;

    applyScroll(wrapLeft(dragRef.current.startScroll - dx * DRAG_GAIN));

    const dt = t - dragRef.current.lastT || 16;
    dragRef.current.vx = (x - dragRef.current.lastX) / dt;

    dragRef.current.lastX = x;
    dragRef.current.lastT = t;
  };

  const endDrag = (e) => {
    if (!isDragging) return;
    const c = scrollRef.current;
    if (!c) return;

    setIsDragging(false);
    c.classList.remove("dragging");
    c.releasePointerCapture?.(e.pointerId);

    // ---- Klick-Erkennung ----
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const dist = Math.hypot(dx, dy);
    const elapsed = performance.now() - dragRef.current.downTime;

    // Wenn kleine Bewegung + kurzer Tap → als Klick behandeln
    if (dist <= CLICK_MAX_DIST && elapsed <= CLICK_MAX_TIME) {
      const elUnder = document.elementFromPoint(e.clientX, e.clientY);
      const cardEl = elUnder?.closest?.("[data-card-idx]");
      const idx = cardEl ? Number(cardEl.dataset.cardIdx) : null;
      if (idx !== null && !Number.isNaN(idx)) {
        onCardClick(idx);
        return; // KEIN Momentum beim Klick
      }
    }

    // Andernfalls: Momentum
    startMomentum(dragRef.current.vx);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafScrollToRef.current);
  }, []);

  return (
    <ScrollBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h4>{headline2}</h4>
        <p>{introText}</p>
      </StyledTextBox>

      <StyledScrollBoxWrapper
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={(e) => {
          if (isDragging) endDrag(e);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        role="listbox"
        aria-label="Horizontale Scroll-Liste"
      >
        {tripleData.map(({ label, title, mobileTitle, text, image }, i) => {
          const focused = focusedIndex === i;
          return (
            <StyledScrollBox
              key={i}
              data-card-idx={i}
              /* onClick entfernt – Klick in endDrag */
              style={{ zIndex: focused ? 5 : 0 }}
            >
              <StyledScrollBoxInner
                style={{
                  transform: focused && !isTouch ? "scale(1.12)" : "scale(1)",
                  transition: "transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                  transformOrigin: "center center",
                  willChange: "transform",
                }}
              >
                <h2>
                  {(showIcon === true || showIcon === "true") && (
                    <StyledIcon>
                      <PiArrowRightLight />
                    </StyledIcon>
                  )}
                  {label || `0${(i % boxData.length) + 1}`}
                </h2>

                <StyledDesktopTitle>{title}</StyledDesktopTitle>
                <StyledMobileTitle>{mobileTitle}</StyledMobileTitle>

                {image && (
                  <ImageWrapper>
                    <StyledImage src={image} alt={title} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
                  </ImageWrapper>
                )}

                <p>{text}</p>
              </StyledScrollBoxInner>
            </StyledScrollBox>
          );
        })}
      </StyledScrollBoxWrapper>
    </ScrollBoxContainer>
  );
}

/* --- Styles --- */

const ScrollBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: var(--spacing-xxxl) 0;
  overflow: hidden;
`;

const StyledScrollBoxWrapper = styled.div`
  display: flex;
  position: relative;
  user-select: none;
  overflow-x: scroll;

  -webkit-overflow-scrolling: auto;
  touch-action: pan-y;
  contain: layout paint;

  background-color: transparent;
  min-width: 250px;
  margin-left: var(--side-padding);
  padding: var(--spacing-xxl) 0 0 0;
  cursor: grab;
  scroll-behavior: auto;

  &:hover,
  &.dragging {
    cursor: grabbing;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  color: ${theme.color.beige};
  max-width: 100%;
  padding: 0 var(--side-padding);
  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 70%;
  }
`;

const StyledScrollBoxInner = styled.div``; // Inline-Styles für Scaling

const StyledScrollBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 var(--spacing-xl) var(--spacing-xxl) 0;
  min-width: 600px;
  flex: 0 0 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 350px;
    margin-right: var(--spacing-xl);
  }

  p {
    line-height: ${theme.lineHeight.xxl};
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  vertical-align: text-bottom;
  height: 100%;
  margin-right: var(--spacing-xs);
  font-size: 1.3rem;
`;

const StyledDesktopTitle = styled.h5`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const StyledMobileTitle = styled.h5`
  display: block;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-m);
  aspect-ratio: 3 / 2;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
`;
