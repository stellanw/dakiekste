import { theme } from "@/styles";
import Image from "next/image";
import styled, { css } from "styled-components";
import { PiArrowUpRightLight } from "react-icons/pi";
import Link from "next/link";
import AugenIcon from "@/Icons/AugenIcon";
import { PiArrowRightBold } from "react-icons/pi";

export default function ImageTextBox({
  topline = "",
  headline = "",
  text1 = "",
  text2 = "",
  listItems = [],

  image, // bewusst kein Default → Pflicht
  alt = "",

  flexflow = "row",
  flexflowMobile = "column-reverse",

  link = "",
  url = "",

  hide = null,
}) {
  const hasList = Array.isArray(listItems) && listItems.length > 0;

  if (!image) {
    if (process.env.NODE_ENV === "development") {
      console.warn("ImageListBox: 'image' prop is missing");
    }
    return null;
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledImageTextBox $flexflow={flexflow} $flexflowMobile={flexflowMobile}>
          <StyledImageContainer $flexflow={flexflow} $hide={hide}>
            <ImageBox>
              <StyledImage src={image} alt={alt} fill quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw" priority />
            </ImageBox>
          </StyledImageContainer>

          <StyledTextWrapper>
            {topline && <h2>{topline}</h2>}
            {headline && <h3>{headline}</h3>}

            {hasList ? (
              <ul>
                {listItems.map((item, idx) => (
                  <li key={idx}>
                    {/* <IconWrapper>
                      <AugenIcon />
                    </IconWrapper> */}
                    <PiArrowRightBold />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                {text1 && <p>{text1}</p>}
                {text2 && <p>{text2}</p>}
              </>
            )}

            {link && url && (
              <Link href={url}>
                {link}
                <StyledPiArrowUpRightLight />
              </Link>
            )}
          </StyledTextWrapper>
        </StyledImageTextBox>
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.beige};
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--max-content);
  margin: 0 auto;
  padding: 0;
`;

const StyledImageTextBox = styled.div`
  display: flex;
  flex-direction: ${({ $flexflowMobile }) => $flexflowMobile || "column"};
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: ${({ $flexflow }) => $flexflow || "row"};
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxxl) var(--side-padding);
  width: 100%;
  white-space: pre-line;
  @media (min-width: ${theme.breakpoints.tablet}) {
    min-width: 50%;
    max-width: 50%;
    padding: var(--side-padding);
  }

  p {
    max-width: var(--max-text);
    padding-bottom: var(--spacing-s);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: var(--spacing-m) 0;
  }

  li {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: calc(0.5 * var(--spacing-xs));
    align-items: center;
    padding-bottom: var(--spacing-xs);
    font-size: var(--font-l);
  }

  span {
    max-width: var(--max-text);
  }

  a {
    font-size: var(--font-m);

    &:hover {
      color: ${theme.color.green};
      transition: color ease 0.3s;
    }
    svg {
    }
  }
`;

const StyledImageContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;

  @media (min-width: ${theme.breakpoints.tablet}) {
    margin: var(--side-padding);
    width: 50%;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    place-items: ${({ $flexflow }) => ($flexflow === "row-reverse" ? "end" : "start")};
  }

  ${({ $hide }) => {
    if (!$hide) return "";
    const bpMap = {
      mobile: theme.breakpoints.mobile,
      tablet: theme.breakpoints.tablet,
      desktop: theme.breakpoints.desktop,
    };
    const bp = bpMap[$hide];
    if (!bp) return "";

    return css`
      @media (max-width: ${bp}) {
        display: none !important;
      }
    `;
  }}
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 0;

  aspect-ratio: 1 / 1;
  height: var(--height-section);

  @media (min-width: ${theme.breakpoints.tablet}) {
    border-radius: ${theme.borderRadius};
    aspect-ratio: 1 / 1;
    max-height: 400px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    aspect-ratio: 684 / 598;
    max-height: 700px;
    min-height: 600px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const StyledPiArrowUpRightLight = styled(PiArrowUpRightLight)`
  margin-left: calc(0.25 * var(--spacing-xs));
  margin-bottom: -3px;
  stroke-width: 10px;

  &:hover {
    transform: scale(1.2);
    color: ${theme.color.green};
    transition:
      color ease 0.3s,
      transform ease 0.2s;
  }
`;
