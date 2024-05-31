import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

export default function ImageSlider({ images, headline }) {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleCloseLightbox = () => {
    setPhotoIndex(null);
    setIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
  };

  return (
    <StyledSlideConatiner>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledSlider {...settings}>
        {images.map((image, index) => (
          <StyledImageContainer
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <StyledImage
              src={image}
              alt={`Image ${index}`}
              width={1400}
              height={600}
            />
          </StyledImageContainer>
        ))}
      </StyledSlider>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </StyledSlideConatiner>
  );
}

const StyledSlideConatiner = styled.div`
  height: 500px;
  width: 100%;
`;

const StyledHeadline = styled.h2`
  margin: 0 0 1.5rem 2rem;
  font-size: ${theme.fontSizes.medium};
`;

const StyledImageContainer = styled.div``;

const StyledImage = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: top;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    /* padding: 0 1rem; */
    box-sizing: border-box;
  }
  .slick-dots {
    & li {
      button {
        &::before {
          color: ${theme.primaryColor}; // Color for inactive dots
        }
      }
      &.slick-active {
        button::before {
          color: ${theme.primaryColor}; // Color for active dot
        }
      }
    }
  }
`;
