import styled from "styled-components";
import { useEffect } from "react";
import { theme } from "@/styles";

export default function Toast({ message, visible, onClose, duration = 6000 }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [visible, duration, onClose]);

  return (
    <ToastWrap $visible={visible}>
      <ToastContent>{message}</ToastContent>
      {visible && <ToastProgress $duration={duration} />}
    </ToastWrap>
  );
}

const ToastWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background: ${theme.color.dark};
  color: ${theme.color.beige};

  transform: translateY(${({ $visible }) => ($visible ? "0" : "-100%")});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transition:
    transform 0.35s ease,
    opacity 0.2s ease;

  z-index: 9999;
  pointer-events: none;
`;

const ToastContent = styled.div`
  max-width: var(--max-content);
  margin: 0 auto;
  padding: var(--spacing-s) var(--side-padding);

  font-size: var(--font-s);
  letter-spacing: 0.04rem;
  text-transform: uppercase;
`;

const ToastProgress = styled.div`
  height: 3px;
  width: 100%;
  background: ${theme.color.green};

  animation: toast-progress ${({ $duration }) => $duration}ms linear forwards;

  @keyframes toast-progress {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  transform-origin: left;
`;
