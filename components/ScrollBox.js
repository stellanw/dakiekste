import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react";
import { PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi";

const MOBILE_CYCLIC = false; // <- auf true setzen, wenn Pfeile mobil endlos loopen sollen

export default function ScrollBox({ boxData = [], headline1, headline2, introText, showIcon = false }) {
  const scrollRef = useRef(null); // Sichtfenster (scrollt Desktop+Mobil)
  const trackRef = useRef(null); // Track (Cards)

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Mobil?
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update));
  }, []);

  // RAF-Refs (Desktop)
  const rafScrollToRef = useRef(null);
  const rafAutoRef = useRef(null);
  const rafMomentumRef = useRef(null);

  // Drag (Desktop)
  const dragRef = useRef({ startX: 0, startY: 0, startScroll: 0, lastX: 0, lastT: 0, vx: 0, downTime: 0 });

  // Loop/Range (Desktop-Endlos)
  const seqWRef = useRef(0);
  const startRef = useRef(0);
  const readyRef = useRef(false);

  // „Virtuelle“ Position (Desktop)
  const posRef = useRef(0);
  const applyScroll = (left) => {
    posRef.current = left;
    const c = scrollRef.current;
    if (c) c.scrollLeft = left;
  };
  const getScroll = () => posRef.current;

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Daten: Desktop 3×, Mobil 1×
  const data = useMemo(() => (isTouch ? boxData : [...boxData, ...boxData, ...boxData]), [boxData, isTouch]);

  // Clamp (mobil) oder Wrap (desktop)
  const clampOrWrapLeft = useCallback(
    (left) => {
      if (!readyRef.current) return left;
      if (isTouch) return left; // mobil: kein Loop-Handling
      const w = seqWRef.current;
      const start = startRef.current;
      if (w <= 0) return left;
      if (left - start >= w) return left - w * Math.floor((left - start) / w);
      if (left < start) return left + w * Math.ceil((start - left) / w);
      return left;
    },
    [isTouch]
  );

  // messen
  const measure = useCallback(() => {
    const track = trackRef.current;
    const wrapper = scrollRef.current;
    if (!track || !wrapper || boxData.length === 0) return;

    const children = track.children;
    if (children.length === 0) return;

    if (isTouch) {
      // Mobil: kein Loop, Snap übernimmt
      seqWRef.current = 0;
      startRef.current = 0;
      readyRef.current = true;
      return;
    }

    // Desktop: Loop → Mitte-Kopie als Start
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

  // Wheel (nur Desktop)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      if (isTouch) return;
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX > absY * 1.1 || e.shiftKey) {
        applyScroll(clampOrWrapLeft(getScroll() + e.deltaX));
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isTouch, clampOrWrapLeft]);

  // smooth scroll-to (Desktop)
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

  // Card zentrieren (Desktop)
  const centerCard = useCallback(
    (i) => {
      if (isTouch) return;
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
    [scrollToLeft, isTouch]
  );

  // Toggle Focus (Desktop)
  const onCardClick = useCallback(
    (i) => {
      if (isTouch) return;
      setFocusedIndex((prev) => {
        const next = prev === i ? null : i;
        if (next !== null) requestAnimationFrame(() => centerCard(i));
        return next;
      });
    },
    [centerCard, isTouch]
  );

  // Outside-Click (Desktop)
  useEffect(() => {
    if (focusedIndex === null || isTouch) return;
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
  }, [focusedIndex, isTouch]);

  // Autoplay (nur Desktop)
  useEffect(() => {
    if (prefersReducedMotion || isTouch) return;
    const BASE_SPEED = 0.05;
    let currentSpeed = 0,
      targetSpeed = 0;
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

  // Momentum (nur Desktop)
  const startMomentum = (initialVx) => {
    if (isTouch) return;
    cancelAnimationFrame(rafMomentumRef.current);
    if (prefersReducedMotion || !readyRef.current) return;
    const MAX_VX = 1.3,
      FRICTION = 0.0011,
      CUTOFF = 0.0025;
    let vx = Math.max(Math.min(initialVx, MAX_VX), -MAX_VX);
    let last = performance.now();
    const step = (now) => {
      const dt = now - last;
      last = now;
      if (vx > 0) vx = Math.max(0, vx - FRICTION * dt);
      else if (vx < 0) vx = Math.min(0, vx + FRICTION * dt);
      applyScroll(clampOrWrapLeft(getScroll() - vx * dt));
      if (Math.abs(vx) > CUTOFF) rafMomentumRef.current = requestAnimationFrame(step);
    };
    if (Math.abs(initialVx) > 0.008) rafMomentumRef.current = requestAnimationFrame(step);
  };

  // Pointer Events (nur Desktop)
  const CLICK_MAX_DIST = 6;
  const CLICK_MAX_TIME = 600;

  const onPointerDown = (e) => {
    if (isTouch) return;
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    if (focusedIndex !== null) {
      const cardEl = e.target.closest("[data-card-idx]");
      const i = cardEl ? Number(cardEl.dataset.cardIdx) : null;
      if (i !== focusedIndex) setFocusedIndex(null);
    }

    wrapper.setPointerCapture?.(e.pointerId);
    setIsDragging(true);
    wrapper.classList.add("dragging");

    const x = e.clientX,
      y = e.clientY,
      t = performance.now();
    dragRef.current.startX = x;
    dragRef.current.startY = y;
    dragRef.current.lastX = x;
    dragRef.current.lastT = t;
    dragRef.current.downTime = t;
    dragRef.current.vx = 0;
    dragRef.current.startScroll = getScroll();

    cancelAnimationFrame(rafMomentumRef.current);
  };

  const onPointerMove = (e) => {
    if (isTouch) return;
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX,
      t = performance.now();
    const dx = x - dragRef.current.startX;
    const DRAG_GAIN = 1.15;
    applyScroll(clampOrWrapLeft(dragRef.current.startScroll - dx * DRAG_GAIN));
    const dt = t - dragRef.current.lastT || 16;
    dragRef.current.vx = (x - dragRef.current.lastX) / dt;
    dragRef.current.lastX = x;
    dragRef.current.lastT = t;
  };

  const endDrag = (e) => {
    if (isTouch) return;
    if (!isDragging) return;
    const wrapper = scrollRef.current;
    if (!wrapper) return;
    setIsDragging(false);
    wrapper.classList.remove("dragging");
    wrapper.releasePointerCapture?.(e.pointerId);

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
        return;
      }
    }
    startMomentum(dragRef.current.vx);
  };

  useEffect(() => () => cancelAnimationFrame(rafScrollToRef.current), []);

  /* ---------- Mobil: Pfeile + Zustandsverwaltung ---------- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileMax, setMobileMax] = useState(0);
  const mobRafRef = useRef(null);

  // Anzahl Items für Mobil ermitteln
  useEffect(() => {
    if (!isTouch) return;
    const track = trackRef.current;
    setMobileMax(track ? track.children.length - 1 : 0);
    setMobileIndex(0);
  }, [isTouch, data.length]);

  // Index beim Scroll (mobil) updaten – rAF-throttled
  const getNearestIndexMobile = useCallback(() => {
    const wrapper = scrollRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return 0;
    const center = wrapper.scrollLeft + wrapper.clientWidth / 2;
    const children = Array.from(track.children);
    let bestIdx = 0,
      bestDist = Infinity;
    children.forEach((el, idx) => {
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const d = Math.abs(elCenter - center);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = idx;
      }
    });
    return bestIdx;
  }, []);

  const handleMobileScroll = useCallback(() => {
    if (!isTouch) return;
    if (mobRafRef.current) return;
    mobRafRef.current = requestAnimationFrame(() => {
      mobRafRef.current = null;
      setMobileIndex(getNearestIndexMobile());
    });
  }, [isTouch, getNearestIndexMobile]);

  const scrollToIndexMobile = (idx) => {
    const wrapper = scrollRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;
    const children = track.children;
    const clamped = Math.min(Math.max(idx, 0), children.length - 1);
    const el = children[clamped];
    if (!el) return;
    const target = el.offsetLeft - (wrapper.clientWidth - el.clientWidth) / 2;
    wrapper.scrollTo({ left: target, behavior: "smooth" });
  };

  const onMobilePrev = () => {
    const count = mobileMax + 1;
    const next = MOBILE_CYCLIC ? (mobileIndex - 1 + count) % count : Math.max(0, mobileIndex - 1);
    setMobileIndex(next);
    scrollToIndexMobile(next);
  };

  const onMobileNext = () => {
    const count = mobileMax + 1;
    const next = MOBILE_CYCLIC ? (mobileIndex + 1) % count : Math.min(mobileMax, mobileIndex + 1);
    setMobileIndex(next);
    scrollToIndexMobile(next);
  };

  const leftDisabled = !MOBILE_CYCLIC && mobileIndex <= 0;
  const rightDisabled = !MOBILE_CYCLIC && mobileIndex >= mobileMax;

  return (
    <ScrollBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h4>{headline2}</h4>
        <p>{introText}</p>
      </StyledTextBox>

      <Viewport>
        <StyledScrollBoxWrapper
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={(e) => {
            if (!isTouch && isDragging) endDrag(e);
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onScroll={handleMobileScroll} // <- mobil Index mitführen
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
                    {image && (
                      <ImageWrapper>
                        <StyledImage src={image} alt={title} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
                      </ImageWrapper>
                    )}
                    <StyledDesktopTitle>
                      {" "}
                      {(showIcon === true || showIcon === "true") && (
                        <StyledIcon>
                          <PiArrowRightLight />
                        </StyledIcon>
                      )}
                      {title}
                    </StyledDesktopTitle>
                    <StyledMobileTitle>{mobileTitle}</StyledMobileTitle>

                    <p>{text}</p>
                  </StyledScrollBoxInner>
                </StyledScrollBox>
              );
            })}
          </StyledTrack>
        </StyledScrollBoxWrapper>

        {/* Pfeile am Parent, nicht im Track */}
        {isTouch && (
          <ArrowsLayer aria-hidden="true">
            <MobileArrowLeft type="button" onClick={onMobilePrev} aria-label="Vorherige Karte" disabled={leftDisabled}>
              <PiArrowLeftLight />
            </MobileArrowLeft>
            <MobileArrowRight type="button" onClick={onMobileNext} aria-label="Nächste Karte" disabled={rightDisabled}>
              <PiArrowRightLight />
            </MobileArrowRight>
          </ArrowsLayer>
        )}
      </Viewport>
    </ScrollBoxContainer>
  );
}

/* --- Styles --- */

const ScrollBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: var(--spacing-xxxl) 0;
  overflow: hidden;
`;

const Viewport = styled.div`
  position: relative; /* Bezug für Pfeile */
`;

const StyledScrollBoxWrapper = styled.div`
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

  /* Mobil: native Swipe + Snap */
  &[data-touch="1"] {
    cursor: default;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scroll-padding: 0px;
  }
`;

const StyledTrack = styled.div`
  display: flex;
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

  /* Mobil: mittig einrasten */
  @media (hover: none), (pointer: coarse) {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  p {
    line-height: ${theme.lineHeight.xxl};
    font-weight: ${theme.fontWeight.light};
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
  margin-bottom: var(--spacing-xs);
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
`;

/* --- Pfeil-Layer & Buttons --- */
const ArrowsLayer = styled.div`
  pointer-events: none; /* blockiert nichts darunter */
  position: absolute;
  inset: 0; /* über dem gesamten Viewport */
  display: none;
  z-index: 10;

  @media (hover: none), (pointer: coarse) {
    display: block; /* nur mobil anzeigen */
  }
`;

const MobileArrowBase = styled.button`
  pointer-events: auto; /* Klicks erlaubt */
  position: absolute;
  top: var(--spacing-xl);
  width: 40px;
  height: 40px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xl);
  color: ${theme.color.beige};
  background: transparent;
  transition:
    transform 0.12s ease,
    opacity 0.2s ease;

  &:active {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.35;
    pointer-events: none;
    transform: none;
  }
`;

const MobileArrowLeft = styled(MobileArrowBase)`
  right: calc(2 * var(--side-padding));
`;

const MobileArrowRight = styled(MobileArrowBase)`
  right: var(--side-padding);
`;
