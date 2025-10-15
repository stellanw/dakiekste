import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { theme } from "@/styles";
import { PiArrowDownLight } from "react-icons/pi";
import Image from "next/image";
import section01_header_01 from "/public/images/01_Header/branding-fotografie-erneuerbare-energie-dakiekste-01.jpg";
import Link from "next/link";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import Menu from "./Menu";
import { FixedContainer } from "./FixedContainer";

const bounce = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export default function Header({ useImageBackground = false }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoWidth = windowWidth > parseInt(theme.breakpoints.desktop) ? 200 : 120;
  const iconWidth = 45;

  const tabletBp = parseInt(theme.breakpoints.tablet, 10); // z.B. "768px" -> 768
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = mounted && windowWidth <= tabletBp;

  return (
    <StyledHeadContainer>
      <StyledLink href="/">
        <DakieksteLogo color={theme.color.beige} transition="color 0.5s ease" width={logoWidth} />
      </StyledLink>
      <FixedContainer>
        <StyledMenu color={theme.color.dark} transition="background-color 0.5s ease" iconWidth={iconWidth} />
      </FixedContainer>
      {useImageBackground ? (
        <ImageBackground src={section01_header_01} alt="Branding Fotografie by dakiekste" fill quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1900px) 100vw, 80vw" priority />
      ) : (
        <VideoBackground autoPlay loop muted playsInline preload="auto" controls={false} disablePictureInPicture poster="/videos/video-poster.png">
          <source src="/videos/Selections_Imagefilm.mp4" type="video/mp4" />
          Dein Browser unterstützt das Video-Tag nicht.
        </VideoBackground>
      )}

      <StyledHeadlineContainer>
        <h2>WER GESEHEN WIRD – GESTALTET MIT</h2>
        <h1>
          {isMobile ? (
            "Branding, Fotografie und Website Für Gründer*innen & Unternehmen"
          ) : (
            <>
              Branding, Fotografie und Website&nbsp;
              <br />
              Für Gründer*innen & Unternehmen
            </>
          )}
        </h1>
      </StyledHeadlineContainer>
      {/* <StyledPiArrowDownLight /> */}
    </StyledHeadContainer>
  );
}

const StyledHeadContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: start;
  align-items: end;
  width: 100%;
  overflow: hidden;
  height: var(--height-header);

  @media (min-width: ${theme.breakpoints.wide}) {
    height: calc(1.5 * var(--height-hero));
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const ImageBackground = styled(Image)`
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: start;
  z-index: 2;
  bottom: var(--side-padding);
  left: var(--side-padding);
  padding-right: var(--side-padding);
  h1,
  h2 {
    br {
      display: none;
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      br {
        display: block;
      }
    }
    margin: 0;
    color: ${theme.color.beige};
    text-transform: uppercase;
  }
`;

const StyledPiArrowDownLight = styled(PiArrowDownLight)`
  position: absolute;
  left: 50%;
  bottom: var(--spacing-xl);
  font-size: var(--font-xl);
  color: ${theme.color.beige};
  animation: ${bounce} 3s ease infinite;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: calc(0.75 * var(--side-padding));
  left: var(--side-padding);
  z-index: 5;
`;

const StyledMenu = styled(Menu)`
  position: fixed;
  top: var(--side-padding);
  right: var(--side-padding);
  z-index: 5000;
`;
