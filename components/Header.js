import styled from "styled-components";
import { theme } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import DakieksteLogo from "@/Icons/DakieksteLogo";
import Menu from "./Menu";
import { FixedContainer } from "./FixedContainer";
import defaultHeaderImage from "/public/images/01_Header/branding-fotografie-erneuerbare-energie-dakiekste-01.jpg";

export default function Header({
  /**
   * Background switch:
   * "video" | "image" | "color"
   */
  backgroundType = "video",

  // headline content
  topline = "WER GESEHEN WIRD – GESTALTET MIT",
  desktopH1 = "Branding, Fotografie und Website\nFür Gründer*innen & Unternehmen",
  mobileH1 = "Branding, Fotografie und Website Für Gründer*innen & Unternehmen",

  // background (image)
  backgroundImageSrc = defaultHeaderImage,
  backgroundImageAlt = "Branding Fotografie by dakiekste",

  // background (video)
  backgroundVideoPoster = "/videos/video-poster.png",
  backgroundVideoSrcMp4 = "/videos/Selections_Imagefilm.mp4",
  backgroundVideoSrcWebm = "/videos/Selections_Imagefilm.webm",

  // background (color)
  backgroundColor = theme.color.dark,

  // overlay
  overlayColor = "",

  // colors / UI
  logoColor = theme.color.beige,

  // headline color
  headlineColor = theme.color.beige,

  // sizing
  logoWidth, // number override
}) {
  const renderBackground = () => {
    if (backgroundType === "image") {
      return <ImageBackground src={backgroundImageSrc} alt={backgroundImageAlt} fill quality={100} sizes="(max-width: 1900px) 100vw, 80vw" priority />;
    }

    if (backgroundType === "color") {
      return <ColorBackground $bg={backgroundColor} />;
    }

    return (
      <VideoBackground autoPlay loop muted playsInline preload="auto" controls={false} disablePictureInPicture poster={backgroundVideoPoster}>
        <source src={backgroundVideoSrcMp4} type="video/mp4" />
        <source src={backgroundVideoSrcWebm} type="video/webm" />
        Dein Browser unterstützt das Video-Tag nicht.
      </VideoBackground>
    );
  };

  return (
    <StyledHeadContainer>
      {/* Logo */}
      <StyledLink href="/">
        <DakieksteLogo color={logoColor} width={logoWidth ?? 140} />
      </StyledLink>

      {/* Menu */}
      <FixedContainer>
        <Menu />
      </FixedContainer>

      {/* Background */}
      {renderBackground()}

      {/* Overlay */}
      {overlayColor && <Overlay $overlay={overlayColor} />}

      {/* Headline */}
      <StyledHeadlineContainer $headlineColor={headlineColor}>
        <h2>{topline}</h2>

        <DesktopH1>{desktopH1}</DesktopH1>
        <MobileH1>{mobileH1}</MobileH1>
      </StyledHeadlineContainer>
    </StyledHeadContainer>
  );
}

/* ================== Styles ================== */

const StyledHeadContainer = styled.header`
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
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const ImageBackground = styled(Image)`
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

const ColorBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${({ $bg }) => $bg};
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0;
  background: ${({ $overlay }) => $overlay};
  /* opacity: 0.05;
  background-color: ${({ $overlay }) => $overlay || theme.color.beige};
  mask-image: url("/DAKIEKSTE_Web_Menu_Augen.svg");
  mask-size: 20px 20px;
  mask-repeat: repeat;
  background-size: 10px 10px; */
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: calc(0.75 * var(--side-padding));
  left: var(--side-padding);
  z-index: 5;

  @media (max-width: ${theme.breakpoints.tablet}) {
    top: calc(1.1 * var(--side-padding));
  }
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

  h2,
  h1 {
    margin: 0;
    color: ${({ $headlineColor }) => $headlineColor || theme.color.beige};
    text-transform: uppercase;
  }
`;

const DesktopH1 = styled.h1`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileH1 = styled.h1`
  display: block;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
