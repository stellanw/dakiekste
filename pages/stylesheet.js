// styles/stylesheet.js
import Layout from "@/components/Layout";
import { theme } from "@/styles";
import styled from "styled-components";

export default function Stylesheet() {
  // Extract color keys from the theme for rendering
  const colorKeys = Object.keys(theme).filter((key) => typeof theme[key] === "string");
  const spacingKeys = Object.keys(theme.spacing);
  const fontWeightKeys = Object.keys(theme.fontWeight);
  const lineHeightKeys = Object.keys(theme.lineHeight);

  return (
    <>
      <Layout>
        <StyledStylesheet>
          <h1>STYLESHEET</h1>
          {/* Typography Section */}
          <div>
            -----------------------------------------------------------------------------------------------------------------------
          </div>
          <section>
            <h3>#HEADLINES DEFAULT</h3>
            <div>
              -----------------------------------------------------------------------------------------------------------------------
            </div>
            <h1>Headline h1</h1>
            <h2>Headline h2</h2>
            <h3>Headline h3</h3>
            <h4>Headline h4</h4>
            <h5>Headline h5</h5>
          </section>
          <div>
            -----------------------------------------------------------------------------------------------------------------------
          </div>
          <section>
            <h3>#LINE HEIGHTS</h3>
            <div>
              -----------------------------------------------------------------------------------------------------------------------
            </div>
            {lineHeightKeys.map((key) => (
              <p key={key} style={{ lineHeight: theme.lineHeight[key] }}>
                This is a paragraph demonstrating lineHeight: {key}. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua.
              </p>
            ))}
          </section>
          <div>
            -----------------------------------------------------------------------------------------------------------------------
          </div>
          <section>
            <h2>#FONT WEIGHTS</h2>
            <div>
              -----------------------------------------------------------------------------------------------------------------------
            </div>
            {fontWeightKeys.map((key) => (
              <h1 key={key} style={{ fontWeight: theme.fontWeight[key] }}>
                Headline h1 fontWeight: {key}
              </h1>
            ))}
            {fontWeightKeys.map((key) => (
              <h2 key={key} style={{ fontWeight: theme.fontWeight[key] }}>
                Headline h2 fontWeight: {key}
              </h2>
            ))}
            {fontWeightKeys.map((key) => (
              <h3 key={key} style={{ fontWeight: theme.fontWeight[key] }}>
                Headline h3 fontWeight: {key}
              </h3>
            ))}
          </section>
          <div>
            -----------------------------------------------------------------------------------------------------------------------
          </div>
          <h3>#FORM</h3>
          <div>
            -----------------------------------------------------------------------------------------------------------------------
          </div>
          <section>
            <StyledForm>
              <label htmlFor="input">Label for Input</label>
              <input id="input" placeholder="Sample input" />
              <label htmlFor="textarea">Label for Textarea</label>
              <textarea id="textarea" placeholder="Sample textarea" />
              <button>Sample Button</button>
            </StyledForm>
          </section>
          <div>
            -----------------------------------------------------------------------------------------------------------------------
          </div>
          {/* Colors Section */}
          <section>
            <h2>Colors</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {colorKeys.map((key) => (
                <div key={key} style={{ margin: "1rem" }}>
                  <ColorBox style={{ backgroundColor: theme[key] }} />
                  <p>
                    {key}: {theme[key]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Spacing Section */}
          <section>
            <h2>#SPACING</h2>
            <div>
              {spacingKeys.map((key) => (
                <SpacingBox key={key} margin={theme.spacing[key]}>
                  Margin: {key} {theme.spacing[key]}
                </SpacingBox>
              ))}
            </div>
          </section>

          {/* Border Radius Section */}
          <section>
            <h2>#BORDER RADIUS</h2>
            <BorderRadiusBox>Border Radius: {theme.borderRadius}</BorderRadiusBox>
            <button>SAMPLE BUTTON</button>
          </section>
        </StyledStylesheet>
      </Layout>
    </>
  );
}

const StyledStylesheet = styled.div`
  margin: 4rem 0;
  p {
    margin: 2rem 0;
  }
  section {
    margin: 2rem 0;
  }
`;

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 0.5rem;
`;

const SpacingBox = styled.div`
  margin: ${(props) => `0 ${props.margin} ${props.margin} ${props.margin}` || "0"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${theme.secondaryColorDust};
  border: 1px dashed ${theme.textColor};
`;

const BorderRadiusBox = styled.div`
  border-radius: ${theme.borderRadius};
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;