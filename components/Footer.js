import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledUl>
        <StyledNavButton>
          <Link href="/impressum">Impressum</Link>
        </StyledNavButton>
      </StyledUl>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  flex-shrink: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 1.5rem;
  background-color: white;
  box-shadow: 0 -10px 5px 50% black;
  // border-top: 1px solid;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0.3rem;
  margin: 0;
`;

const StyledNavButton = styled.li`
  font-size: 0.5rem;
`;
