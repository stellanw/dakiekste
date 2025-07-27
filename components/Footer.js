import Link from "next/link";
import styled from "styled-components";
import { PiArrowRightLight } from "react-icons/pi";
import { theme, spacingValue } from "@/styles";

export default function Footer() {
  const email = "info" + "@" + "dakiekste" + ".com";
  const subject = "Anfrage";

  const createMailToLink = () => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <StyledFooter>
      <StyledLeftWrapper>
        <div>
          <Link href="/impressum">
            <StyledImpressum>impressum</StyledImpressum>
          </Link>
        </div>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledLink href={createMailToLink()} target="_blank" rel="noopener noreferrer">
          <p>Mail</p>
          <StyledIcon />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/dakiekste_/" target="_blank" rel="noopener noreferrer">
          <p>Instagram</p>
          <StyledIcon />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/dakiekste_/" target="_blank" rel="noopener noreferrer">
          <p>LinkedIn</p>
          <StyledIcon />
        </StyledLink>
        <StyledLink
          href="https://www.google.com/maps/place/KLUB+STUDIO/@53.6293927,10.1252447,19z/data=!3m1!4b1!4m6!3m5!1s0x47b18b1dc2c88901:0x73c4a52033da48af!8m2!3d53.6293927!4d10.1258898!16s%2Fg%2F11vx3b9kkl?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Map</p>
          <StyledIcon />
        </StyledLink>
      </StyledRightWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  bottom: 0;
  width: 100%;
  height: 18rem;
  background-color: ${theme.color.beige};
  padding: 0 var(--side-padding);

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    flex-wrap: wrap-reverse;
  }
`;

const StyledRightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: start;
  gap: var(--spacing-s);
  margin-top: var(--spacing-xl);
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: space-between;
  }
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: var(--spacing-xl);
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-bottom: -0.2rem;

  p {
    font-size: var(--font-l);
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: var(--font-m);
    }
    font-weight: ${theme.fontWeight.light};
    margin-right: calc(0.4 * var(--spacing-xs));
  }
`;

const StyledImpressum = styled.p`
  font-size: var(--font-s);
  margin: 0;
`;

const StyledIcon = styled(PiArrowRightLight)`
  font-size: calc(1.5 * var(--font-m));
  stroke-width: 10;
  transform: rotate(-45deg);

  &:hover {
    color: ${theme.color.green};
  }
`;
