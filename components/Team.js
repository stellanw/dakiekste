import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoEarthOutline,
} from "react-icons/io5";

export default function Team() {
  return (
    <>
      <StyledHeadline>Gemeinsam realisieren </StyledHeadline>
      <StyledHeadline2>wir eure Vision.</StyledHeadline2>
      {/* <StyledTopParagraph>
        Wir sind ein kreatives Trio, das seit über zehn Jahren als Team
        zusammenarbeitet. Respekt und Empathie sind die Basis unserer Arbeit.
      </StyledTopParagraph>
      <StyledTopParagraph>
        Im engen Austausch mit unseren Kund*innen schaffen wir Bildwelten, die
        Menschen und ihre Geschichten in den Mittelpunkt stellen. Mit unserer
        Expertise in Fotografie, Videografie, Kommunikationsdesign und
        Webentwicklung bieten wir euch alles aus einer Hand.
      </StyledTopParagraph>
      <StyledTopParagraph>
        Wir lieben interdisziplinäre Zusammenarbeit und nutzen unser Netzwerk an
        3D-Artists, Produktdesigner*innen, Visagist*innen, Stylist*innen und
        mehr.
      </StyledTopParagraph> */}
      <StyledTeamMembersContainer>
        <StyledTeamMemberContainer>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/stellan.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            <StyledSpanBold>Stellan</StyledSpanBold> ist ein vielseitiger
            <StyledSpanBorder>Fotograf</StyledSpanBorder>, der auch in der
            <StyledSpanBorder>Videografie</StyledSpanBorder> und im{" "}
            <StyledSpanBorder>Web-Development</StyledSpanBorder> zu Hause ist.
            Besonders liebt er die Eventfotografie, weil sie lebendige und
            authentische Momente einfängt.
          </StyledParagraph>
          <StyledQuote>
            »<StyledSpanBold>Vielfalt</StyledSpanBold> sehe ich als Bereicherung
            und bringe diese Überzeugung durch eine offene Atmosphäre in meine
            Arbeit ein.«
          </StyledQuote>
          <StyledRightWrapper>
            <StyledLink
              href="https://stellanwetzig.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoEarthOutline />
            </StyledLink>
            <StyledLink href="mailto:stellan@dakiekste.com">
              <IoMailOutline />
            </StyledLink>
            {/* <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink> */}
            <StyledLink
              href="https://www.instagram.com/stellanwetzig.photography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </StyledLink>
          </StyledRightWrapper>
        </StyledTeamMemberContainer>
        <StyledTeamMemberContainer>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Clara.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            <StyledSpanBold>Clara</StyledSpanBold> ist
            <StyledSpanBorder>Werbe-Fotografin</StyledSpanBorder> und{" "}
            <nobr>
              hat sich auf{" "}
              <StyledSpanBorder>Portraitfotografie</StyledSpanBorder>
            </nobr>
            <br></br>
            spezialisiert. Sie hat das Talent, einen Raum zu schaffen, in dem
            sich alle wohlfühlen. Mit ihrem konzeptionellen Denken und
            Ideenreichtum erzeugt sie fotografisch neue Welten.
          </StyledParagraph>
          <StyledQuote>
            »Ich liebe ausdrucksstarte Portraits, weil für mich{" "}
            <StyledSpanBold>jeder Mensch</StyledSpanBold> ein Meisterwerk ist!«
          </StyledQuote>
          <StyledRightWrapper>
            <StyledLink
              href="https://www.claraide.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoEarthOutline />
            </StyledLink>
            <StyledLink href="mailto:clara@dakiekste.com">
              <IoMailOutline />
            </StyledLink>
            {/* <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink> */}
            <StyledLink
              href="https://www.instagram.com/claraidephoto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </StyledLink>
          </StyledRightWrapper>
        </StyledTeamMemberContainer>
        <StyledTeamMemberContainer>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Foto_MaischaSouaga.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            <StyledSpanBold>Maischa</StyledSpanBold> bringt zusätzlich zur{" "}
            <StyledSpanBorder>Fotografie</StyledSpanBorder> Erfahrungen im
            Bereich <StyledSpanBorder>Kommunikationsdesign</StyledSpanBorder>{" "}
            mit den Schwerpunkten Branding, Corporate Design und{" "}
            <StyledSpanBorder>Webdesign</StyledSpanBorder> mit. Sie kann euch
            von der Vision bis zur Umsetzung auf vielen Ebenen begleiten.
          </StyledParagraph>
          <StyledQuote>
            »Visuelle Geschichten zu erzählen und dabei einen{" "}
            <StyledSpanBold>Vertrauensraum </StyledSpanBold>
            zu schaffen, motiviert mich.«
          </StyledQuote>
          <StyledRightWrapper>
            <StyledLink
              href="https://www.maischasouaga.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoEarthOutline />
            </StyledLink>
            <StyledLink href="mailto:maischa@dakiekste.com">
              <IoMailOutline />
            </StyledLink>
            {/* <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink> */}
            <StyledLink
              href="https://www.instagram.com/maischa_s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </StyledLink>
          </StyledRightWrapper>
        </StyledTeamMemberContainer>
      </StyledTeamMembersContainer>
    </>
  );
}

const StyledTeamMembersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4rem;

  width: 100%;
  gap: 4rem;

  @media (max-width: 1060px) {
    justify-content: center;
  }
`;

const StyledSpanThin = styled.span`
  font-weight: 400;
`;

const StyledHeadline = styled.h1`
  padding-top: 6rem;
  padding-left: 4rem;
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.primaryColor};
`;

const StyledHeadline2 = styled.h1`
  padding-top: 0rem;
  padding-left: 4rem;
  font-size: ${theme.fontSizes.xxxl};
  color: ${theme.primaryColor};
`;

const StyledTopParagraph = styled.p`
  margin: 1rem 4rem 0rem 4rem;
  color: ${theme.primaryColor};
  min-width: 300px;
  max-width: 1000px;
`;

const StyledMemberImageContainer = styled.div`
  width: 300px;
  height: 400px;
  padding: 0;
  padding-bottom: 1.5rem;
  overflow: hidden;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 20px;
`;

const StyledParagraph = styled.p`
  line-height: 1.5;
  color: ${theme.primaryColor};
  height: 12rem;
`;

const StyledQuote = styled.p`
  margin-top: 1.5rem;
  color: ${theme.primaryColor};
  font-style: italic;
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledSpanBorder = styled.span`
  font-weight: 800;
  padding: 0.15rem;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  border-radius: 15px;
  border: solid 1px ${theme.primaryColor};
  line-height: 1.8;
`;

const StyledTeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 300px;
  /* height: fit-content; */
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1.5rem;
  height: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${theme.primaryColor};
  margin-bottom: -0.2rem;
`;
