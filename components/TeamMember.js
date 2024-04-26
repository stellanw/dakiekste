import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";

export default function TeamMember() {
  return (
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
          Hallo ich bin <StyledSpanBold>Clara</StyledSpanBold> und ich kann dir{" "}
          <StyledSpanBorder>Fotografie</StyledSpanBorder> anbieten{" "}
        </StyledParagraph>
      </StyledTeamMemberContainerLeft>
    </StyledTeamMembersContainer>
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
