import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Klubstudio() {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>KLUBSTUDIO</StyledH1>
        <p>Unser Fotostudio...</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
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
