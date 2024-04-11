import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Impressum() {
  return (
    <Layout>
      <div>
        <StyledH1>Impressum</StyledH1>
      </div>
    </Layout>
  );
}

const StyledH1 = styled.h1`
  padding-top: 50px;
  padding-left: 20px;
  font-size: 2rem;
  color: black;
`;
