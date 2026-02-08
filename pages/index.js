// pages/index.js
import styled from "styled-components";
import { theme } from "@/styles";
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import ImageSliderLight from "@/components/ImageSliderLight";
import ImageTextBox from "@/components/ImageTextBox";
import VideoTextBox from "@/components/VideoTextBox";
import ScrollBox from "@/components/ScrollBox";
import Video from "@/components/Video";
import ImageElement from "@/components/ImageElement";
import StudioBox from "@/components/StudioBox";
import ProjectBox from "@/components/ProjectBox";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import CookieBanner from "@/components/CookieBanner";

import indexData from "@/content/indexData";

const OnlyMobile = styled.div`
  display: block;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
const OnlyTabletUp = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export default function HomePage() {
  const data = indexData;

  return (
    <>
      <header>
        <Header useImageBackground={false} />
      </header>

      <Head>
        <title>{data?.seo?.title ?? "Dakiekste | Brandingfotografie"}</title>
        <meta name="description" content={data?.seo?.description ?? ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <CookieBanner />

      {data?.hero && <Hero {...data.hero} />}

      {data?.slider && <ImageSlider {...data.slider} />}

      {data?.content && <ImageTextBox {...data.content} />}

      {data?.people && <ImageTextBox {...data.people} />}

      {/* Portrait slider */}
      {data?.portraitSlider && (
        <>
          <OnlyMobile>
            <ImageSlider {...data.portraitSlider} />
          </OnlyMobile>
          <OnlyTabletUp>
            <ImageSliderLight {...data.portraitSlider} />
          </OnlyTabletUp>
        </>
      )}

      {data?.values && <ImageTextBox {...data.values} />}

      {data?.servicesScroll && <ScrollBox {...data.servicesScroll} />}

      {data?.videoTextBox && <VideoTextBox {...data.videoTextBox} />}

      {data?.identity && <ImageTextBox {...data.identity} />}

      {data?.videoA?.src && <Video src={data.videoA.src} />}

      {data?.workflow && <ScrollBox {...data.workflow} />}

      {data?.imageStellan && <ImageElement {...data.imageStellan} />}

      {data?.pool && <ProjectBox {...data.pool} />}

      {data?.videoB?.src && <Video src={data.videoB.src} />}

      {data?.studio && <StudioBox {...data.studio} />}

      {data?.imageStudio && <ImageElement {...data.imageStudio} />}

      {data?.engagement && <ImageTextBox {...data.engagement} />}

      {data?.imageBeforeFooter && <ImageElement {...data.imageBeforeFooter} />}

      <section id="faq">{data?.faq && <FAQ {...data.faq} />}</section>

      <Footer />
      <BackToTopButton />
    </>
  );
}
