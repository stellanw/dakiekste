import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react";
import { PiArrowRightLight } from "react-icons/pi";

export default function ScrollBox({ boxData = [], headline1, headline2, introText, showIcon = false }) {
  const scrollRef = useRef(null); // Sichtfenster
  const trackRef = useRef(null); // Inhalt-Track (mobil via transform)

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Touch/Fine-Pointer unterscheiden
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  // RAF-Refs
  const rafScrollToRef = useRef(null);
  const rafAutoRef = useRef(null);
  const rafMomentumRef = useRef(null);

  // Drag-Bookkeeping
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    startScroll: 0,
    lastX: 0,
    lastT: 0,
    vx: 0,
    downTime: 0,
  });
  // rAF-Throttle fürs Drag-Schreiben
  const dragRafRef = useRef(null);
  const desiredLeftRef = useRef(null);

  // Loop/Range
  const seqWRef = useRef(0);
  const startRef = useRef(0);
  const readyRef = useRef(false);

  // „Virtuelle“ Position (Desktop=scrollLeft, Mobile=transform)
  const posRef = useRef(0);
  const applyScroll = (left) => {
    posRef.current = left;
    if (isTouch) {
      const track = trackRef.current;
      if (track) track.style.transform = `translate3d(${-left}px,0,0)`;
    } else {
      const c = scrollRef.current;
      if (c) c.scrollLeft = left;
    }
  };
  const getScroll = () => posRef.current;

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 🔑 Datenquelle: Desktop 3× (Endless), Mobile 1× (clamp)
  const data = useMemo(() => (isTouch ? boxData : [...boxData, ...boxData, ...boxData]), [boxData, isTouch]);

  // Clamp (mobil) oder Wrap (desktop)
  const clampOrWrapLeft = useCallback(
    (left) => {
      if (!readyRef.current) return left;

      if (isTouch) {
        const wrapper = scrollRef.current;
        const track = trackRef.current;
        if (!wrapper || !track) return left;
        const max = Math.max(0, track.scrollWidth - wrapper.clientWidth);
        if (!Number.isFinite(max)) return left;
        if (left < 0) return 0;
        if (left > max) return max;
        return left;
      }

      // Desktop: wrap zwischen Mittel-Start und Mittel-Start+seqW
      const w = seqWRef.current;
      const start = startRef.current;
      if (w <= 0) return left;
      if (left - start >= w) return left - w * Math.floor((left - start) / w);
      if (left < start) return left + w * Math.ceil((start - left) / w);
      return left;
    },
    [isTouch]
  );

  // Messen
  const measure = useCallback(() => {
    const track = trackRef.current;
    const wrapper = scrollRef.current;
    if (!track || !wrapper || boxData.length === 0) return;

    const children = track.children;
    if (children.length === 0) return;

    if (isTouch) {
      // Mobil: kein Loop → einfach links starten
      seqWRef.current = 0;
      startRef.current = 0;
      applyScroll(0);
    } else {
      // Desktop: Loop → Mitte-Kopie als Start
      if (children.length < boxData.length * 2) return; // sicherstellen, dass 3× gerendert ist
      const i0 = 0;
      const i1 = boxData.length;
      const left0 = children[i0].offsetLeft;
      const left1 = children[i1].offsetLeft;
      const seqW = left1 - left0;
      seqWRef.current = seqW;
      startRef.current = left1;
      applyScroll(left1);
    }

    readyRef.current = true;
  }, [boxData.length, isTouch]);

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

  // Wheel (nur Desktop sinnvoll)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (isTouch) return; // mobil: Track per transform, Wheel ignorieren
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX > absY * 1.1 || e.shiftKey) {
        applyScroll(clampOrWrapLeft(getScroll() + e.deltaX));
      } else {
        const NUDGE = 0.35;
        applyScroll(clampOrWrapLeft(getScroll() + e.deltaY * NUDGE));
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isTouch, clampOrWrapLeft]);

  // smooth scroll-to
  const scrollToLeft = useCallback(
    (target, duration = 420) => {
      cancelAnimationFrame(rafScrollToRef.current);
      const start = getScroll();
      const delta = target - start;
      const t0 = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        applyScroll(clampOrWrapLeft(start + delta * easeOutCubic(t)));
        if (t < 1) rafScrollToRef.current = requestAnimationFrame(step);
      };
      rafScrollToRef.current = requestAnimationFrame(step);
    },
    [clampOrWrapLeft]
  );

  // Card zentrieren
  const centerCard = useCallback(
    (i) => {
      const wrapper = scrollRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;
      const el = track.children[i];
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const viewCenter = getScroll() + wrapper.clientWidth / 2;
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

  // Autoplay (mobil langsam, desktop normal) – clamp/wrap aware
  useEffect(() => {
    if (prefersReducedMotion) return;

    const isMobile = isTouch || (typeof window !== "undefined" && window.innerWidth < 768);
    const BASE_SPEED = isMobile ? 0.02 : 0.05;

    let currentSpeed = 0;
    let targetSpeed = 0;
    const LERP = 0.045;

    let last = performance.now();

    const tick = (now) => {
      const wrapper = scrollRef.current;
      if (!wrapper) return;

      const dt = now - last;
      last = now;

      const paused = isDragging || isHovering || isFocused || focusedIndex !== null || !readyRef.current;
      targetSpeed = paused ? 0 : BASE_SPEED;

      currentSpeed += (targetSpeed - currentSpeed) * LERP;

      if (!paused && currentSpeed > 0.0002) {
        applyScroll(clampOrWrapLeft(getScroll() + currentSpeed * dt));
      }

      rafAutoRef.current = requestAnimationFrame(tick);
    };

    rafAutoRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafAutoRef.current);
  }, [isDragging, isHovering, isFocused, prefersReducedMotion, focusedIndex, isTouch, clampOrWrapLeft]);

  // Momentum (Drag → Nachrollen) – clamp/wrap aware
  const startMomentum = (initialVx) => {
    cancelAnimationFrame(rafMomentumRef.current);
    if (prefersReducedMotion) return;
    if (!readyRef.current) return;

    const isMobile = isTouch || (typeof window !== "undefined" && window.innerWidth < 768);
    const MAX_VX = isMobile ? 1.0 : 1.3;
    const FRICTION = isMobile ? 0.0009 : 0.0011;
    const CUTOFF = isMobile ? 0.0012 : 0.0025;

    let vx = Math.max(Math.min(initialVx, MAX_VX), -MAX_VX);
    let last = performance.now();

    const step = (now) => {
      const dt = now - last;
      last = now;

      if (vx > 0) vx = Math.max(0, vx - FRICTION * dt);
      else if (vx < 0) vx = Math.min(0, vx + FRICTION * dt);

      applyScroll(clampOrWrapLeft(getScroll() - vx * dt));
      if (Math.abs(vx) > CUTOFF) {
        rafMomentumRef.current = requestAnimationFrame(step);
      }
    };

    if (Math.abs(initialVx) > 0.008) {
      rafMomentumRef.current = requestAnimationFrame(step);
    }
  };

  // Drag rAF-Throttle
  const flushDrag = () => {
    if (dragRafRef.current) return;
    dragRafRef.current = requestAnimationFrame(() => {
      dragRafRef.current = null;
      const left = desiredLeftRef.current;
      if (left == null) return;
      applyScroll(clampOrWrapLeft(left));
    });
  };

  // Pointer Events
  const CLICK_MAX_DIST = 6;
  const CLICK_MAX_TIME = 600;

  const onPointerDown = (e) => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    if (focusedIndex !== null) {
      const cardEl = e.target.closest("[data-card-idx]");
      const i = cardEl ? Number(cardEl.dataset.cardIdx) : null;
      if (i !== focusedIndex) setFocusedIndex(null);
    }

    if (!isTouch) wrapper.setPointerCapture?.(e.pointerId);
    setIsDragging(true);
    wrapper.classList.add("dragging");

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

    if (!isTouch) e.preventDefault(); // Desktop: Text-Selektion verhindern

    const x = e.clientX;
    const t = performance.now();
    const dx = x - dragRef.current.startX;

    const DRAG_GAIN = isTouch ? 1.0 : 1.15;

    desiredLeftRef.current = dragRef.current.startScroll - dx * DRAG_GAIN;
    flushDrag();

    const dt = t - dragRef.current.lastT || 16;
    dragRef.current.vx = (x - dragRef.current.lastX) / dt;
    dragRef.current.lastX = x;
    dragRef.current.lastT = t;
  };

  const endDrag = (e) => {
    if (!isDragging) return;
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    setIsDragging(false);
    wrapper.classList.remove("dragging");
    if (!isTouch) wrapper.releasePointerCapture?.(e.pointerId);

    // Klick-Erkennung
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const dist = Math.hypot(dx, dy);
    const elapsed = performance.now() - dragRef.current.downTime;

    if (dist <= CLICK_MAX_DIST && elapsed <= CLICK_MAX_TIME) {
      const elUnder = document.elementFromPoint(e.clientX, e.clientY);
      const cardEl = elUnder?.closest?.("[data-card-idx]");
      const idx = cardEl ? Number(cardEl.dataset.cardIdx) : null;
      if (idx !== null && !Number.isNaN(idx)) {
        onCardClick(idx);
        return; // kein Momentum beim Klick
      }
    }

    startMomentum(dragRef.current.vx);
  };

  useEffect(() => () => cancelAnimationFrame(rafScrollToRef.current), []);

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
        data-touch={isTouch ? "1" : "0"}
      >
        <StyledTrack ref={trackRef}>
          {data.map(({ label, title, mobileTitle, text, image }, i) => {
            const focused = focusedIndex === i;
            return (
              <StyledScrollBox key={i} data-card-idx={i} style={{ zIndex: focused ? 5 : 0 }}>
                <StyledScrollBoxInner
                  style={{
                    transform: focused && !isTouch ? "scale(1.12)" : "scale(1)",
                    transition: "transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    transformOrigin: "center center",
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
        </StyledTrack>
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
  position: relative;
  user-select: none;
  background-color: transparent;
  min-width: 250px;
  margin-left: var(--side-padding);
  padding: var(--spacing-xxl) 0 0 0;

  /* Desktop: echte Scroll-Area */
  display: flex;
  overflow-x: scroll;
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

  /* Mobil (per data-hook): Transform-Track, kein natives horizontales Scrollen */
  &[data-touch="1"] {
    overflow: hidden;
    cursor: default;
  }
`;

const StyledTrack = styled.div`
  display: flex;
  will-change: transform; /* Compositor-Pfad für Mobile */
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

const StyledScrollBoxInner = styled.div``;

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
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  backface-visibility: hidden;
  transform: translateZ(0);
`;
