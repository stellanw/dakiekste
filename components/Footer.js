import Link from "next/link";
import styled from "styled-components";
import { IoLogoInstagram, IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { theme } from "@/styles";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLeftWrapper>
        <div>
          <h4>info@dakiekste.com</h4>
          <StyledLink href="/impressum">
            <StyledImpressum>impressum</StyledImpressum>
          </StyledLink>
        </div>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledLink
          href="https://www.google.com/maps/place/Lienaustra%C3%9Fe+32,+22159+Hamburg/@53.629392,10.1259215,17.04z/data=!4m6!3m5!1s0x47b18a414be2f41d:0x39bdeb585c50610!8m2!3d53.6293927!4d10.1258898!16s%2Fg%2F11c4jnq7nl?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLocationOutline />
        </StyledLink>
        <StyledLink href="mailto:info@dakiekste.com">
          <IoMailOutline />
        </StyledLink>
        {/* <StyledLink href="tel:+49176">
          <IoCallOutline />
        </StyledLink> */}
        <StyledLink
          href="https://www.instagram.com/dakiekste_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram />
        </StyledLink>
      </StyledRightWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 1rem;
  bottom: 0;
  flex-shrink: 0;
  width: 100%;
  font-size: 1.2rem;
  margin: 0;
  height: 18rem;
  background-color: ${theme.color.beige};
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  gap: 1rem;
  margin-top: ${theme.spacing.xxl};
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: ${theme.spacing.xxl};

  h4 {
    font-weight: 400;
    margin: 0 0 10rem 0;
    text-transform: lowercase;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: -0.2rem;
  font-size: ${theme.fontSizes.l};
`;

const StyledImpressum = styled.p`
  font-size: 0.6rem;
  margin: 0;
  padding-top: 1rem;
`;
