import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";

export default function Preise() {
  return (
    <Layout>
      <StyledImageHeadContainer>
        <StyledHeadImage
          src="/images/Dakiekste_header_image_.jpg"
          alt="dakiekste header image"
          priority
          width={1400}
          height={500}
        />
      </StyledImageHeadContainer>
      <StyledHeadlineContainer>
        <StyledH1Thin>PREISE&nbsp;&nbsp;</StyledH1Thin>
        <StyledH1>ZU UNSEREM SERVICE</StyledH1>
      </StyledHeadlineContainer>
    </Layout>
  );
}

const StyledSpanThin = styled.span`
  font-weight: 200;
`;
const StyledImageHeadContainer = styled.div`
  display: flex;
  position: relative;
  z-index: -5;
  width: 100%;
  height: 400px;
  /* overflow: hidden; */
  top: -3rem;
  @media (min-width: 750px) {
    height: 600px;
  }
  @media (min-width: 1100px) {
    height: 800px;
  }
`;

const StyledHeadImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const StyledHeadlineContainer = styled.div`
  margin-left: 2rem;
`;

const StyledH1Thin = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0;
  margin-top: -14rem;
  /* margin-bottom: 3rem; */
  color: white;
`;

const StyledH1 = styled.h1`
  /* display: flex;
  justify-content: start;
  flex-wrap: nowrap; */
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  /* margin-top: 10rem; */
  margin-bottom: 3rem;
  color: white;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-top: -0.2rem;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
