import Slider from "@/components/Slider";
import SliderContent from "@/components/SliderContent";
import styled from "styled-components";
import { theme } from "@/styles";

export default function SliderComplete() {
  const slides = [
    <StyledSlideContainer key={1}>
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 01"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.primaryColor}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer>,
    <StyledSlideContainer2 key={2}>
      {" "}
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 02"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.secondaryColorPurple}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer2>,
    <StyledSlideContainer key={3}>
      {" "}
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 03"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.primaryColor}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer>,
    <StyledSlideContainer2 key={2}>
      {" "}
      <SliderContent
        title1="LEISTUNG"
        title2="BEISPIEL 04"
        paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        svgColor={theme.secondaryColorPurple}
        listItems={["USP BEISPIEL 1", "USP BEISPIEL 2", "USP BEISPIEL 3"]}
      />
    </StyledSlideContainer2>,
  ];

  return (
    <StyledSliderWrapper>
      <h1>Leistungen</h1>
      <Slider slides={slides} />
    </StyledSliderWrapper>
  );
}
const StyledSliderWrapper = styled.div`
  margin-top: 6rem;
`;

const StyledSlideContainer = styled.div`
  width: 300px;
  height: 500px;
  padding: 1.5rem;
  background-color: ${theme.secondaryColorPurple};
  color: ${theme.primaryColor};
`;

const StyledSlideContainer2 = styled.div`
  width: 300px;
  height: 500px;
  padding: 1.5rem;
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColorPurple};
`;
