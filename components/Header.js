import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";

export default function Header({ src, headlineThin, headlineBold }) {
  return (
    <>
      <StyledImageHeadContainer>
        <StyledHeadImage
          src={src}
          alt="dakiekste header image"
          priority={true}
          width={1400}
          height={500}
        />
      </StyledImageHeadContainer>
      <StyledHeadlineContainer>
        <StyledH1Thin>{headlineThin}</StyledH1Thin>
        <StyledH1>{headlineBold}</StyledH1>
      </StyledHeadlineContainer>
    </>
  );
}

const StyledImageHeadContainer = styled.div`
  display: flex;
  position: relative;
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
  margin-left: 4rem;
`;

const StyledH1Thin = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: -14rem;
  /* margin-bottom: 3rem; */
  color: ${theme.secondaryColorBeige};
  /* color: ${theme.primaryColor}; */
`;

const StyledH1 = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  /* margin-top: 10rem; */
  margin-bottom: 3rem;
  color: ${theme.secondaryColorBeige};
  /* color: ${theme.primaryColor}; */
`;
