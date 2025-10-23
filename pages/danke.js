import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import { theme } from "@/styles";
import Menu from "@/components/Menu";
import { PiX } from "react-icons/pi";

export default function DankePage() {
  const router = useRouter();

  const handleSuccessClose = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dak:restore-flag", "1");
    }

    router.push("/#preise", undefined, { scroll: false });
  };

  return (
    <>
      <Menu />
      <Head>
        <title>DAKIEKSTE – Danke</title>
        {/* Danke-Seite nicht indexieren */}
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <DankeSiteBody>
        <Wrapper>
          <StyledSuccessMessage>
            <CloseButton onClick={handleSuccessClose}>
              <PiX />
            </CloseButton>
            <h3>Danke für deine Nachricht!</h3>
            <p>Wir melden uns in Kürze bei dir mit weiteren Infos oder einem Angebot.</p>
          </StyledSuccessMessage>
        </Wrapper>
      </DankeSiteBody>
    </>
  );
}

const DankeSiteBody = styled.div`
  background-color: ${theme.color.beige};
`;

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-l);
  background-color: rgba(0, 0, 0, 0.9);
`;

const StyledSuccessMessage = styled.div`
  position: relative;
  background-color: ${theme.color.beige};
  border: 1px solid ${theme.color.dark};
  border-radius: ${theme.borderRadius};
  padding: var(--side-padding);
  width: 100%;
  max-width: 600px;
  color: ${theme.color.dark};
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
  }

  p {
    line-height: ${theme.lineHeight.xl};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-l);
  right: var(--spacing-l);
  background: none;
  border: none;
  font-size: var(--font-l);
  color: ${theme.color.dark};
  z-index: var(--index-overlay-content);
  cursor: pointer;

  &:hover {
    color: ${theme.color.green};
    svg {
      stroke-width: 8px;
      transform: scale(1.15);
    }
  }

  svg {
    stroke-width: 4px;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    top: var(--spacing-s);
    right: var(--spacing-s);
  }
`;
