import { theme } from "@/styles";
import styled from "styled-components";
import Image from "next/image";
import { useRef, useState } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";

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
            <StyledMemberImage
              src={member.image}
              alt={`Portrait von ${member.name}`}
              fill
              quality={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
            />
          </StyledMemberImageContainer>

          <NameIconContainer>
            <ToggleIcon onClick={() => toggleExpand(index)}>{expandedIndex === index ? <PiMinus /> : <PiPlus />}</ToggleIcon>
            <h6>{member.name}</h6>
          </NameIconContainer>

          <TextContainer $isExpanded={expandedIndex === index}>
            <Inner>{member.text}</Inner>
          </TextContainer>
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
  @media (max-width: ${theme.breakpoints.tablet}) {
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
  position: relative;
  display: flex;
  padding-top: var(--spacing-xs);

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-top: var(--spacing-s);
  }

  h6 {
    margin-left: var(--spacing-m);
  }
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? "1fr" : "0fr")};
  transition:
    grid-template-rows 350ms ease,
    opacity 300ms ease;
  opacity: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)};
`;

const Inner = styled.div`
  overflow: hidden; /* wichtig fürs „Zufahren“ */
  p {
    padding-bottom: var(--spacing-xs);
  }
`;

const ToggleIcon = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: var(--font-l);
  color: ${theme.color.dark};
  top: 25%;
  left: 0;
  &:hover {
    scale: 1.15;
  }

  svg {
    border-radius: 3px;
    stroke-width: 8px;
    background-color: ${theme.color.green};
    padding: 4px;
  }
`;
