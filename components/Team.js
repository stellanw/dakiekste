import { theme } from "@/styles";
import styled from "styled-components";
import Image from "next/image";
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
      const walk = (x - startX) * 1.5;
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
        </StyledTeamMemberContainer>
      ))}
    </StyledTeamMembersContainer>
  );
}

const StyledTeamMembersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: var(--side-padding);
  background-color: transparent;
  width: 100%;
  user-select: none;
  padding-right: var(--side-padding);
  min-width: 250px;
  cursor: grab;

  /* Firefox */
  & {
    scrollbar-width: thin;
    scrollbar-color: ${theme.color.dark} transparent;
  }

  /* Webkit */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.dark};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.green};
  }

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

const StyledTeamMemberContainer = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 315px;
  margin-left: var(--spacing-xxl);
  padding-bottom: var(--spacing-xxl);
  @media (min-width: ${theme.breakpoints.tablet}) {
    max-width: 350px;
    &:last-child {
      margin-left: calc(2 * var(--spacing-xxl));
      margin-right: var(--side-padding);
      min-width: 650px;
    }
  }
`;

const StyledMemberImageContainer = styled.div`
  height: 450px;
  padding-bottom: var(--spacing-m);
  overflow: hidden;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
`;
