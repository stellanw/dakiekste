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
            const isLast = index === teamMembers.length - 1;
            const isExpanded = expandedIndex === index;

            return (
              <TeamCard key={index} data-last={isLast ? "1" : "0"}>
                <ImageWrapper>
                  <MemberImage src={member.image} alt={`Portrait von ${member.name}`} fill quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: 0 var(--side-padding);
`;

const TeamContainer = styled.div`
  --width-card-mobile: 310px;
  --width-card-desktop: 350px;
  --height-card-mobile: 400px;
  --height-card-desktop: 450px;

  width: 100%;
  margin: 0 0 var(--spacing-xxl) 0;

  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  align-items: flex-start;

  /* Optional: Karten mittig ausrichten, wenn Reihe nicht voll wird */
  /* justify-content: center; */
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  min-width: var(--width-card-mobile);
  max-width: var(--width-card-mobile);
  flex: 0 0 var(--width-card-mobile);

  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: var(--width-card-desktop);
    max-width: var(--width-card-desktop);
  }

  &[data-last="1"] {
    @media (min-width: ${theme.breakpoints.tablet}) {
      min-width: calc(var(--width-card-desktop) * 1.5);
      max-width: calc(var(--width-card-desktop) * 1.5);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: var(--height-card-mobile);
  margin-bottom: var(--spacing-l);
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  contain: paint;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: var(--height-card-desktop);
    margin-bottom: var(--spacing-m);
  }
`;

const MemberImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  border-radius: ${theme.borderRadius};
  user-select: none;
  -webkit-user-drag: none;
  transform: scale(1.2);
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

  &:hover h6 {
    color: ${theme.color.green};
  }
  &:hover ${ToggleIcon} svg {
    transform: scale(1.25);
    color: ${theme.color.green};
  }
`;
