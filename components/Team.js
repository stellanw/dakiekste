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
      <StyledHeadline>
        <StyledSpanThin>DAS DAKIEKSTE</StyledSpanThin> TEAM
      </StyledHeadline>
      <StyledTopParagraph>
        Wir sind ein Trio aus kreativen Köpfen mit den Schwerpunkten Fotografie,
        Videografie, Kommunikationsdesign und Webentwicklung. Seit unserer
        gemeinsamen Ausbildung in den OTTO-Fotostudios vor zehn Jahren arbeiten
        wir als eingespieltes Team und legen großen Wert auf ein harmonisches
        und empathisches Miteinander.
      </StyledTopParagraph>
      <StyledTopParagraph>
        Durch interdisziplinäre Zusammenarbeit und den engen Austausch mit
        unseren Kund*innen setzen wir Visionen authentisch um. Mit Herz und
        Engagement schaffen wir kreative Bildwelten, in denen Menschen und ihre
        Geschichten im Mittelpunkt stehen.
      </StyledTopParagraph>
      <StyledTeamMembersContainer>
        <StyledTeamMemberContainer>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Stellan_Portrait.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hey, ich bin <StyledSpanBold>Stellan</StyledSpanBold>. Neben der
            Fotografie gehören die
            <StyledSpanBorder>Videografie</StyledSpanBorder> und das
            <StyledSpanBorder>Web-Developement</StyledSpanBorder> zu meinen
            weiteren Disziplinen. Neben der Portraitfotografie habe ich
            besonderen Spaß an der
            <StyledSpanBorder>Eventfotografie</StyledSpanBorder>, weil sie
            lebendige und authentische Momente festhält. Ich bin ein
            Improvisationstalent und finde immer eine Lösung, wenn mal etwas
            nicht wie geplant läuft. Als Verfechter von Gleichberechtigung und
            LGBTQ*-Rechten sehe ich die Vielfalt unter Menschen als große
            Bereicherung und bringe diese Überzeugung durch eine offene und
            einladende Atmosphäre in meine Arbeit mit ein.
          </StyledParagraph>
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
              src="/images/Clara_Portrait.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hi, ich bin <StyledSpanBold>Clara</StyledSpanBold>. Mir fällt es
            leicht, Menschen vor der Kamera zu animieren, loszulassen und
            einfach Spaß zu haben. In der{" "}
            <StyledSpanBorder>Fotografie</StyledSpanBorder> liebe ich intensive
            und
            <StyledSpanBorder>ausdrucksstarke Portraits.</StyledSpanBorder> Für
            mich sollten Portraits die Essenz der Menschen einfangen. Mit meinem
            konzeptionellen Denken und meinem Ideenreichtum möchte ich für euch
            fotografisch neue Welten schaffen, die genau zu euch passen. Es ist
            mir wichtig, euch in eurer natürlichsten und authentischsten Form zu
            zeigen.
          </StyledParagraph>
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
              src="/images/Maischa_Portrait.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Moin, ich bin <StyledSpanBold>Maischa</StyledSpanBold> und habe
            zusätzlich zur
            <StyledSpanBorder>Fotografie</StyledSpanBorder> noch
            <StyledSpanBorder>Kommunikationsdesign</StyledSpanBorder> studiert
            mit Schwerpunkt auf Konzept, Grafik, Layout und Logo-Gestaltung.
            Auch als <StyledSpanBorder>UIX-Designerin</StyledSpanBorder> kann
            ich euch von der Idee bis zum fertigen Design eurer Webseite
            begleiten. Mit meinem Gespür für Farben, Formen und Layouts
            entwickle ich maßgeschneiderte, kreative und innovative
            <StyledSpanBorder>Konzepte.</StyledSpanBorder> Für mich ist es
            wichtig, Gefühle durch Formen, Linien, Licht und Schatten
            auszudrücken. Meine Leidenschaft ist es, visuelle Geschichten zu
            erzählen, die Emotionen wecken und nachhaltig beeindrucken.
          </StyledParagraph>
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

  padding-bottom: 10rem;
  width: 100%;
  gap: 1rem;

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

const StyledTopParagraph = styled.p`
  margin: 1rem 4rem 0rem 4rem;
  color: ${theme.primaryColor};
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
`;

const StyledParagraph = styled.p`
  line-height: 1.5;
  color: ${theme.primaryColor};
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
  border: solid ${theme.primaryColor};
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
  color: #11a984;
  margin-bottom: -0.2rem;
`;
