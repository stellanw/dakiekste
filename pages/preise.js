import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Preise() {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Wat du kriegst / Leistung</StyledH1>
        <p>Unser Team besteht aus fünf kreativen Köpfen mit ...</p>
        <h2>Angebot</h2>
        <p>
          Mit 10 Jahren Erfahrung hinter der Kamera ist Maischa besonders in den
          Bereichen Portrait, Stilllife und Dokumentation versiert. Neben der
          Fotografie hat sie eine Leidenschaft für Kommunikationsdesign,
          insbesondere Corporate und Editorial Design, sowie für Upcycling und
          Nachhaltigkeit. Maischa ist motiviert, offen für Zusammenarbeit und
          stets auf der Suche nach neuen kreativen Projekten.
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
  margin-right: 2rem;
  margin-top: 0;
`;
