// import { theme } from "@/styles";
// import styled from "styled-components";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function StudioBox({ topline, headline, text1, text2, slides }) {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//     fade: false,
//     centerPadding: "100px",
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 1,
//           fade: true,
//         },
//       },
//     ],
//   };

//   return (
//     <StyledDoubleTextBox>
//       <StyledTextWrapper>
//         <h2>{topline}</h2>
//         <h3>{headline}</h3>
//         <p>
//           {text1}
//           <br />
//           <br />
//           {text2}
//         </p>
//       </StyledTextWrapper>
//       <SlideContainer>
//         <StyledSlider {...settings}>
//           {slides.map((slide, index) => (
//             <Slide key={index}>
//               <ImageWrapper>
//                 <StyledImage src={slide.image} alt={slide.title} fill />
//               </ImageWrapper>

//               <h4>{slide.title}</h4>
//               <p>{slide.description}</p>
//             </Slide>
//           ))}
//         </StyledSlider>
//       </SlideContainer>
//     </StyledDoubleTextBox>
//   );
// }

// const StyledDoubleTextBox = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   position: relative;
//   width: 100%;
//   background-color: ${theme.color.beige};
//   margin-top: 90px;
//   overflow: hidden;
//   flex-direction: column;

//   @media (min-width: 1100px) {
//     flex-direction: row;
//   }
// `;

// const StyledTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: start;
//   background-color: ${theme.color.green};
//   padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
//   width: 100%;
//   @media (min-width: 750px) {
//     padding: ${theme.spacing.tablet.height.xxl} ${theme.spacing.tablet.side};
//   }

//   @media (min-width: 1100px) {
//     padding: ${theme.spacing.desktop.height.xxl} ${theme.spacing.desktop.side};
//     max-width: 50%;
//   }
// `;

// const SlideContainer = styled.div`
//   flex: 1;
//   padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
//   overflow-x: hidden;
//   width: 100%;
//   @media (min-width: 750px) {
//     padding: ${theme.spacing.tablet.height.xxl} 0;
//   }

//   @media (min-width: 1100px) {
//     padding: ${theme.spacing.desktop.height.xxl} 0;
//     max-width: 50%;
//   }
// `;

// const StyledSlider = styled(Slider)`
//   transform: translateX(0);

//   @media (min-width: 750px) {
//     transform: translateX(${theme.spacing.tablet.side});
//   }

//   @media (min-width: 1100px) {
//     transform: translateX(${theme.spacing.desktop.side});
//   }

//   .slick-slide {
//     padding: 0;

//     @media (min-width: 750px) {
//       padding: 0 ${theme.spacing.xl} 0 0;
//     }

//     @media (min-width: 1100px) {
//       padding: 0 ${theme.spacing.xxl} 0 0;
//     }
//   }
//   .slick-dots {
//     bottom: -20px;
//   }
//   .slick-dots li button:before {
//     color: ${theme.color.green};
//   }
// `;

// const Slide = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   align-items: center;
//   text-align: start;
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   margin-bottom: ${theme.spacing.ml};
//   aspect-ratio: 1 / 1;
// `;

// const StyledImage = styled(Image)`
//   object-fit: cover;
//   object-position: center;
//   /* border-radius: ${theme.borderRadius}; */
//   border-radius: 30px 0 30px 30px;
//   margin-bottom: ${theme.spacing.m};

//   @media (max-width: 750px) {
//     border-radius: ${theme.borderRadius} 0 ${theme.borderRadius} ${theme.borderRadius};
//   }
// `;

import { useState, useRef } from "react";
import { theme } from "@/styles";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StudioBox({ topline, headline, text1, text2, slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    centerPadding: "100px",
    beforeChange: (current, next) => setCurrentSlide(next),
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  };

  // Gehe zu einem bestimmten Slide
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <StyledDoubleTextBox>
      <StyledTextWrapper>
        <h2>{topline}</h2>
        <h3>{headline}</h3>
        <p>
          {text1}
          <br />
          <br />
          {text2}
        </p>
      </StyledTextWrapper>
      <SlideContainer>
        <StyledSlider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <ImageWrapper>
                <StyledImage src={slide.image} alt={slide.title} layout="fill" />
              </ImageWrapper>

              <h4>{slide.title}</h4>
              <p>{slide.description}</p>
            </Slide>
          ))}
        </StyledSlider>
        <InteractiveProgressBar>
          {slides.map((_, index) => (
            <ProgressSegment key={index} isActive={index === currentSlide} onClick={() => goToSlide(index)} />
          ))}
        </InteractiveProgressBar>
      </SlideContainer>
      {/* Fortschrittsleiste */}
    </StyledDoubleTextBox>
  );
}

const StyledDoubleTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${theme.color.beige};
  margin-top: 90px;
  overflow: hidden;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: ${theme.color.green};
  padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
  width: 100%;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} ${theme.spacing.desktop.side};
    max-width: 50%;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  flex: 1;
  padding: ${theme.spacing.mobile.height.xxl} ${theme.spacing.mobile.side};
  overflow-x: hidden;
  width: 100%;
  @media (min-width: 750px) {
    padding: ${theme.spacing.tablet.height.xxl} 0;
  }

  @media (min-width: 1100px) {
    padding: ${theme.spacing.desktop.height.xxl} 0;
    max-width: 50%;
  }
`;

const StyledSlider = styled(Slider)`
  position: relative;
  transform: translateX(0);

  @media (min-width: 750px) {
    transform: translateX(${theme.spacing.tablet.side});
  }

  @media (min-width: 1100px) {
    transform: translateX(${theme.spacing.desktop.side});
  }

  .slick-slide {
    padding: 0;

    @media (min-width: 750px) {
      padding: 0 ${theme.spacing.xl} 0 0;
    }

    @media (min-width: 1100px) {
      padding: 0 ${theme.spacing.xxl} 0 0;
    }
  }
  .slick-dots {
    bottom: -20px;
  }
  .slick-dots li button:before {
    color: ${theme.color.green};
  }
`;

const Slide = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: start;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.ml};
  aspect-ratio: 1 / 1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  /* border-radius: ${theme.borderRadius}; */
  border-radius: 30px 0 30px 30px;
  margin-bottom: ${theme.spacing.m};

  @media (max-width: 750px) {
    border-radius: ${theme.borderRadius} 0 ${theme.borderRadius} ${theme.borderRadius};
  }
`;

const InteractiveProgressBar = styled.div`
  position: absolute;
  bottom: -6rem;
  max-width: 40%;
  height: 1px;
  background-color: ${theme.color.dark};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 750px) {
    max-width: 50%;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  left: ${theme.spacing.mobile.side};
  @media (min-width: 750px) {
    left: ${theme.spacing.tablet.side};
  }

  @media (min-width: 1100px) {
    left: ${theme.spacing.desktop.side};
  }
`;

const ProgressSegment = styled.div`
  flex: 1;
  height: 3px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? theme.color.dark : "transparent")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.color.green};
  }
`;
