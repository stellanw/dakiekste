import Slider from "react-slick";
import Image from "next/legacy/image";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "@/styles";

export default function LogoCarousel() {
  const logos = [
    { src: "/images/Logos/Ossara-Logo.png", alt: "Logo 5", width: 100, height: 75 },
    { src: "/images/Logos/otto-logo.png", alt: "Logo 1", width: 80, height: 75 },
    { src: "/images/Logos/averdung-logo.png", alt: "Logo 2", width: 100, height: 75 },
    { src: "/images/Logos/neuland_logo.png", alt: "Logo 3", width: 100, height: 75 },
    { src: "/images/Logos/Logo_Elbesolar_CMYK-1.png", alt: "Logo 5", width: 60, height: 75 },
    { src: "/images/Logos/Improova_Logo_small_black.png", alt: "Logo 5", width: 100, height: 75 },
    { src: "/images/Logo_QuCare_RGB.png", alt: "Logo 5", width: 100, height: 75 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 4 } },
      { breakpoint: 900, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Slide key={index}>
            <LogoContainer>
              <LogoImage src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
            </LogoContainer>
          </Slide>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 60%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 40%;
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogoImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
`;
