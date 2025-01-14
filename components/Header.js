import styled from "styled-components";
import { theme } from "@/styles";

export default function Header({ src, headlineThin, headlineBold1, headlineBold2 }) {
  return (
    <>
      <StyledHeadContainer src={src}>
        <StyledHeadlineContainer>
          <h1>
            {headlineBold1} <br /> <span>{headlineThin}</span>
            {headlineBold2}
          </h1>
        </StyledHeadlineContainer>
      </StyledHeadContainer>
    </>
  );
}

const StyledHeadContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  z-index: -5;
  width: 100%;
  height: 400px;
  /* overflow: hidden; */
  margin: 0;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 750px) {
    height: 600px;
  }
  @media (min-width: 1100px) {
    height: 800px;
  }
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  position: relative;
  left: ${theme.spacing.xxl};
  bottom: ${theme.spacing.xxl};

  @media (min-width: 750px) {
    margin: 0;
  }
  @media (min-width: 1100px) {
    margin: 0;
  }

  h1 {
    margin: 0;
    color: ${theme.color.beige};
    padding: 0;
  }
  span {
    font-weight: 200;
    padding-right: 0.3rem;
  }
`;
