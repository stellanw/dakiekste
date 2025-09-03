import styled from "styled-components";
import { useState } from "react";
import { theme } from "@/styles";
import Link from "next/link";

export default function ContactForm() {
  const initialFormData = {
    fullName: "",
    pronouns: "",
    customPronouns: "",
    company: "",
    email: "",
    message: "",
    acceptedTerms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setIsSuccess(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setResponseMessage("Bitte gib eine gültige Emailadresse ein.");
      return;
    }

    if (!formData.fullName?.trim()) {
      setResponseMessage("Bitte gib deinen Namen ein.");
      return;
    }

    // falls „andere“ gewählt wurde, sollte ein Wert vorhanden sein
    if (formData.pronouns === "andere" && !formData.customPronouns.trim()) {
      setResponseMessage("Bitte gib deine eigenen Pronomen ein.");
      return;
    }

    setLoading(true);
    try {
      const pronouns = formData.pronouns === "andere" ? (formData.customPronouns || "").trim() : formData.pronouns || undefined;

      const payload = {
        email: formData.email,
        name: formData.fullName.trim(),
        company: formData.company || undefined,
        message: formData.message,
        pronouns,
        acceptedTerms: !!formData.acceptedTerms,
        source: "contact",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        console.log("API error:", data);
        throw new Error(data.error || "Fehler beim Senden");
      }

      setIsSuccess(true);
      setResponseMessage("Wir melden uns schnellstmöglich bei dir.");
      setFormData(initialFormData);
    } catch (err) {
      console.error("Fehler:", err);
      setResponseMessage("Ups! Da ist was schiefgelaufen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledTextContainer>
        <h2>LASS UNS REDEN</h2>
        <h4>Schreib uns eine Nachricht und lass uns gemeinsam deine Marke voranbringen.</h4>
      </StyledTextContainer>

      {isSuccess ? (
        <StyledSuccessMessage>
          <h3>Danke für deine Nachricht!</h3>
          <p>{responseMessage}</p>
          <StyledButton
            onClick={() => {
              setResponseMessage("");
              setIsSuccess(false);
            }}
          >
            Neue Nachricht senden
          </StyledButton>
        </StyledSuccessMessage>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <SideBySideWrapper>
            <Wrapper>
              <PronounRow>
                <PronounCol>
                  <PronounLabel htmlFor="pronouns">Pronomen</PronounLabel>
                  <StyledSelect
                    id="pronouns"
                    name="pronouns"
                    value={formData.pronouns ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((p) => ({
                        ...p,
                        pronouns: value,
                        customPronouns: value === "andere" ? p.customPronouns : "",
                      }));
                    }}
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    <option value="sie/ihr">sie/ihr</option>
                    <option value="er/ihm">er/ihm</option>
                    <option value="they/them">they/them</option>
                    <option value="keine Angabe">keine Angabe</option>
                    <option value="andere">andere…</option>
                  </StyledSelect>
                </PronounCol>

                {formData.pronouns === "andere" && (
                  <PronounCol>
                    <PronounLabel htmlFor="customPronouns">Eigene</PronounLabel>
                    <StyledInput id="customPronouns" name="customPronouns" value={formData.customPronouns} onChange={handleChange} placeholder="z.B. dey/deren" />
                  </PronounCol>
                )}
              </PronounRow>
            </Wrapper>

            <Wrapper>
              <label htmlFor="fullName">Vor und Nachname</label>
              <StyledInput name="fullName" value={formData.fullName} onChange={handleChange} required />
            </Wrapper>
          </SideBySideWrapper>

          <SideBySideWrapper>
            <Wrapper>
              <label htmlFor="email">Email</label>
              <StyledInput name="email" type="email" value={formData.email} onChange={handleChange} required />
            </Wrapper>
          </SideBySideWrapper>

          <label htmlFor="message">Deine Nachricht</label>
          <StyledTextArea name="message" value={formData.message} onChange={handleChange} required />

          <StyledCheckboxGroup>
            <StyledLabel htmlFor="acceptedTerms">
              <input type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
              Ich akzeptiere die <StyledLink href="/impressum">AGB & Datenschutzerklärung</StyledLink>
            </StyledLabel>
          </StyledCheckboxGroup>

          <StyledButton type="submit" disabled={loading}>
            {loading ? "Senden..." : "Senden"}
          </StyledButton>
          {responseMessage && <p>{responseMessage}</p>}
        </StyledForm>
      )}
    </StyledFormWrapper>
  );
}

/* ===== Styles ===== */

const StyledFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${theme.color.dark};
  width: 100%;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &::selection,
  & *::selection {
    background: ${theme.color.beige};
    color: ${theme.color.dark};
  }
`;

const StyledTextContainer = styled.div`
  flex-basis: 50%;
  color: ${theme.color.beige};
  padding: var(--spacing-xxxl) var(--side-padding) 0 var(--side-padding);

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: var(--spacing-xxxl) var(--side-padding);
  }

  h3 {
    text-transform: uppercase;
    font-weight: ${theme.fontWeight.bold};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: var(--spacing-xxxl) var(--side-padding);
  color: ${theme.color.beige};

  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-basis: 50%;
  }

  label {
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: 0.035rem;
    color: ${theme.color.beige};
  }

  input[type="checkbox"] {
    border: 2px solid ${theme.color.beige};
    outline: none;
  }

  p {
    font-size: var(--font-m);
    color: ${theme.color.beige};
    margin: 0;
    padding-top: var(--spacing-s);
  }
`;

const StyledButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-m);
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};
  font-size: var(--font-m);
  font-weight: ${theme.fontWeight.regular};
  letter-spacing: 0.08rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid ${theme.color.beige};
  text-transform: uppercase;

  &:hover {
    color: ${theme.color.dark};
    background-color: ${theme.color.green};
  }
`;

const StyledInput = styled.input`
  margin-bottom: var(--spacing-xs);
  padding: var(--spacing-xs);
  height: var(--spacing-m);
  border: 1px solid ${theme.color.beige};
  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.4 * var(--spacing-m));
  }

  &:active {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.dark} inset;
    -webkit-text-fill-color: ${theme.color.beige};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${theme.color.green} inset;
    -webkit-text-fill-color: ${theme.color.dark};
  }
`;

const StyledTextArea = styled.textarea`
  padding: var(--spacing-s);
  margin-bottom: calc(0.5 * var(--spacing-xs));
  width: 100% !important;
  min-height: 150px;
  max-height: 150px;
  resize: none;
  border: 1px solid ${theme.color.beige};
  &:active {
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  font-size: var(--font-s);
  margin-bottom: var(--spacing-xs);
  color: ${theme.color.beige};
`;

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: var(--spacing-xs);
  row-gap: 0;
  padding-bottom: var(--spacing-xs);
  font-size: var(--font-xs);
  label {
    font-weight: ${theme.fontWeight.light};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SideBySideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--spacing-s);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

const StyledLink = styled(Link)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.beige};
  padding: 0 0.4rem;

  &:hover {
    color: ${theme.color.beige};
  }
`;

const StyledSuccessMessage = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--spacing-xxxl) var(--side-padding);
  color: ${theme.color.beige};

  p {
    font-size: var(--font-m);
    margin-bottom: var(--spacing-l);
  }
`;

/* ---- Select + Pronouns Split ---- */

const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: var(--spacing-xs);
  height: calc(1.063 * var(--spacing-m));
  padding: 0 var(--spacing-xs);
  color: ${theme.color.beige};
  background-color: ${theme.color.dark};
  border: 1px solid ${theme.color.beige};
  border-radius: calc(0.5 * ${theme.borderRadius});

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: calc(2.4 * var(--spacing-m));
  }

  /* Pfeil */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.beige.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");

  &:focus {
    outline: none;
    background-color: ${theme.color.green};
    color: ${theme.color.dark};
    border-color: ${theme.color.green};
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.dark.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  }

  & option {
    color: ${theme.color.dark};
    background: ${theme.color.beige};
  }

  /* legacy IE/Edge */
  &::-ms-expand {
    display: none;
  }
`;

const PronounRow = styled.div`
  display: flex;
  gap: var(--spacing-s);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`;

const PronounCol = styled.div`
  flex: 1 1 50%;
  min-width: 0;

  & > label {
    display: block;
    margin-bottom: calc(0.5 * var(--spacing-xs));
  }
`;

const PronounLabel = styled.label`
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.035rem;
`;

// import styled from "styled-components";
// import { useState } from "react";
// import { theme } from "@/styles";
// import Link from "next/link";

// export default function ContactForm() {
//   const initialFormData = {
//     fullName: "",
//     pronouns: "",
//     customPronouns: "",
//     company: "",
//     email: "",
//     message: "",
//     acceptedTerms: false,
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResponseMessage("");
//     setIsSuccess(false);

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailRegex.test(formData.email)) {
//       setResponseMessage("Bitte gib eine gültige Emailadresse ein.");
//       return;
//     }

//     if (!formData.fullName?.trim()) {
//       setResponseMessage("Bitte gib deinen Namen ein.");
//       return;
//     }

//     // falls „andere“ gewählt wurde, sollte ein Wert vorhanden sein
//     if (formData.pronouns === "andere" && !formData.customPronouns.trim()) {
//       setResponseMessage("Bitte gib deine eigenen Pronomen ein.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const pronouns = formData.pronouns === "andere" ? (formData.customPronouns || "").trim() : formData.pronouns || undefined;

//       const payload = {
//         email: formData.email,
//         name: formData.fullName.trim(),
//         company: formData.company || undefined,
//         message: formData.message,
//         pronouns,
//         acceptedTerms: !!formData.acceptedTerms,
//         source: "contact",
//       };

//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         console.log("API error:", data);
//         throw new Error(data.error || "Fehler beim Senden");
//       }

//       setIsSuccess(true);
//       setResponseMessage("Wir melden uns schnellstmöglich bei dir.");
//       setFormData(initialFormData);
//     } catch (err) {
//       console.error("Fehler:", err);
//       setResponseMessage("Ups! Da ist was schiefgelaufen.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StyledFormWrapper>
//       <StyledTextContainer>
//         <h2>LASS UNS REDEN</h2>
//         <h4>Schreib uns eine Nachricht und lass uns gemeinsam deine Marke voranbringen.</h4>
//       </StyledTextContainer>

//       {isSuccess ? (
//         <StyledSuccessMessage>
//           <h3>Danke für deine Nachricht!</h3>
//           <p>{responseMessage}</p>
//           <StyledButton
//             onClick={() => {
//               setResponseMessage("");
//               setIsSuccess(false);
//             }}
//           >
//             Neue Nachricht senden
//           </StyledButton>
//         </StyledSuccessMessage>
//       ) : (
//         <StyledForm onSubmit={handleSubmit}>
//           <SideBySideWrapper>
//             <Wrapper>
//               <PronounRow>
//                 <PronounCol>
//                   <PronounLabel htmlFor="pronouns">Pronomen</PronounLabel>
//                   <StyledSelect
//                     id="pronouns"
//                     name="pronouns"
//                     value={formData.pronouns ?? ""}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       setFormData((p) => ({
//                         ...p,
//                         pronouns: value,
//                         customPronouns: value === "andere" ? p.customPronouns : "",
//                       }));
//                     }}
//                   >
//                     <option value="" disabled>
//                       Bitte wählen
//                     </option>
//                     <option value="sie/ihr">sie/ihr</option>
//                     <option value="er/ihm">er/ihm</option>
//                     <option value="they/them">they/them</option>
//                     <option value="keine Angabe">keine Angabe</option>
//                     <option value="andere">andere…</option>
//                   </StyledSelect>
//                 </PronounCol>

//                 {formData.pronouns === "andere" && (
//                   <PronounCol>
//                     <PronounLabel htmlFor="customPronouns">Eigene</PronounLabel>
//                     <StyledInput id="customPronouns" name="customPronouns" value={formData.customPronouns} onChange={handleChange} placeholder="z.B. dey/deren" />
//                   </PronounCol>
//                 )}
//               </PronounRow>
//             </Wrapper>

//             <Wrapper>
//               <label htmlFor="fullName">Vor und Nachname</label>
//               <StyledInput name="fullName" value={formData.fullName} onChange={handleChange} required />
//             </Wrapper>
//           </SideBySideWrapper>

//           <SideBySideWrapper>
//             <Wrapper>
//               <label htmlFor="email">Email</label>
//               <StyledInput name="email" type="email" value={formData.email} onChange={handleChange} required />
//             </Wrapper>
//           </SideBySideWrapper>

//           <label htmlFor="message">Deine Nachricht</label>
//           <StyledTextArea name="message" value={formData.message} onChange={handleChange} required />

//           <StyledCheckboxGroup>
//             <StyledLabel htmlFor="acceptedTerms">
//               <input type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
//               Ich akzeptiere die <StyledLink href="/impressum">AGB & Datenschutzerklärung</StyledLink>
//             </StyledLabel>
//           </StyledCheckboxGroup>

//           <StyledButton type="submit" disabled={loading}>
//             {loading ? "Senden..." : "Senden"}
//           </StyledButton>
//           {responseMessage && <p>{responseMessage}</p>}
//         </StyledForm>
//       )}
//     </StyledFormWrapper>
//   );
// }

// /* ===== Styles ===== */

// const StyledFormWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   background-color: ${theme.color.dark};
//   width: 100%;
//   overflow: hidden;

//   @media (max-width: ${theme.breakpoints.tablet}) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   &::selection,
//   & *::selection {
//     background: ${theme.color.beige};
//     color: ${theme.color.dark};
//   }
// `;

// const StyledTextContainer = styled.div`
//   flex-basis: 50%;
//   color: ${theme.color.green};
//   padding: var(--spacing-xxxl) var(--side-padding) 0 var(--side-padding);

//   @media (min-width: ${theme.breakpoints.tablet}) {
//     padding: var(--spacing-xxxl) var(--side-padding);
//   }

//   h3 {
//     text-transform: uppercase;
//     font-weight: ${theme.fontWeight.bold};
//   }
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-basis: 100%;
//   flex-direction: column;
//   align-items: start;
//   justify-content: center;
//   padding: var(--spacing-xxxl) var(--side-padding);
//   color: ${theme.color.beige};

//   @media (min-width: ${theme.breakpoints.desktop}) {
//     flex-basis: 50%;
//   }

//   label {
//     font-weight: ${theme.fontWeight.bold};
//     letter-spacing: 0.035rem;
//   }

//   input[type="checkbox"] {
//     border: 2px solid ${theme.color.green};
//     outline: none;
//   }

//   p {
//     font-size: var(--font-m);
//     color: ${theme.color.beige};
//     margin: 0;
//     padding-top: var(--spacing-s);
//   }
// `;

// const StyledButton = styled.button`
//   padding: var(--spacing-xs) var(--spacing-m);
//   color: ${theme.color.green};
//   background-color: ${theme.color.dark};
//   font-size: var(--font-m);
//   font-weight: ${theme.fontWeight.regular};
//   letter-spacing: 0.08rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   border: 1px solid ${theme.color.green};
//   text-transform: uppercase;

//   &:hover {
//     color: ${theme.color.dark};
//     background-color: ${theme.color.green};
//   }
// `;

// const StyledInput = styled.input`
//   margin-bottom: var(--spacing-xs);
//   padding: var(--spacing-xs);
//   height: var(--spacing-m);

//   @media (max-width: ${theme.breakpoints.tablet}) {
//     height: calc(2.4 * var(--spacing-m));
//   }

//   &:active {
//     background-color: ${theme.color.green};
//     color: ${theme.color.dark};
//   }

//   &:focus {
//     outline: none;
//     background-color: ${theme.color.green};
//     color: ${theme.color.dark};
//   }

//   &:-webkit-autofill {
//     -webkit-box-shadow: 0 0 0px 1000px ${theme.color.dark} inset;
//     -webkit-text-fill-color: ${theme.color.beige};
//   }

//   &:-webkit-autofill:focus {
//     -webkit-box-shadow: 0 0 0px 1000px ${theme.color.green} inset;
//     -webkit-text-fill-color: ${theme.color.dark};
//   }
// `;

// const StyledTextArea = styled.textarea`
//   padding: var(--spacing-s);
//   margin-bottom: calc(0.5 * var(--spacing-xs));
//   width: 100% !important;
//   min-height: 150px;
//   max-height: 150px;
//   resize: none;

//   &:active {
//     background-color: ${theme.color.green};
//     color: ${theme.color.dark};
//   }

//   &:focus {
//     outline: none;
//     background-color: ${theme.color.green};
//     color: ${theme.color.dark};
//   }
// `;

// const StyledLabel = styled.label`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: start;
//   align-items: center;
//   font-size: var(--font-s);
//   margin-bottom: var(--spacing-xs);
// `;

// const StyledCheckboxGroup = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   column-gap: var(--spacing-xs);
//   row-gap: 0;
//   padding-bottom: var(--spacing-xs);
//   font-size: var(--font-xs);
//   label {
//     font-weight: ${theme.fontWeight.light};
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// const SideBySideWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   gap: var(--spacing-s);

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     flex-direction: column;
//     gap: 0;
//   }
// `;

// const StyledLink = styled(Link)`
//   font-weight: ${theme.fontWeight.bold};
//   color: ${theme.color.green};
//   padding: 0 0.4rem;

//   &:hover {
//     color: ${theme.color.beige};
//   }
// `;

// const StyledSuccessMessage = styled.div`
//   flex-basis: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   padding: var(--spacing-xxxl) var(--side-padding);
//   color: ${theme.color.green};

//   p {
//     font-size: var(--font-m);
//     margin-bottom: var(--spacing-l);
//   }
// `;

// /* ---- Select + Pronouns Split ---- */

// const StyledSelect = styled.select`
//   display: block;
//   box-sizing: border-box;
//   width: 100%;
//   margin-bottom: var(--spacing-xs);
//   height: calc(1.063 * var(--spacing-m));
//   padding: 0 var(--spacing-xs);
//   color: ${theme.color.beige};
//   background-color: ${theme.color.dark};
//   border: 1px solid ${theme.color.green};
//   border-radius: calc(0.5 * ${theme.borderRadius});

//   @media (max-width: ${theme.breakpoints.tablet}) {
//     height: calc(2.4 * var(--spacing-m));
//   }

//   /* Pfeil */
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   background-repeat: no-repeat;
//   background-position: right 10px center;
//   background-size: 1rem;
//   background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.green.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");

//   &:focus {
//     outline: none;
//     background-color: ${theme.color.green};
//     color: ${theme.color.dark};
//     border-color: ${theme.color.green};
//     background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><polyline points='5 7 10 12 15 7' fill='none' stroke='${theme.color.dark.replace("#", "%23")}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
//   }

//   & option {
//     color: ${theme.color.dark};
//     background: ${theme.color.beige};
//   }

//   /* legacy IE/Edge */
//   &::-ms-expand {
//     display: none;
//   }
// `;

// const PronounRow = styled.div`
//   display: flex;
//   gap: var(--spacing-s);

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     flex-direction: column;
//     gap: 0;
//   }
// `;

// const PronounCol = styled.div`
//   flex: 1 1 50%;
//   min-width: 0;

//   & > label {
//     display: block;
//     margin-bottom: calc(0.5 * var(--spacing-xs));
//   }
// `;

// const PronounLabel = styled.label`
//   font-weight: ${theme.fontWeight.bold};
//   letter-spacing: 0.035rem;
// `;
