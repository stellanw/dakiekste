import styled from "styled-components";
import { theme } from "@/styles";

export default function Header({ src, headlineThin, headlineBold1, headlineBold2 }) {
  return (
    <>
      <StyledHeadContainer src={src}>
        <StyledHeadlineContainer>
          <h1>
            {headlineBold1} <br /> <span>{headlineThin}&nbsp;</span>
            {headlineBold2}
          </h1>
        </StyledHeadlineContainer>
      </StyledHeadContainer>
    </>
  );
}

const StyledHeadContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: end;
  z-index: 0;
  width: 100%;
  height: 400px;
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
  left: ${theme.spacing.xl};
  bottom: ${theme.spacing.xl};

  @media (min-width: 750px) {
    margin: 0;
    left: ${theme.spacing.xxl};
    bottom: ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    margin: 0;
    left: ${theme.spacing.xxl};
    bottom: ${theme.spacing.xxl};
  }

  h1 {
    margin: 0 0 -10px -6px;
    color: ${theme.color.beige};
  }
  span {
    font-weight: 200;
    margin: 0 -4px 0 0;
  }
`;
