import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LogoCarousel() {
  const logos = [
    { src: "/images/otto_logo.png", alt: "Logo 1", width: 150, height: 75 },
    { src: "/images/averdung_logo.png", alt: "Logo 2", width: 150, height: 75 },
    { src: "/images/neuland_logo.png", alt: "Logo 3", width: 150, height: 75 },
    {
      src: "/images/milk-made-ice-cream_logo.png",
      alt: "Logo 4",
      width: 150,
      height: 75,
    },
    { src: "/images/hofa_logo.png", alt: "Logo 5", width: 150, height: 75 },
    // Add more logos with their respective alt text, width, and height
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
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
  width: 70%;
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
