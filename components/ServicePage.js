// components/ServicePage.js

import Head from "next/head";
import ImageTextBox from "@/components/ImageTextBox";
import ScrollBox from "@/components/ScrollBox";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import CookieBanner from "@/components/CookieBanner";
import ServiceHeader from "./ServiceHeader";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Hero from "./Hero";
import PackagesBox from "@/components/PackagesBox";
import pricingConfig from "@/content/pricing/pricingData";

export default function ServicePage({ data }) {
  return (
    <>
      <header>
        <Header {...data.header} />
      </header>

      <Head>
        <title>{data?.seo?.title || "Dakiekste"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {data?.seo?.description && <meta name="description" content={data.seo.description} />}
      </Head>

      <CookieBanner />
      {data?.hero && <Hero {...data.hero} showLogoCarousel={false} />}
      {/* 2) Problem */}
      {data?.problem && <ImageTextBox {...data.problem} />}

      {/* 5) Packages */}
      {/* {data?.packages && <PackagesBox {...data.packages} />} */}
      {data?.packages && <PackagesBox {...data.packages} servicesData={pricingConfig.servicesData} businessType="Soloselbstständige & Gründer*innen" />}

      {/* 4) Wie wir es machen */}
      {data?.how && <ImageTextBox {...data.how} />}

      {/* 3) Lösungen / Bausteine */}
      {data?.solution && (
        <section id="leistungen">
          <ScrollBox {...data.solution} />
        </section>
      )}

      {/* 5) Proof */}
      {data?.proof && <ImageSlider {...data.proof} />}

      {/* 6) CTA */}
      {data?.cta && <ImageTextBox {...data.cta} />}

      {/* 4) Footer + BackToTop immer */}
      <Footer />
      <BackToTopButton />
    </>
  );
}
