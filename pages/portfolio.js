import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Portfolio</StyledH1>
        <p>Hier kommt unser Portfolio ...</p>
      </StyledDiv>
    </Layout>
  );
}

const StyledH1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding-bottom: 0.5rem;
  color: black;
`;

const StyledDiv = styled.div`
  margin-left: 2rem;
  margin-top: 4rem;
`;
