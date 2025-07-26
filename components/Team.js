import { theme } from "@/styles";
import styled from "styled-components";
import Image from "next/image";
import { useRef, useState } from "react";
import { PiArrowRightLight } from "react-icons/pi";

export default function Team({ teamMembers = [] }) {
  const containerRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <StyledTeamMembersContainer ref={containerRef}>
      {teamMembers.map((member, index) => (
        <StyledTeamMemberContainer key={index}>
          <StyledMemberImageContainer>
            <StyledMemberImage src={member.image} alt={`Portrait von ${member.name}`} width={1600} height={800} />
          </StyledMemberImageContainer>

          <NameIconContainer>
            <h6>{member.name}</h6>
            <StyledPiArrowRightLight onClick={() => toggleExpand(index)} isExpanded={expandedIndex === index} />
          </NameIconContainer>
          {expandedIndex === index && <p>{member.text}</p>}
        </StyledTeamMemberContainer>
      ))}
    </StyledTeamMembersContainer>
  );
}

const StyledTeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: var(--spacing-xl);
  width: 100%;
  margin-bottom: var(--spacing-xxl);
  padding: 0 var(--side-padding);
  overflow-x: hidden;
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`;

const StyledTeamMemberContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: var(--spacing-xl);
  width: 320px;

  &:last-child {
    width: 500px; // z. B. 1.5x breiter
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;

    &:last-child {
      width: 100%;
    }
  }
`;

const StyledMemberImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 320px; // ← feste Höhe für alle
  overflow: hidden;
  border-radius: ${theme.borderRadius};
`;

const StyledMemberImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 15%;

  ${StyledTeamMemberContainer}:last-child & {
    object-position: 50% 50%;
  }

  ${StyledMemberImageContainer} & {
    transform: scale(1.5);
  }
`;

const NameIconContainer = styled.div`
  display: flex;
  padding-top: var(--spacing-xs);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-top: var(--spacing-s);
  }

  h6 {
    margin-right: var(--spacing-xs);
  }
`;

const StyledPiArrowRightLight = styled(PiArrowRightLight)`
  stroke-width: 15;
  transform: ${({ isExpanded }) => (isExpanded ? "rotate(-45deg)" : "rotate(45deg)")};
  transition: transform 0.3s ease;
  cursor: pointer;
`;
