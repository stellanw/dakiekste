import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import { useRef, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { PiArrowRightLight } from "react-icons/pi";

export default function ScrollBox({ boxData = [], headline1, headline2, introText, showIcon = false }) {
  const scrollRef = useRef(null);

  const onWheel = (e) => {
    const c = scrollRef.current;
    if (!c) return;
    // vertikal bevorzugen, sonst echtes deltaX nutzen (Trackpad)
    const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (!delta) return;
    e.preventDefault(); // wichtig, sonst „verpufft“ es
    cancelAnimationFrame(rafMomentumRef.current); // Momentum abbrechen
    const WHEEL_GAIN = 1.0; // 0.8–1.2 nach Geschmack
    const next = wrapLeft(getScroll() + delta * WHEEL_GAIN);
    applyScroll(next);
  };

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const dragRef = useRef({ startX: 0, startScroll: 0, lastX: 0, lastT: 0, vx: 0 });
  const rafAutoRef = useRef(null);
  const rafMomentumRef = useRef(null);

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

  // wrap ohne doppelten Write
  const wrapLeft = (left) => {
    const w = seqWRef.current;
    const start = startRef.current;
    if (!readyRef.current || w <= 0) return left;
    if (left - start >= w) {
      // mehrere Sequenzen auf einmal abdecken
      return left - w * Math.floor((left - start) / w);
    }
    if (left < start) {
      return left + w * Math.ceil((start - left) / w);
    }
    return left;
  };

  const measure = () => {
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

    const mid = left1;
    applyScroll(mid);
    readyRef.current = true;
  };

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
  }, [boxData.length]);

  // Autoplay (ruhig + weich)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const BASE_SPEED_DESKTOP = 0.1;
    const BASE_SPEED_MOBILE = 0.03;
    const BASE_SPEED = isMobile ? BASE_SPEED_MOBILE : BASE_SPEED_DESKTOP;

    let currentSpeed = 0; // px/ms
    let targetSpeed = 0;
    const LERP = 0.045; // weicher

    let last = performance.now();

    const tick = (now) => {
      const c = scrollRef.current;
      if (!c) return;

      const dt = now - last;
      last = now;

      const paused = isDragging || isHovering || isFocused || !readyRef.current;
      targetSpeed = paused ? 0 : BASE_SPEED;

      // kein wobble -> weniger micro-jitter
      currentSpeed += (targetSpeed - currentSpeed) * LERP;

      if (!paused && currentSpeed > 0.0002) {
        const next = wrapLeft(getScroll() + currentSpeed * dt);
        applyScroll(next);
      }

      rafAutoRef.current = requestAnimationFrame(tick);
    };

    rafAutoRef.current = requestAnimationFrame(tick);

    const onVis = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(rafAutoRef.current);
      } else {
        const now = performance.now();
        rafAutoRef.current = requestAnimationFrame((t) => {
          last = t; // dt resetten
          tick(t);
        });
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(rafAutoRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [isDragging, isHovering, isFocused, prefersReducedMotion]);

  // Momentum (länger & smoother)
  const startMomentum = (initialVx) => {
    cancelAnimationFrame(rafMomentumRef.current);
    if (prefersReducedMotion) return;

    const c = scrollRef.current;
    if (!c || !readyRef.current) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const MAX_VX = isMobile ? 1.1 : 1.3; // px/ms
    const FRICTION = isMobile ? 0.0013 : 0.0011; // kleiner = länger
    const CUTOFF = 0.0025;

    let vx = Math.max(Math.min(initialVx, MAX_VX), -MAX_VX);
    let last = performance.now();

    const step = (now) => {
      const dt = now - last;
      last = now;

      // Reibung in Richtung 0
      if (vx > 0) vx = Math.max(0, vx - FRICTION * dt);
      else if (vx < 0) vx = Math.min(0, vx + FRICTION * dt);

      const next = wrapLeft(getScroll() - vx * dt);
      applyScroll(next);

      if (Math.abs(vx) > CUTOFF) {
        rafMomentumRef.current = requestAnimationFrame(step);
      }
    };

    if (Math.abs(initialVx) > 0.01) {
      rafMomentumRef.current = requestAnimationFrame(step);
    }
  };

  // Pointer Events
  const onPointerDown = (e) => {
    const c = scrollRef.current;
    if (!c) return;
    c.setPointerCapture?.(e.pointerId);
    setIsDragging(true);
    c.classList.add("dragging");

    const x = e.clientX;
    dragRef.current.startX = x;
    dragRef.current.lastX = x;
    dragRef.current.lastT = performance.now();
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
    startMomentum(dragRef.current.vx);
  };

  return (
    <StyledSlideBoxContainer>
      <StyledTextBox>
        <h2>{headline1}</h2>
        <h4>{headline2}</h4>
        <p>{introText}</p>
      </StyledTextBox>

      <StyledScrollBoxContainer
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
        onWheel={onWheel}
        role="listbox"
        aria-label="Horizontale Scroll-Liste"
      >
        {tripleData.map(({ label, title, mobileTitle, text, image }, i) => (
          <StyledScrollBox key={i}>
            <StyledScrollBoxInner>
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
        ))}
      </StyledScrollBoxContainer>
    </StyledSlideBoxContainer>
  );
}

/* --- Styles --- */

const StyledSlideBoxContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: var(--spacing-xxxl) 0;
  overflow: hidden;
`;

const StyledScrollBoxContainer = styled.div`
  display: flex;
  position: relative;
  user-select: none;
  overflow-x: scroll;

  /* iOS soll nicht mit nativer Inertia "dagegen arbeiten" */
  -webkit-overflow-scrolling: auto;
  touch-action: pan-y; /* vertikal scrollen erlauben, horizontal übernehmen wir */
  contain: layout paint;

  background-color: ${theme.color.dark};
  min-width: 250px;
  margin-left: var(--side-padding);
  padding: var(--spacing-xxl) 0 0 0;
  cursor: grab;
  scroll-behavior: auto;

  &:hover,
  &.dragging {
    cursor: grabbing;
  }

  -ms-overflow-style: none; /* IE/Edge alt */
  scrollbar-width: none; /* Firefox */
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

const StyledScrollBoxInner = styled.div`
  will-change: transform;
  transform-origin: left center;
  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyledScrollBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  color: ${theme.color.beige};
  padding: 0 var(--spacing-xl) var(--spacing-xxl) 0;
  min-width: 600px;
  flex: 0 0 1; /* gleiche Breite erzwingen */

  z-index: 0; /* Basis, wir liften auf Hover */
  &:hover {
    z-index: 3;
  }

  /* Nur auf Geräten mit Hover/Fine Pointer zoomen */
  @media (hover: hover) and (pointer: fine) {
    &:hover ${StyledScrollBoxInner} {
      transform: scale(1.03); /* Stellschraube: 1.02–1.05 */
    }
  }

  /* Auf Touch dezent bei Tap („active“) */
  @media (hover: none) {
    &:active ${StyledScrollBoxInner} {
      transform: scale(1.01);
    }
  }

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

// import Image from "next/image";
// import styled from "styled-components";
// import { theme } from "@/styles";
// import { useRef, useEffect, useState } from "react";
// import { PiArrowRightLight } from "react-icons/pi";

// export default function ScrollBox({ boxData = [], headline1, headline2, introText, showIcon = false }) {
//   const scrollRef = useRef(null);

//   // UI/Interaction State
//   const [isDragging, setIsDragging] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   // Drag bookkeeping
//   const dragRef = useRef({
//     startX: 0,
//     startScroll: 0,
//     lastX: 0,
//     lastT: 0,
//     vx: 0, // px/ms
//   });

//   // RAF ids
//   const rafAutoRef = useRef(null);
//   const rafMomentumRef = useRef(null);

//   // Settings
//   const BASE_SPEED = 0.04; // px/ms (≈ 2.4px/s) – super langsam, dreh nach Bedarf hoch
//   const FRICTION = 0.0025; // Reibung für Momentum (px/ms^2)
//   const MAX_VX = 1.2; // Kappe maximale Geschwindigkeit

//   const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   // --- Helpers ---
//   const container = () => scrollRef.current;
//   const totalWidth = () => container()?.scrollWidth ?? 0;
//   const viewWidth = () => container()?.clientWidth ?? 0;

//   // Endlos-Loop: wir rendern boxData zweimal hintereinander
//   const doubledData = [...boxData, ...boxData];

//   // Auto-Scroll per RAF
//   useEffect(() => {
//     if (prefersReducedMotion) return;

//     let last = performance.now();

//     const tick = (now) => {
//       const c = container();
//       if (!c) return;

//       const dt = now - last;
//       last = now;

//       const paused = isDragging || isHovering || isFocused;
//       if (!paused) {
//         c.scrollLeft += BASE_SPEED * dt;
//         // Endlos-Reset
//         const half = (totalWidth() - viewWidth()) / 2; // halbe Strecke der doppelten Liste
//         if (half > 0 && c.scrollLeft >= half) {
//           c.scrollLeft -= half;
//         }
//       }
//       rafAutoRef.current = requestAnimationFrame(tick);
//     };

//     rafAutoRef.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafAutoRef.current);
//   }, [isDragging, isHovering, isFocused, prefersReducedMotion]);

//   //Pause bei Visibility hidden
//   useEffect(() => {
//     const handleVisibility = () => {
//       if (document.visibilityState === "hidden") {
//         cancelAnimationFrame(rafAutoRef.current);
//       } else {
//         rafAutoRef.current = requestAnimationFrame(tick);
//       }
//     };
//     document.addEventListener("visibilitychange", handleVisibility);
//     return () => document.removeEventListener("visibilitychange", handleVisibility);
//   }, []);

//   // Momentum-Scroll nach Loslassen
//   const startMomentum = (initialVx) => {
//     cancelAnimationFrame(rafMomentumRef.current);
//     if (prefersReducedMotion) return;

//     const c = container();
//     if (!c) return;

//     let vx = Math.max(Math.min(initialVx, MAX_VX), -MAX_VX); // clamp
//     let last = performance.now();

//     const step = (now) => {
//       const dt = now - last;
//       last = now;

//       // Reibung in Richtung 0
//       if (vx > 0) {
//         vx = Math.max(0, vx - FRICTION * dt);
//       } else if (vx < 0) {
//         vx = Math.min(0, vx + FRICTION * dt);
//       }

//       // Move
//       c.scrollLeft -= vx * dt;

//       // Endlos-Reset auch hier
//       const half = (totalWidth() - viewWidth()) / 2;
//       if (half > 0) {
//         if (c.scrollLeft >= half) c.scrollLeft -= half;
//         if (c.scrollLeft < 0) c.scrollLeft += half;
//       }

//       if (Math.abs(vx) > 0.01) {
//         rafMomentumRef.current = requestAnimationFrame(step);
//       }
//     };

//     // nur starten, wenn nennenswerte Geschwindigkeit
//     if (Math.abs(initialVx) > 0.05) {
//       rafMomentumRef.current = requestAnimationFrame(step);
//     }
//   };

//   // Pointer Events (Mouse + Touch)
//   const onPointerDown = (e) => {
//     const c = container();
//     if (!c) return;

//     c.setPointerCapture?.(e.pointerId);
//     setIsDragging(true);
//     c.classList.add("dragging");

//     const x = e.clientX;
//     dragRef.current.startX = x;
//     dragRef.current.lastX = x;
//     dragRef.current.lastT = performance.now();
//     dragRef.current.vx = 0;
//     dragRef.current.startScroll = c.scrollLeft;

//     // Momentum stoppen, wenn neu gezogen wird
//     cancelAnimationFrame(rafMomentumRef.current);
//   };

//   const onPointerMove = (e) => {
//     if (!isDragging) return;
//     const c = container();
//     if (!c) return;

//     e.preventDefault();

//     const x = e.clientX;
//     const t = performance.now();

//     const dx = x - dragRef.current.startX;
//     // scroll in umgekehrte Richtung der Bewegung
//     c.scrollLeft = dragRef.current.startScroll - dx;

//     // Geschwindigkeit messen (letzte Frame-Differenz)
//     const dt = t - dragRef.current.lastT || 16;
//     const dxFrame = x - dragRef.current.lastX;
//     dragRef.current.vx = dxFrame / dt; // px/ms

//     dragRef.current.lastX = x;
//     dragRef.current.lastT = t;

//     // Endlos-Reset beim Drag ebenso ermöglichen
//     const half = (totalWidth() - viewWidth()) / 2;
//     if (half > 0) {
//       if (c.scrollLeft >= half) {
//         c.scrollLeft -= half;
//         dragRef.current.startScroll -= half;
//       } else if (c.scrollLeft < 0) {
//         c.scrollLeft += half;
//         dragRef.current.startScroll += half;
//       }
//     }
//   };

//   const endDrag = (e) => {
//     if (!isDragging) return;
//     const c = container();
//     if (!c) return;

//     setIsDragging(false);
//     c.classList.remove("dragging");
//     c.releasePointerCapture?.(e.pointerId);

//     // Momentum starten (note: beim Scrollen nach links ist vx positiv → wir ziehen links → scrollLeft verringern)
//     startMomentum(dragRef.current.vx);
//   };

//   return (
//     <StyledSlideBoxContainer>
//       <StyledTextBox>
//         <h2>{headline1}</h2>
//         <h4>{headline2}</h4>
//         <p>{introText}</p>
//       </StyledTextBox>

//       <StyledScrollBoxContainer
//         ref={scrollRef}
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={endDrag}
//         onPointerCancel={endDrag}
//         onPointerLeave={(e) => {
//           // nicht abrupt stoppen – Ende wie bei Up
//           if (isDragging) endDrag(e);
//         }}
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         role="listbox"
//         aria-label="Horizontale Scroll-Liste"
//       >
//         {doubledData.map(({ label, title, mobileTitle, text, image }, i) => (
//           <StyledScrollBox key={i}>
//             <h2>
//               {(showIcon === true || showIcon === "true") && (
//                 <StyledIcon>
//                   <PiArrowRightLight />
//                 </StyledIcon>
//               )}
//               {label || `0${(i % boxData.length) + 1}`}
//             </h2>

//             <StyledDesktopTitle>{title}</StyledDesktopTitle>
//             <StyledMobileTitle>{mobileTitle}</StyledMobileTitle>

//             {image && (
//               <ImageWrapper>
//                 <StyledImage src={image} alt={title} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" />
//               </ImageWrapper>
//             )}

//             <p>{text}</p>
//           </StyledScrollBox>
//         ))}
//       </StyledScrollBoxContainer>
//     </StyledSlideBoxContainer>
//   );
// }

// /* --- Styles (deine bestehenden + kleine Ergänzungen) --- */

// const StyledSlideBoxContainer = styled.div`
//   background-color: ${theme.color.dark};
//   padding: var(--spacing-xxxl) 0;
//   overflow: hidden;
// `;

// const StyledScrollBoxContainer = styled.div`
//   display: flex;
//   position: relative;
//   user-select: none;
//   overflow-x: scroll;
//   background-color: ${theme.color.dark};
//   min-width: 250px;
//   margin-left: var(--side-padding);
//   padding: var(--spacing-xxl) 0 0 0;
//   cursor: grab;
//   scroll-behavior: auto; /* wichtig für manuelles Setzen ohne Browser-Smooth */

//   //scroll-snap-type: x proximity; /* sanftes Einrasten */
//   //overscroll-behavior-x: contain; /* verhindert Seitenscroll-Mitschwingen */
//   //scroll-padding-left: var(--side-padding); /* Snap-Offset passend zu deinem linken Padding */

//   &:hover,
//   &.dragging {
//     cursor: grabbing;
//   }

//   /* Firefox */
//   scrollbar-width: thin;
//   scrollbar-color: ${theme.color.beige} ${theme.color.dark};

//   /* Webkit */
//   &::-webkit-scrollbar {
//     width: 6px;
//     height: 6px;
//   }
//   &::-webkit-scrollbar-track {
//     background: transparent;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: ${theme.color.beige};
//     border-radius: 4px;
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background: ${theme.color.green};
//   }
// `;

// const StyledTextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   text-align: start;
//   color: ${theme.color.beige};
//   max-width: 100%;
//   padding: 0 var(--side-padding);

//   @media (min-width: ${theme.breakpoints.tablet}) {
//     max-width: 70%;
//   }
// `;

// const StyledScrollBox = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   align-items: start;
//   color: ${theme.color.beige};
//   padding: 0 var(--spacing-xl) var(--spacing-xxl) 0;
//   min-width: 600px;
//   /* flex: 0 0 1;
//   scroll-snap-align: start; */
//   @media (max-width: ${theme.breakpoints.tablet}) {
//     min-width: 350px;
//     margin-right: var(--spacing-xl);
//   }

//   p {
//     line-height: ${theme.lineHeight.xxl};
//   }
// `;

// const StyledIcon = styled.span`
//   display: inline-flex;
//   vertical-align: text-bottom;
//   height: 100%;
//   margin-right: var(--spacing-xs);
//   font-size: 1.3rem;
//   padding-bottom: 0rem;
// `;

// const StyledDesktopTitle = styled.h5`
//   display: none;
//   @media (min-width: ${theme.breakpoints.tablet}) {
//     display: block;
//   }
// `;

// const StyledMobileTitle = styled.h5`
//   display: block;
//   @media (min-width: ${theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   margin-bottom: var(--spacing-m);
//   aspect-ratio: 3 / 2;
//   width: 100%;
// `;

// const StyledImage = styled(Image)`
//   object-fit: cover;
//   object-position: center;
//   border-radius: ${theme.borderRadius};
// `;
