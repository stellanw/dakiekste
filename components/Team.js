import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoMailOutline,
  IoEarthOutline,
} from "react-icons/io5";

export default function Team() {
  return (
    <>
      <StyledTextWrapper>
        <h1>Wir sind dakiekste </h1>

        {/* <p>
          Mit unserer langjährigen Expertise helfen wir dir, deiner Marke ein
          Gesicht zu geben.
        </p> */}
        <p>Wir verhelfen dir zu mehr Sichtbarkeit.</p>
      </StyledTextWrapper>

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
            Moin ich bin <StyledSpanBold>Stellan</StyledSpanBold>!
          </StyledParagraph>
          <TagWrapper>
            <StyledSpanBorder>Fotografie</StyledSpanBorder>{" "}
            <StyledSpanBorder>Videografie</StyledSpanBorder>
            <StyledSpanBorder>Portraitfotografie</StyledSpanBorder>
            <StyledSpanBorder>Eventfotografie</StyledSpanBorder>
            <StyledSpanBorder>Web-Development</StyledSpanBorder>{" "}
          </TagWrapper>
          <StyledLinkWrapper>
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

            <StyledLink
              href="https://www.instagram.com/stellanwetzig.photography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </StyledLink>
          </StyledLinkWrapper>
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
            Moin ich bin <StyledSpanBold>Clara</StyledSpanBold>!
          </StyledParagraph>
          <TagWrapper>
            <StyledSpanBorder>Fotografie</StyledSpanBorder>

            <StyledSpanBorder>Portraitfotografie</StyledSpanBorder>

            <StyledSpanBorder>Konzeption</StyledSpanBorder>
            <StyledSpanBorder>Content Creation</StyledSpanBorder>
          </TagWrapper>
          <StyledLinkWrapper>
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
          </StyledLinkWrapper>
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
            Moin ich bin <StyledSpanBold>Maischa</StyledSpanBold>!<br />
          </StyledParagraph>
          <TagWrapper>
            <StyledSpanBorder>Fotografie</StyledSpanBorder>
            <StyledSpanBorder>Kommunikationsdesign</StyledSpanBorder>
            <StyledSpanBorder>Branding</StyledSpanBorder>
            <StyledSpanBorder>Corporate Design</StyledSpanBorder>
            <StyledSpanBorder>Webdesign</StyledSpanBorder>
          </TagWrapper>

          <StyledLinkWrapper>
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

            <StyledLink
              href="https://www.instagram.com/maischa_s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </StyledLink>
          </StyledLinkWrapper>
        </StyledTeamMemberContainer>
      </StyledTeamMembersContainer>
    </>
  );
}

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -0.5rem;
`;

const StyledTextWrapper = styled.div`
  padding: 4rem 4rem 2rem 4rem;
  margin: auto;
  text-align: center;
  background-color: ${theme.secondaryColorBeige};

  h1 {
    font-size: ${theme.fontSizes.small};
    text-transform: uppercase;
    padding-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: ${theme.fontSizes.large};
    font-weight: 300;
    max-width: 500px;
    margin: auto;
  }
`;

const StyledTeamMembersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0rem 4rem 4rem 4rem;
  background-color: ${theme.secondaryColorBeige};
  width: 100%;
  gap: 2rem;

  @media (max-width: 1060px) {
    justify-content: center;
  }
`;

const StyledTeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 250px;
`;

const StyledMemberImageContainer = styled.div`
  width: 250px;
  height: 300px;
  padding: 0;
  padding-bottom: 1.5rem;
  overflow: hidden;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 50% 50%;
`;

const StyledParagraph = styled.p`
  line-height: 1.5;
`;

const StyledSpanBold = styled.span`
  font-weight: 800;
`;

const StyledSpanBorder = styled.span`
  font-weight: 800;
  font-size: ${theme.fontSizes.xs};

  text-transform: lowercase;
  display: inline-block;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  margin-top: 0.3rem;
  border-radius: 15px;
  border: solid 1px ${theme.primaryColor};
  line-height: 1.5;
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 1rem;
  height: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${theme.textColor};
  margin-bottom: -0.2rem;
`;
