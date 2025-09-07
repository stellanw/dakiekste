import { theme } from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export default function ImageTextBox({ topline, headline, text1, image, alt, flexflow, mobileFlexflow }) {
  return (
    <Section>
      <Inner $flexflow={flexflow} $mobileFlexflow={mobileFlexflow}>
        <ImageCol>
          <ImageWrap>
            <StyledImage src={image} alt={alt} fill quality={100} sizes="(max-width: 1200px) 100vw, 50vw" />
          </ImageWrap>
        </ImageCol>

        <TextCol>
          <TextWrap>
            <h2>{topline}</h2>
            <h3>{headline}</h3>
            <p>{text1}</p>
          </TextWrap>
        </TextCol>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background-color: ${theme.color.beige};
  width: 100%;
`;

const Inner = styled.div`
  --content-max: 1500px;

  display: flex;
  flex-direction: ${({ $mobileFlexflow }) => $mobileFlexflow || "column"};
  gap: var(--side-padding);
  width: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--spacing-xxl) var(--side-padding);

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: ${({ $flexflow }) => $flexflow || "row"};
    align-items: stretch;
  }
`;

const ImageCol = styled.div`
  flex: 1 1 50%;
  min-width: 0;
  display: flex;
`;

const TextCol = styled.div`
  flex: 1 1 50%;
  min-width: 0;
  display: flex;
  align-items: center;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: ${theme.borderRadius};
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-radius: 0;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
