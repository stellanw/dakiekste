import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles";
import Modal from "react-modal";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa"; // Import icons

Modal.setAppElement("#__next");

export default function ImageSlider({ images, headline }) {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setPhotoIndex(null);
    setIsOpen(false);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
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
    <StyledSlideContainer>
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
      <Modal
        isOpen={isOpen}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
            border: "none",
            background: "none",
          },
        }}
        onRequestClose={handleCloseModal}
      >
        {photoIndex !== null && (
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <FaTimes size={30} />
            </CloseButton>
            <ArrowLeft onClick={handlePrev}>
              <FaArrowLeft size={30} />
            </ArrowLeft>
            <ImageWrapper onClick={(e) => e.stopPropagation()}>
              <StyledModalImage
                src={images[photoIndex]}
                alt={`Image ${photoIndex}`}
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <ArrowRight onClick={handleNext}>
              <FaArrowRight size={30} />
            </ArrowRight>
          </ModalContent>
        )}
      </Modal>
    </StyledSlideContainer>
  );
}

const StyledSlideContainer = styled.div`
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
    box-sizing: border-box;
  }
  .slick-dots {
    & li {
      button {
        &::before {
          color: ${theme.primaryColor};
        }
      }
      &.slick-active {
        button::before {
          color: ${theme.primaryColor};
        }
      }
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
`;

const StyledModalImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
  z-index: 10;
`;

const ArrowRight = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
  z-index: 10;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: white;
  z-index: 10;
`;
