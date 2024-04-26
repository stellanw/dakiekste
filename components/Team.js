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
      <StyledTeamMembersContainer>
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
            Hallo ich bin <StyledSpanBold>Maischa</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
          <StyledRightWrapper>
            <StyledLink href="https://www.maischasouaga.com/">
              <IoEarthOutline />
            </StyledLink>
            <StyledLink href="mailto:maischa@dakiekste.com">
              <IoMailOutline />
            </StyledLink>
            {/* <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink> */}
            <StyledLink href="https://www.instagram.com/maischa_s/">
              <IoLogoInstagram />
            </StyledLink>
          </StyledRightWrapper>
        </StyledTeamMemberContainer>
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
            Hallo ich bin <StyledSpanBold>Stellan</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
          <StyledRightWrapper>
            <StyledLink href="https://stellanwetzig.de/">
              <IoEarthOutline />
            </StyledLink>
            <StyledLink href="mailto:stellan@dakiekste.com">
              <IoMailOutline />
            </StyledLink>
            {/* <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink> */}
            <StyledLink href="https://www.instagram.com/stellanwetzig.photography/">
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
            Hallo ich bin <StyledSpanBold>Clara</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
          <StyledRightWrapper>
            <StyledLink href="https://www.claraide.com/home">
              <IoEarthOutline />
            </StyledLink>
            <StyledLink href="mailto:clara@dakiekste.com">
              <IoMailOutline />
            </StyledLink>
            {/* <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink> */}
            <StyledLink href="https://www.instagram.com/claraidephoto/">
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
