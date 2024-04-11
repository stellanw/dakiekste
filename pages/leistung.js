import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Leistung() {
  return (
    <Layout>
      <div>
        <StyledH1>Wat du kriegst / Leistung</StyledH1>
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
