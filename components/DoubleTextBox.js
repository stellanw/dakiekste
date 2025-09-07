import { theme } from "@/styles";
import styled from "styled-components";

export default function DoubleTextBox({ topline1, headline1, text1, topline2, headline2, text2 }) {
  return (
    <Section>
      <Inner>
        <Col>
          <TextWrap>
            <h2>{topline1}</h2>
            <h3>{headline1}</h3>
            <p>{text1}</p>
          </TextWrap>
        </Col>

        <Col>
          <TextWrap>
            <h2>{topline2}</h2>
            <h3>{headline2}</h3>
            <p>{text2}</p>
          </TextWrap>
        </Col>
      </Inner>
    </Section>
  );
}

/* Außen: full-bleed Hintergrund */
const Section = styled.section`
  background-color: ${theme.color.beige};
  width: 100%;
`;

/* Innen: zentriert + begrenzt */
const Inner = styled.div`
  --content-max: 1500px;

  display: flex;
  flex-direction: column;
  gap: var(--side-padding);
  width: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--spacing-xxxl) var(--side-padding);

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row; /* ab Tablet zwei Spalten */
    align-items: stretch;
  }
`;

/* Spalte: 50% auf Tablet+, 100% mobil */
const Col = styled.div`
  flex: 1 1 50%;
  min-width: 0;
  display: flex; /* damit TextWrap vertikal ausgerichtet werden kann */
  align-items: flex-start; /* wenn mittig gewünscht: center */
`;

const TextWrap = styled.div`
  width: 100%;
  max-width: 680px; /* angenehme Zeilenlänge */
  margin: 0 auto; /* zentriert die Textsäule in ihrer Hälfte */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// import { theme } from "@/styles";
// import styled from "styled-components";

// export default function DoubleTextBox({ topline1, headline1, text1, topline2, headline2, text2 }) {
//   return (
//     <StyledDoubleTextBox>
//       <StyledTextWrapper>
//         <h2>{topline1}</h2>
//         <h3>{headline1}</h3>
//         <p>{text1}</p>
//       </StyledTextWrapper>
//       <StyledTextWrapper>
//         <h2>{topline2}</h2>
//         <h3>{headline2}</h3>
//         <p>{text2}</p>
//       </StyledTextWrapper>
//     </StyledDoubleTextBox>
//   );
// }

// const StyledDoubleTextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   width: 100%;
//   max-width: 100%;
//   background-color: ${theme.color.beige};
//   overflow-x: hidden;
//   gap: var(--spacing-xxxl);
//   padding: var(--spacing-xxxl) 0;

//   @media (min-width: ${theme.breakpoints.tablet}) {
//     flex-direction: row;
//     gap: 0;
//   }
// `;

// const StyledTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   width: 100%;
//   padding: 0 var(--side-padding);

//   @media (min-width: ${theme.breakpoints.tablet}) {
//     width: 50%;
//   }

//   @media (min-width: ${theme.breakpoints.desktop}) {
//     width: 50%;
//   }
// `;
