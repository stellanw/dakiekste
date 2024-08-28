import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram, IoMailOutline, IoEarthOutline } from "react-icons/io5";

export default function Team() {
  const teamMembers = [
    {
      name: "Stellan",
      image: "Stellan_Portrait.jpg",
      tags: ["Fotografie", "Videografie", "Portrait", "Event", "Web-Development"],
      links: {
        website: "https://stellanwetzig.de/",
        email: "mailto:stellan@dakiekste.com",
        instagram: "https://www.instagram.com/stellanwetzig.photography/",
      },
    },
    {
      name: "Clara",
      image: "Clara_Portrait_2.jpg",
      tags: ["Fotografie", "Portraitfotografie", "Konzeption", "Content Creation"],
      links: {
        website: "https://www.claraide.com/home",
        email: "mailto:clara@dakiekste.com",
        instagram: "https://www.instagram.com/claraidephoto/",
      },
    },
    {
      name: "Maischa",
      image: "Maischa_Portrait.jpg",
      tags: ["Fotografie", "Kommunikationsdesign", "Branding", "Corporate Design", "Webdesign"],
      links: {
        website: "https://www.maischasouaga.com/",
        email: "mailto:maischa@dakiekste.com",
        instagram: "https://www.instagram.com/maischa_s/",
      },
    },
  ];

  const linkItems = [
    {
      href: "website",
      icon: <IoEarthOutline />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "email",
      icon: <IoMailOutline />,
    },
    {
      href: "instagram",
      icon: <IoLogoInstagram />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <>
      <StyledTextWrapper>
        <h1>Wir sind dakiekste</h1>
        <p>Wir verhelfen dir zu mehr Sichtbarkeit.</p>
      </StyledTextWrapper>

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
              Moin ich bin <span>{member.name}</span>!
            </p>
            <TagWrapper>
              {member.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </TagWrapper>
            <StyledLinkWrapper>
              {linkItems.map((linkItem, i) => (
                <StyledLink
                  key={i}
                  href={member.links[linkItem.href]}
                  target={linkItem.target}
                  rel={linkItem.rel}
                >
                  {linkItem.icon}
                </StyledLink>
              ))}
            </StyledLinkWrapper>
          </StyledTeamMemberContainer>
        ))}
      </StyledTeamMembersContainer>
    </>
  );
}

const StyledTextWrapper = styled.div`
  padding: ${theme.spacing.xxxl} ${theme.spacing.l} 0 ${theme.spacing.l};
  margin: auto;
  text-align: center;
  background-color: ${theme.secondaryColorBeige};

  h1 {
    font-size: ${theme.fontSizes.s};
    text-transform: uppercase;
    padding-bottom: ${theme.spacing.s};
    font-weight: 600;
  }

  p {
    font-size: ${theme.fontSizes.xl};
    font-weight: 400;
    max-width: 700px;
    margin: auto;
  }
`;

const StyledTeamMembersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: ${theme.spacing.xl} ${theme.spacing.l} ${theme.spacing.xl} ${theme.spacing.l};
  background-color: ${theme.secondaryColorBeige};
  width: 100%;
  gap: ${theme.spacing.l};

  @media (max-width: ${theme.breakpoints.l}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.m}) {
    padding: ${theme.spacing.xl} ${theme.spacing.m} ${theme.spacing.xl} ${theme.spacing.m};
    gap: ${theme.spacing.m};
  }

  p {
    line-height: 1.5;
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

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -${theme.spacing.s};

  span {
    font-weight: 800;
    font-size: ${theme.fontSizes.xs};
    text-transform: lowercase;
    display: inline-block;
    padding: 0 ${theme.spacing.s} 0 ${theme.spacing.s};
    margin: ${theme.spacing.s} ${theme.spacing.xs} 0 ${theme.spacing.xs};
    border-radius: 15px;
    border: solid 1px ${theme.primaryColor};
    line-height: 1.5;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: ${theme.spacing.s};
  height: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${theme.textColor};
  margin-bottom: -${theme.spacing.xs};
`;
