import { useState, useEffect } from "react";
import { theme } from "@/styles";
import styled from "styled-components";
import { PiUsersLight, PiCameraLight, PiInstagramLogoLight } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Leistungen({ leistungen }) {
  const icons = [PiCameraLight, PiUsersLight, PiInstagramLogoLight];
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    nextArrow: <StyledIoChevronForwardOutline />,
    prevArrow: <StyledIoChevronBackOutline />,
  };

  return (
    <StyledLeistungenContainer>
      <StyledTextBox>
        <h2>Leistungen</h2>
        <h3>Alles, was du für deinen Erfolg brauchst – aus einer Hand.</h3>
      </StyledTextBox>
      <StyledSlider {...settings}>
        {leistungen.map(({ title, text }, index) => {
          const Icon = icons[index];
          return (
            <StyledLeistungBox key={index}>
              <StyledIconWrapper>
                <Icon />
              </StyledIconWrapper>
              <h4>{title}</h4>
              <p>{text}</p>
            </StyledLeistungBox>
          );
        })}
      </StyledSlider>
    </StyledLeistungenContainer>
  );
}

const StyledLeistungenContainer = styled.div`
  background-color: ${theme.color.dark};
  padding: ${theme.spacing.xxxl} ${theme.spacing.m};

  @media (min-width: 750px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
  @media (min-width: 1100px) {
    padding: ${theme.spacing.xxxxl} ${theme.spacing.xxl};
  }
`;

const StyledSlider = styled(Slider)`
  padding: ${theme.spacing.l} 0 0 0;
  margin: 0 ${theme.spacing.sm};
  .slick-slide {
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.s};
    box-sizing: border-box;
  }
  .slick-dots {
    & li {
      button {
        &::before {
          color: ${theme.color.lightGreen};
        }
      }
      &.slick-active {
        button::before {
          color: ${theme.color.green};
        }
      }
    }
  }
`;

const StyledIoChevronForwardOutline = styled(IoChevronForwardOutline)`
  color: ${theme.color.beige};

  &:hover {
    color: ${theme.color.green};
  }
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  color: ${theme.color.beige};

  &:hover {
    color: ${theme.color.green};
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.color.beige};
  max-width: 700px;
  margin: auto;
  padding: 0 ${theme.spacing.sm};
  h3 {
    padding: ${theme.spacing.xs} 0;
    margin: 0 0 ${theme.spacing.m} 0;
    font-weight: ${theme.fontWeight.bold};
    @media (min-width: 750px) {
      font-weight: ${theme.fontWeight.bold};
    }

    @media (min-width: 1100px) {
      margin: 0 0 ${theme.spacing.xl} 0;
    }
  }
`;

const StyledLeistungBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  text-align: center;
  color: ${theme.color.beige};
  padding: 0 ${theme.spacing.m} 0 ${theme.spacing.m};
  max-width: 320px;
`;

const StyledIconWrapper = styled.div`
  font-size: ${theme.fontSize.xxxl};
  color: ${theme.color.green};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 ${theme.spacing.sm} 0;
`;
