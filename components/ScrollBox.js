import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react";
import { PiArrowRightLight, PiArrowLeftLight, PiArrowBendDownRightLight } from "react-icons/pi";

const MOBILE_CYCLIC = false;

export default function ScrollBox({ boxData = [], headline1, headline2, headline2mobile, introText, showIcon = false }) {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const mobileAnimatingRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${theme.breakpoints.tablet})`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update));
  }, []);

  const rafScrollToRef = useRef(null);
  const rafMomentumRef = useRef(null);
  const navRef = useRef(false);

  const dragRef = useRef({ startX: 0, startY: 0, startScroll: 0, lastX: 0, lastT: 0, vx: 0, downTime: 0 });

  const seqWRef = useRef(0);
  const startRef = useRef(0);
  const readyRef = useRef(false);

  const posRef = useRef(0);
  const applyScroll = (left) => {
    posRef.current = left;
    const c = scrollRef.current;
    if (c) c.scrollLeft = left;
  };
  const getScroll = () => {
    const c = scrollRef.current;
    return c ? c.scrollLeft : posRef.current;
  };

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const baseArr = useMemo(() => (Array.isArray(boxData) ? boxData : []), [boxData]);
  const rotated = useMemo(() => {
    if (baseArr.length <= 1) return baseArr;
    return [baseArr[baseArr.length - 1], ...baseArr.slice(0, -1)];
  }, [baseArr]);

  const data = useMemo(() => (isTouch ? baseArr : [...rotated, ...rotated, ...rotated]), [isTouch, baseArr, rotated]);

  const clampOrWrapLeft = useCallback(
    (left) => {
      if (!readyRef.current) return left;
      if (isTouch) return left;
      const w = seqWRef.current;
      const start = startRef.current;
      if (w <= 0) return left;
      if (left - start >= w) return left - w * Math.floor((left - start) / w);
      if (left < start) return left + w * Math.ceil((start - left) / w);
      return left;
    },
    [isTouch]
  );

  const measure = useCallback(() => {
    const track = trackRef.current;
    const wrapper = scrollRef.current;
    if (!track || !wrapper || boxData.length === 0) return;
    const children = track.children;
    if (children.length === 0) return;
    if (isTouch) {
      seqWRef.current = 0;
      startRef.current = 0;
      readyRef.current = true;
      return;
    }
    if (children.length < boxData.length * 2) return;
    const i1 = boxData.length;
    const left0 = children[0].offsetLeft;
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
      cancelAnimationFrame(rafScrollToRef.current);
      cancelAnimationFrame(rafMomentumRef.current);
      requestAnimationFrame(() => requestAnimationFrame(measure));
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  const getNearestIndex = useCallback(() => {
    const wrapper = scrollRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return 0;
    const center = getScroll() + wrapper.clientWidth / 2;
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

  const getNearestCopyIndex = useCallback(
    (baseIdx) => {
      const track = trackRef.current;
      const baseCount = boxData.length;
      if (!track || baseCount === 0) return baseIdx;
      const n = track.children.length;
      const cand = [baseIdx - 2 * baseCount, baseIdx - baseCount, baseIdx, baseIdx + baseCount, baseIdx + 2 * baseCount].filter((j) => j >= 0 && j < n);
      const current = getScroll();
      let best = cand[0],
        bestDist = Infinity;
      cand.forEach((j) => {
        const el = track.children[j];
        const d = Math.abs((el?.offsetLeft ?? 0) - current);
        if (d < bestDist) {
          bestDist = d;
          best = j;
        }
      });
      return best;
    },
    [boxData.length]
  );

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

  const scrollToLeft = useCallback(
    (target, duration = 160, onDone) => {
      cancelAnimationFrame(rafScrollToRef.current);
      navRef.current = true;
      const start = getScroll();
      const delta = target - start;
      const t0 = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        applyScroll(clampOrWrapLeft(start + delta * easeOutCubic(t)));
        if (t < 1) {
          rafScrollToRef.current = requestAnimationFrame(step);
        } else {
          navRef.current = false;
          onDone?.();
        }
      };
      rafScrollToRef.current = requestAnimationFrame(step);
    },
    [clampOrWrapLeft]
  );

  const centerCard = useCallback(
    (i, onDone) => {
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
      scrollToLeft(target, 120, onDone);
    },
    [scrollToLeft, isTouch]
  );

  useEffect(() => {
    if (focusedIndex === null || isTouch) return;
    const onDocPointerDown = (e) => {
      if (e.target.closest('[data-scroll-arrow="1"]')) return;
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
        setFocusedIndex(null);
        const wrapperNow = scrollRef.current;
        if (wrapperNow && wrapperNow.contains(cardEl)) {
          const i = Number(cardEl.dataset.cardIdx);
          centerCard(i, () => setFocusedIndex(getNearestIndex()));
        }
        return;
      }
    }
    startMomentum(dragRef.current.vx);
  };

  useEffect(() => () => cancelAnimationFrame(rafScrollToRef.current), []);

  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileMax, setMobileMax] = useState(0);
  const mobRafRef = useRef(null);

  useEffect(() => {
    if (!isTouch) return;
    const track = trackRef.current;
    setMobileMax(track ? track.children.length - 1 : 0);
    setMobileIndex(0);
  }, [isTouch, data.length]);

  const onPrev = () => {
    if (isTouch) return onMobilePrev();
    const base = boxData.length || 1;
    const iAbs = getNearestIndex();
    const baseIdx = ((iAbs % base) + base) % base;
    const desiredBase = (baseIdx - 1 + base) % base;
    const tgt = getNearestCopyIndex(desiredBase);
    centerCard(tgt, () => setFocusedIndex(getNearestIndex()));
  };

  const onNext = () => {
    if (isTouch) return onMobileNext();
    const base = boxData.length || 1;
    const iAbs = getNearestIndex();
    const baseIdx = ((iAbs % base) + base) % base;
    const desiredBase = (baseIdx + 1) % base;
    const tgt = getNearestCopyIndex(desiredBase);
    centerCard(tgt, () => setFocusedIndex(getNearestIndex()));
  };

  const handleKeyNav = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      }
    },
    [onPrev, onNext]
  );

  const handleMobileScroll = useCallback(() => {
    if (!isTouch) return;
    if (mobRafRef.current) return;
    mobRafRef.current = requestAnimationFrame(() => {
      mobRafRef.current = null;
      setMobileIndex(getNearestIndex());
    });
  }, [isTouch, getNearestIndex]);

  const scrollToIndexMobile = (idx) => {
    const wrapper = scrollRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;
    const children = track.children;
    const clamped = Math.min(Math.max(idx, 0), children.length - 1);
    const el = children[clamped];
    if (!el) return;

    if (mobileAnimatingRef.current) return;
    mobileAnimatingRef.current = true;

    const target = el.offsetLeft - (wrapper.clientWidth - el.clientWidth) / 2;
    wrapper.scrollTo({ left: target, behavior: "smooth" });

    setTimeout(() => {
      mobileAnimatingRef.current = false;
    }, 350);
  };

  const onMobilePrev = () => {
    const count = mobileMax + 1;
    const current = getNearestIndex();
    const next = MOBILE_CYCLIC ? (current - 1 + count) % count : Math.max(0, current - 1);
    setMobileIndex(next);
    scrollToIndexMobile(next);
  };

  const onMobileNext = () => {
    const count = mobileMax + 1;
    const current = getNearestIndex();
    const next = MOBILE_CYCLIC ? (current + 1) % count : Math.min(mobileMax, current + 1);
    setMobileIndex(next);
    scrollToIndexMobile(next);
  };

  const leftDisabled = !MOBILE_CYCLIC && mobileIndex <= 0;
  const rightDisabled = !MOBILE_CYCLIC && mobileIndex >= mobileMax;

  const lastScrollYRef = useRef(0);
  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;
    const wrapper = scrollRef.current;
    if (!wrapper) return;
    lastScrollYRef.current = window.scrollY;
    const onWinScroll = () => {
      if (!wrapper) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const rect = wrapper.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= vh) {
        lastScrollYRef.current = window.scrollY;
        return;
      }
      if (navRef.current || isDragging) {
        lastScrollYRef.current = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const dy = y - lastScrollYRef.current;
      if (dy !== 0) {
        const GAIN = 0.6;
        applyScroll(clampOrWrapLeft(getScroll() + dy * GAIN));
      }
      lastScrollYRef.current = y;
    };
    window.addEventListener("scroll", onWinScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWinScroll);
  }, [isTouch, clampOrWrapLeft, isDragging, prefersReducedMotion]);

  return (
    <ScrollBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h4>{isMobile ? headline2mobile || headline2 : headline2}</h4>
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
          onScroll={handleMobileScroll}
          onKeyDown={handleKeyNav}
          tabIndex={0}
          role="listbox"
          aria-label="Horizontale Scroll-Liste"
          data-touch={isTouch ? "1" : "0"}
        >
          <StyledTrack ref={trackRef}>
            {data.map(({ title, text, image, alt, showIcon: itemShowIcon }, i) => {
              const focused = focusedIndex === i;

              const showIconEffective = typeof itemShowIcon === "boolean" ? itemShowIcon : showIcon === true || showIcon === "true";

              return (
                <StyledScrollBox key={i} data-card-idx={i} style={{ zIndex: focused ? 5 : 0 }}>
                  <StyledScrollBoxInner $focused={focused && !isTouch}>
                    {image && (
                      <ImageWrapper>
                        <StyledImage src={image} alt={alt} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" priority />
                      </ImageWrapper>
                    )}

                    <h5>
                      {showIconEffective && (
                        <StyledIcon>
                          <PiArrowBendDownRightLight />
                        </StyledIcon>
                      )}
                      {title}
                    </h5>

                    <p>{text}</p>
                  </StyledScrollBoxInner>
                </StyledScrollBox>
              );
            })}
          </StyledTrack>
        </StyledScrollBoxWrapper>

        <ArrowsLayer>
          <MobileArrowLeft type="button" data-scroll-arrow="1" onPointerDown={(e) => e.stopPropagation()} onClick={onPrev} disabled={isTouch ? leftDisabled : false}>
            <PiArrowLeftLight />
          </MobileArrowLeft>

          <MobileArrowRight type="button" data-scroll-arrow="1" onPointerDown={(e) => e.stopPropagation()} onClick={onNext} disabled={isTouch ? rightDisabled : false}>
            <PiArrowRightLight />
          </MobileArrowRight>
        </ArrowsLayer>
      </Viewport>
    </ScrollBoxContainer>
  );
}

const ScrollBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: var(--spacing-xxxl) 0;
  overflow: hidden;
  margin: 0;
`;

const Viewport = styled.div`
  position: relative;
`;

const StyledScrollBoxWrapper = styled.div`
  user-select: none;
  background-color: transparent;
  min-width: 250px;
  margin-left: var(--side-padding);
  padding: calc(1.5 * var(--spacing-xxl)) 0 0 0;
  display: flex;
  overflow-x: scroll;
  cursor: grab;
  scroll-behavior: auto;

  &:hover,
  &.dragging {
    cursor: pointer;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

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

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-width: 70%;
  }
`;

const StyledScrollBoxInner = styled.div`
  will-change: transform;
  backface-visibility: hidden;
  transform: ${({ $focused }) => ($focused ? "translateZ(0) scale(1.05)" : "translateZ(0) scale(1)")};
  transition: transform ${({ $focused }) => ($focused ? "50ms" : "55ms")} cubic-bezier(0.22, 0.61, 0.36, 1);
  transform-origin: center center;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    transform: none;
    &:hover {
      transform: none;
    }
  }
`;

const StyledScrollBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 calc(1.25 * var(--spacing-xl)) 0 0;
  flex: 0 0 1;

  min-width: 350px;
  max-width: 400px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 400px;
    max-width: 500px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    min-width: 600px;
    max-width: 600px;
  }

  @media (hover: none), (pointer: coarse) {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  /* p {
    line-height: ${theme.lineHeight.xxl};
    font-weight: ${theme.fontWeight.light};
  } */
`;

const StyledIcon = styled.span`
  display: inline-flex;
  vertical-align: text-bottom;
  height: 100%;
  margin-right: var(--spacing-xs);
  font-size: 1.3rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-m);
  aspect-ratio: 3 / 2;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: var(--spacing-xl);
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
`;

const ArrowsLayer = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 10;
`;

const MobileArrowBase = styled.button`
  pointer-events: auto;
  position: absolute;
  top: calc(1.25 * var(--spacing-xl));
  width: 40px;
  height: 40px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${theme.color.beige};
  background: transparent;
  transition:
    transform 0.12s ease,
    opacity 0.2s ease;

  @media (min-width: ${theme.breakpoints.desktop}) {
    top: calc(1.75 * var(--spacing-xl));
  }

  &:active:hover {
    transform: scale(1.1);
    color: ${theme.color.green};
  }

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.35;
    pointer-events: none;
    transform: none;
  }

  svg {
    font-size: var(--font-xl);
    stroke-width: 2px;
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: var(--font-xxl);
    }
  }
`;

const MobileArrowLeft = styled(MobileArrowBase)`
  right: calc(3 * var(--side-padding));

  @media (min-width: ${theme.breakpoints.tablet}) {
    right: calc(3 * var(--side-padding));
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    right: calc(2.2 * var(--side-padding));
  }
`;

const MobileArrowRight = styled(MobileArrowBase)`
  right: var(--side-padding);
`;
