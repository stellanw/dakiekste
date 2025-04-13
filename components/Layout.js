import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import BackToTopButton from "./BackToTopButton";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    setIsHomepage(router.pathname === "/");
  }, [router.pathname]);

  return (
    <div>
      <header>
        <NavBar />
        <Header
          // src="/images/Head_Image.jpg"
          videoSrc="/videos/Klubstudio_video.mp4"
          headlineBold1="DEIN IMAGE"
          headlineThin="KLAR"
          headlineBold2="IM BLICK"
          headline2="mit Bildwelten die wirken"
        />
      </header>
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
