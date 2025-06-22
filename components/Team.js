import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { useRef, useEffect } from "react";

export default function Team({ teamMembers = [] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove("dragging");
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Geschwindigkeit
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const linkItems = [
    {
      href: "email",
      icon: <PiEnvelopeSimpleLight />,
    },
  ];

  return (
    <StyledTeamMembersContainer ref={containerRef}>
      {teamMembers.map((member, index) => (
        <StyledTeamMemberContainer key={index}>
          <StyledMemberImageContainer>
            <StyledMemberImage src={`/images/${member.image}?v=${Date.now()}`} alt={`Portrait of ${member.name}`} width={1200} height={500} />
          </StyledMemberImageContainer>
          <p>
            <span>{member.name}</span>
            <br />
            {member.text}
          </p>
          {/* <StyledLinkWrapper>
            {linkItems.map((linkItem, i) => (
              <Link
                key={i}
                href={member.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkItem.icon}
              </Link>
            ))}
          </StyledLinkWrapper> */}
        </StyledTeamMemberContainer>
      ))}
    </StyledTeamMembersContainer>
  );
}

const StyledTeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: ${theme.spacing.mobile.side};
  background-color: transparent;
  width: 100%;
  user-select: none;
  padding: 0 0 ${theme.spacing.mobile.height.l} 0;

  @media (min-width: 750px) {
    padding: 0 0 ${theme.spacing.tablet.height.l} 0;
  }

  @media (min-width: 1100px) {
    padding: 0 0 ${theme.spacing.desktop.height.l} 0;
  }

  min-width: 250px;

  &::-webkit-scrollbar {
    width: 0;
    height: 1px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.color.dark}; /* Hintergrund der Track */
    border-radius: 0; /* Kein Border-Radius für den Track */
    margin: ${theme.spacing.desktop.side};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.dark};
    border-radius: 0;
    outline: 2px solid ${theme.color.dark};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }
  /* & {
    scrollbar-width: thin; /// Optionen: auto, thin, none
    scrollbar-color: ${theme.color.green} ${theme.color.beige}; /// thumb color, track color
  } */

  cursor: grab;

  &.dragging {
    cursor: grabbing;
  }

  p {
    line-height: 1.3;
  }

  span {
    font-weight: 800;
  }
`;

const ScrollStartSpacer = styled.div`
  flex-shrink: 0;
  width: ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    width: ${theme.spacing.desktop.side};
  }
`;

const StyledTeamMemberContainer = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 350px;
  padding: 0 0 0 ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 0 0 ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: 0 0 0 ${theme.spacing.desktop.side};
  }

  &:last-child {
    margin: 0 ${theme.spacing.mobile.side} 0 0;

    @media (min-width: 750px) {
      margin: 0 ${theme.spacing.tablet.side} 0 0;
    }

    @media (min-width: 1100px) {
      margin: 0 ${theme.spacing.desktop.side} 0 0;
    }
  }
`;

const StyledMemberImageContainer = styled.div`
  height: 450px;
  padding-bottom: ${theme.spacing.m};
  overflow: hidden;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: ${theme.borderRadius};
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: ${theme.spacing.s};
  height: 2rem;
  font-size: ${theme.fontSizes.m};
`;
