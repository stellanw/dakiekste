import Layout from "@/components/Layout";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <Layout>
      <StyledDiv>
        <StyledH1>Portfolio</StyledH1>
        <p>Hier kommt unser Portfolio ...</p>
        <h2>Maischa</h2>
        <p>
          Mit 10 Jahren Erfahrung hinter der Kamera ist Maischa besonders in den
          Bereichen Portrait, Stilllife und Dokumentation versiert. Neben der
          Fotografie hat sie eine Leidenschaft für Kommunikationsdesign,
          insbesondere Corporate und Editorial Design, sowie für Upcycling und
          Nachhaltigkeit. Maischa ist motiviert, offen für Zusammenarbeit und
          stets auf der Suche nach neuen kreativen Projekten.
        </p>
        <h2>Clara</h2>
        <p>
          Mit 11 Jahren Erfahrung als professionelle Fotografin ist Clara
          Expertin in Mode-, Still-, Portrait- und Interieurfotografie. Sie
          bringt nicht nur umfangreiches Foto- und Digitalequipment mit, sondern
          auch ein großes Netzwerk aus der Fotografiebranche und dem
          Veranstaltungssektor. Clara ist eine selbständig agierende
          Teamplayerin, die großen Wert auf Freiheit, Gleichwertigkeit und
          Zusammenarbeit legt.
        </p>
        <h2>Stellan</h2>
        <p>
          Mit 10 Jahren Erfahrung in Produkt-, Portrait- und Eventfotografie
          sowie einem Hintergrund als Redakteur ist Stellan ein vielseitiger
          Fotograf. Er ist technikaffin und hat eine breite Palette von
          Interessen und Fähigkeiten, darunter Schreiben, Musik, Handwerk und
          Coden. Stellan ist ein echtes Improvisationstalent und
          Lösungsorientiert.
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
