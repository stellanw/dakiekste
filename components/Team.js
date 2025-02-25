import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

export default function Team({ className, teamMembers = [], justify }) {
  const linkItems = [
    {
      href: "email",
      icon: <PiEnvelopeSimpleLight />,
    },
  ];
  return (
    <StyledTeamMembersContainer justify={justify} className={className}>
      {teamMembers.map((member, index) => (
        <StyledTeamMemberContainer key={index}>
          <StyledMemberImageContainer>
            <StyledMemberImage src={`/images/${member.image}?v=${Date.now()}`} alt={`Portrait of ${member.name}`} width={1200} height={500} />
          </StyledMemberImageContainer>
          <p>
            <span>{member.name}</span>
            <br />
            {member.text}
          </p>
          {/* <StyledLinkWrapper>
            {linkItems.map((linkItem, i) => (
              <Link key={i} href={member.email} target="_blank" rel="noopener noreferrer">
                {linkItem.icon}
              </Link>
            ))}
          </StyledLinkWrapper> */}
        </StyledTeamMemberContainer>
      ))}
    </StyledTeamMembersContainer>
  );
}

const StyledTeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme.color.beige};
  width: 100%;
  gap: ${theme.spacing.l};
  justify-content: ${({ justify }) => justify};
  padding: 0 ${theme.spacing.mobile.side} ${theme.spacing.mobile.height.l} ${theme.spacing.mobile.side};

  @media (min-width: 750px) {
    padding: 0 ${theme.spacing.tablet.side} ${theme.spacing.tablet.height.l} ${theme.spacing.tablet.side};
    gap: ${theme.spacing.m};
    flex-wrap: nowrap;
  }

  @media (min-width: 1100px) {
    padding: 0 ${theme.spacing.desktop.side} ${theme.spacing.desktop.height.l} ${theme.spacing.desktop.side};
    gap: ${theme.spacing.xxl};
  }

  &.extra-padding {
    padding-bottom: ${theme.spacing.mobile.height.l};

    @media (min-width: 750px) {
      padding-bottom: ${theme.spacing.tablet.height.l};
    }

    @media (min-width: 1100px) {
      padding-bottom: ${theme.spacing.desktop.height.l};
    }
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
  border-radius: ${theme.borderRadius};
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: ${theme.spacing.s};
  height: 2rem;
  font-size: ${theme.fontSizes.m};
`;
