import { theme } from "@/styles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Head from "next/head";
import head_image from "/public/images/12_Textbox/dakiekste-team-stellan-maischa-02.jpg";
import ContactForm from "@/components/ContactForm";
import Menu from "@/components/Menu";

export default function KontaktPage() {
  const header = {
    topline: "Kontakt",
    desktopH1: "Lass uns über\ndein Projekt sprechen",
    mobileH1: "Lass uns über dein Projekt sprechen",

    // ServiceHeader Props
    backgroundColor: theme.color.dark,
    backgroundType: "color",
    backgroundType: "image",
    backgroundImageSrc: head_image,
  };

  return (
    <>
      <Head>
        <title>DAKIEKSTE | Kontakt</title>
        <meta name="description" content="Schreibe uns" />
        <meta name="robots" content="index,follow" />
      </Head>
      {/* <Menu /> */}
      <Header {...header} />
      <ContactForm />
      <Footer />
    </>
  );
}
