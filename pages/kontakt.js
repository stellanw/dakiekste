import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Kontakt() {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Kontakt zu uns</StyledH1>
        <p>Für anfragen schreibe uns...</p>

        <p>Email: info@dakiekste.com</p>
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
  margin-right: 2rem;
  margin-top: 0;
`;
