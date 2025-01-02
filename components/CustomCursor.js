import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AugeIcon from "@/Icons/AugeIcon";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1); // Initial scale for the cursor
  const eyesRef = useRef([React.createRef(), React.createRef()]);
  const focusPoints = useRef([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      // Check if the cursor is hovering over an interactive element
      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (element && (element.tagName === "A" || element.tagName === "BUTTON")) {
        setScale(1.5); // Scale up when over a link or button
      } else {
        setScale(1); // Reset scale otherwise
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const h1Elements = document.querySelectorAll("h1");
    focusPoints.current = Array.from(h1Elements);
  }, []);

  const calculateRotation = (eyeRef) => {
    if (!eyeRef.current) return 0;

    let closestAngle = 0;
    let closestDistance = Infinity;

    focusPoints.current.forEach((focusPoint) => {
      const rect = focusPoint.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = cursorPosition.x - centerX;
      const dy = cursorPosition.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestAngle = Math.atan2(dy, dx) * (180 / Math.PI) - 90; // Adjust angle to align the eye
      }
    });

    return closestAngle;
  };

  return (
    <StyledCursor style={{ left: cursorPosition.x, top: cursorPosition.y }} scale={scale}>
      <Eye
        ref={eyesRef.current[0]}
        rotation={calculateRotation(eyesRef.current[0])}
        position="left"
      >
        <AugeIcon />
      </Eye>
      <Eye
        ref={eyesRef.current[1]}
        rotation={calculateRotation(eyesRef.current[1])}
        position="right"
      >
        <AugeIcon />
      </Eye>
    </StyledCursor>
  );
}

const StyledCursor = styled.div`
  position: fixed;
  pointer-events: none; /* Prevent the cursor from interfering with other elements */
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 38px; /* Width adjusted to fit both eyes */
  height: 18px; /* Height adjusted */
  display: flex;
  justify-content: space-between; /* Space between the eyes */
  align-items: center; /* Center the eyes vertically */
  cursor: pointer; /* Make it behave like a pointer */
  transition: transform 0.2s ease; /* Smooth scaling transition */
  transform: scale(${({ scale }) => scale}); /* Apply scaling */
`;
const Eye = styled.div`
  transition: transform 0.1s ease;

  display: inline-block;
  transform: rotate(${({ rotation }) => rotation}deg);
  margin: auto;
  height: 18px;
  /* color: ${theme.color.green}; */
  color: black;
  :hover {
    transform: scale(1.2);
  }
`;
