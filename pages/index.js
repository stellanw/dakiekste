import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/styles";
import SliderComplete from "@/components/SlideComplete";
import SplitTextBox from "@/components/SplitTextBox";
import HeadTextBox from "@/components/HeadTextBox";

export default function HomePage() {
  return (
    <Layout>
      <StyledImageHeadContainer>
        <StyledImage
          src="/images/Dakiekste_header_image_.jpg"
          alt="dakiekste header image"
          priority
          width={1400}
          height={500}
        />
      </StyledImageHeadContainer>
      <StyledHeadlineContainer>
        <StyledH1Thin>HEADLINE&nbsp;&nbsp;</StyledH1Thin>
        <StyledH1>ZUR STRATEGIE</StyledH1>
      </StyledHeadlineContainer>
      <HeadTextBox />
      <StyledImageContainer>
        <StyledImage
          src="/images/Platzhalter.jpg"
          alt="Klubstudio"
          width={1200}
          height={500}
        />
      </StyledImageContainer>

      <StyledImageContainer>
        <StyledImage
          src="/images/Platzhalter.jpg"
          alt="Klubstudio"
          width={1200}
          height={500}
        />
      </StyledImageContainer>
      <StyledTeamMembersContainer>
        <StyledTeamMemberContainerLeft>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Platzhalter.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hallo ich bin <StyledSpanBold>Maischa</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
        </StyledTeamMemberContainerLeft>
        <StyledTeamMemberContainerRight>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Platzhalter.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hallo ich bin <StyledSpanBold>Stellan</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
        </StyledTeamMemberContainerRight>
        <StyledTeamMemberContainerLeft>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src="/images/Platzhalter.jpg"
              alt="Klubstudio"
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <StyledParagraph>
            Hallo ich bin <StyledSpanBold>Clara</StyledSpanBold> und ich kann
            dir <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
          </StyledParagraph>
        </StyledTeamMemberContainerLeft>
      </StyledTeamMembersContainer>
    </Layout>
  );
}

const StyledTeamMembersContainer = styled.div`
  padding: 1rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const StyledMemberImageContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 1rem;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
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

const StyledSpanThin = styled.span`
  font-weight: 200;
`;

const StyledTeamMemberContainerLeft = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: fit-content;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledTeamMemberContainerRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  width: 100%;
  height: fit-content;
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* text-align: right; */
`;

const StyledImageHeadContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 400px;
  overflow: hidden;
  top: -0.1rem;
`;

const StyledHeadlineContainer = styled.div`
  margin-left: 2rem;
`;

const StyledH1Thin = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: 10rem;
  /* margin-bottom: 3rem; */
  color: white;
`;

const StyledH1 = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  /* margin-top: 10rem; */
  margin-bottom: 3rem;
  color: white;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-top: -0.2rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
