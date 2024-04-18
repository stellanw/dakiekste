import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Horizontales Scrollen aktivieren */
  width: 100%;
`;

const GalleryItem = styled.div`
  flex: 0 0 auto; /* Flex-Elemente bleiben immer gleich breit */
  width: 300px; /* Breite jedes Container anpassen */
  margin-right: 20px; /* Abstand zwischen den Containern */
`;

const Gallery = ({ items }) => {
  return (
    <GalleryContainer>
      {items.map((item, index) => (
        <GalleryItem key={index}>{item}</GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;

// const items = [
//     <StyledSlideContainer key={1}>Container 1</StyledSlideContainer>,
//     <StyledSlideContainer key={2}>Container 2</StyledSlideContainer>,
//     <StyledSlideContainer key={3}>Container 3</StyledSlideContainer>,
//   ];
