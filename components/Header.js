import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";

export default function Header({ src, headlineThin, headlineBold1, headlineBold2 }) {
  return (
    <>
      <StyledHeadContainer>
        <StyledHeadImage
          src={src}
          alt="dakiekste header image"
          priority={true}
          width={1400}
          height={500}
        />
        <StyledHeadlineContainer>
          <StyledH1>{headlineBold1}</StyledH1>
          <StyledH1>
            <StyledThinSpan>{headlineThin}</StyledThinSpan>
            {headlineBold2}
          </StyledH1>
        </StyledHeadlineContainer>
      </StyledHeadContainer>
    </>
  );
}

const StyledHeadContainer = styled.div`
  z-index: -5;
  width: 100%;
  height: 400px;
  overflow: hidden;
  @media (min-width: 750px) {
    height: 600px;
  }
  @media (min-width: 1100px) {
    height: 800px;
  }
`;

const StyledHeadImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const StyledHeadlineContainer = styled.div`
  margin: -9rem 0 4rem 3.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: end;
  align-items: start;
  padding: 0;

  @media (min-width: 750px) {
    margin: -12rem 0 4rem 3.6rem;
  }
  @media (min-width: 1100px) {
    margin: -14rem 0 4rem 3.6rem;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 700;
  margin: 0;
  color: ${theme.secondaryColorBeige};
  font-size: ${theme.fontSizes.xxxl};

  @media (min-width: 750px) {
    font-size: ${theme.fontSizes.xxxxl};
  }
  @media (min-width: 1100px) {
    font-size: ${theme.fontSizes.xxxxxl};
  }
`;

const StyledThinSpan = styled.span`
  font-weight: 200;
  padding-right: 0.3rem;
`;
