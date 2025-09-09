import styled from "styled-components";
import { theme } from "@/styles";

export const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 10000;

  /* sorgt dafür, dass der Inhalt innerhalb der Containerkante bleibt */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-m);

  /* verschiebt die ganze Box nach links bis zur Containerkante */
  transform: translateX(calc(-1 * (100vw - min(100vw, var(--max-content))) / 2));
`;
