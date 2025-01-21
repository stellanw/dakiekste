import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

export default function Team({ teamMembers = [] }) {
  const linkItems = [
    {
      href: "email",
      icon: <PiEnvelopeSimpleLight />,
    },
  ];
  return (
    <StyledTeamMembersContainer>
      {teamMembers.map((member, index) => (
        <StyledTeamMemberContainer key={index}>
          <StyledMemberImageContainer>
            <StyledMemberImage
              src={`/images/${member.image}?v=${Date.now()}`}
              alt={`Portrait of ${member.name}`}
              width={1200}
              height={500}
            />
          </StyledMemberImageContainer>
          <p>
            <span>{member.name}</span>
            <br />
            {member.text}
          </p>
          {/* <TagWrapper>
            {member.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagWrapper> */}
          <StyledLinkWrapper>
            {linkItems.map((linkItem, i) => (
              <Link key={i} href={member.email} target="_blank" rel="noopener noreferrer">
                {linkItem.icon}
              </Link>
            ))}
          </StyledLinkWrapper>
        </StyledTeamMemberContainer>
      ))}
    </StyledTeamMembersContainer>
  );
}

const StyledTeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${theme.spacing.xl} ${theme.spacing.xxxl} ${theme.spacing.xl};
  background-color: ${theme.color.beige};
  width: 100%;
  gap: ${theme.spacing.m};

  @media (min-width: 750px) {
    justify-content: center;
    padding: 0 ${theme.spacing.xxl} ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.xxl} ${theme.spacing.xxxxl} ${theme.spacing.xxl};
    justify-content: space-between;
  }

  p {
    line-height: 1.3;
  }

  span {
    font-weight: 800;
  }
`;

const StyledTeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 300px;
  padding: 0 0 ${theme.spacing.m} 0;
`;

const StyledMemberImageContainer = styled.div`
  height: 450px;
  padding: 0;
  padding-bottom: ${theme.spacing.m};
  overflow: hidden;
`;

const StyledMemberImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

// const TagWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin-left: -${theme.spacing.s};

//   span {
//     font-weight: 800;
//     font-size: ${theme.fontSizes.xs};
//     text-transform: lowercase;
//     display: inline-block;
//     padding: 0 ${theme.spacing.s} 0 ${theme.spacing.s};
//     margin: ${theme.spacing.s} ${theme.spacing.xs} 0 ${theme.spacing.xs};
//     border-radius: 5px;
//     border: solid 1px ${theme.color.dark};
//     line-height: 1.5;
//   }
// `;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: ${theme.spacing.s};
  height: 2rem;
  font-size: ${theme.fontSizes.m};
`;

const StyledLink = styled(Link)`
  color: ${theme.color.dark};
  margin-bottom: -${theme.spacing.xs};
`;
