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
      </StyledHeadContainer>
      <StyledHeadlineContainer>
        <StyledH1Top>{headlineBold1}</StyledH1Top>
        <StyledH1>
          <StyledThinSpan>{headlineThin}</StyledThinSpan>
          {headlineBold2}
        </StyledH1>
      </StyledHeadlineContainer>
    </>
  );
}

const StyledHeadContainer = styled.div`
  z-index: -5;
  width: 100%;
  height: 400px;
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
  margin: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: end;
  align-items: end;
  margin-top: -8rem;
`;

const StyledH1Top = styled.span`
  font-size: ${theme.fontSizes.xxxl};
  font-weight: 600;
  margin: 0;
  color: ${theme.secondaryColorBeige};
`;

const StyledH1 = styled.h1`
  font-size: ${theme.fontSizes.xxxl};
  font-weight: 600;
  margin: 0;
  color: ${theme.secondaryColorBeige};
`;

const StyledThinSpan = styled.span`
  font-weight: 200;
  padding-right: 0.3rem;
`;
