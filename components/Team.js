import { theme } from "@/styles";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";

export default function Team({ teamMembers = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => setExpandedIndex((i) => (i === index ? null : index));

  return (
    <OuterWrapper>
      <InnerWrapper>
        <TeamContainer>
          {teamMembers.map((member, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <TeamCard key={index}>
                <ImageWrapper onClick={() => toggleExpand(index)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleExpand(index)} $isExpanded={isExpanded}>
                  <MemberImage src={member.image} alt={member.alt} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
                </ImageWrapper>

                <NameIconContainer role="button" tabIndex={0} onClick={() => toggleExpand(index)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleExpand(index)} $isExpanded={isExpanded}>
                  <h6>{member.name}</h6>
                  <ToggleIcon $isExpanded={isExpanded}>{isExpanded ? <PiMinus /> : <PiPlus />}</ToggleIcon>
                </NameIconContainer>

                <TextContainer $isExpanded={isExpanded}>
                  <Inner>{member.text}</Inner>
                </TextContainer>
              </TeamCard>
            );
          })}
        </TeamContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.section`
  width: 100%;
  background-color: ${theme.color.beige};
  padding: var(--spacing-xl) 0 var(--spacing-xxxl) 0;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: 0 var(--side-padding);
`;

const TeamContainer = styled.div`
  --height-card-mobile: 400px;
  --height-card-desktop: 480px;

  display: grid;
  gap: var(--spacing-xl);
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1.5fr;
  }
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  width: 100%;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: var(--height-card-mobile);
  margin-bottom: var(--spacing-s);
  overflow: hidden;
  border-radius: ${theme.borderRadius};

  @media (min-width: ${theme.breakpoints.desktop}) {
    max-height: var(--height-card-desktop);
    min-height: var(--height-card-desktop);
    height: var(--height-card-desktop);
  }
`;

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: var(--height-card-mobile);
//   margin-bottom: var(--spacing-s);
//   overflow: hidden;
//   border-radius: ${theme.borderRadius};
//   contain: paint;
//   transform: translateZ(0);
//   backface-visibility: hidden;

//   @media (min-width: ${theme.breakpoints.tablet}) {
//     height: var(--height-card-mobile);
//     margin-bottom: var(--spacing-xs);
//   }
// `;

const MemberImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  user-select: none;
  -webkit-user-drag: none;
  transform: scale(1.2);

  @media (min-width: ${theme.breakpoints.tablet}) {
    transform: scale(1);
    object-position: center;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    transform: scale(1.1);
    object-position: center;
  }
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? "1fr" : "0fr")};
  transition:
    grid-template-rows 250ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 200ms cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)};
`;

const Inner = styled.div`
  overflow: hidden;
  p {
    padding: var(--spacing-xs) 0;
  }
`;

const ToggleIcon = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 3px;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 8px;
    color: ${theme.color.dark};
    transform: scale(0.85);
  }
`;

const NameIconContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  user-select: none;

  h6 {
    font-size: var(--font-l);
    color: ${theme.color.dark};
    margin-bottom: 0;
  }

  &:hover ${ToggleIcon} svg {
    transform: scale(1);
    color: ${theme.color.green};
  }
`;
