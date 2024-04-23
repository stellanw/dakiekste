import Link from "next/link";
import styled from "styled-components";
import { IoLogoInstagram, IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLeftWrapper>
        <StyledIconWrapper>
          <svg
            width="36"
            height="16"
            viewBox="0 0 56 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.618 22.9866C17.5779 22.9872 17.5377 22.9875 17.4974 22.9875C13.36 22.9875 10.006 19.6335 10.006 15.4961C10.006 11.3587 13.36 8.00467 17.4974 8.00467C20.2203 8.00467 22.604 9.45747 23.9155 11.6302C23.2412 6.20152 18.6112 2 13 2C6.9248 2 2 6.92487 2 13C2 19.0751 6.9248 24 13 24C14.6493 24 16.2139 23.637 17.618 22.9866ZM26 13C26 5.8203 20.1797 0 13 0C5.82031 0 0 5.8203 0 13C0 20.1797 5.82019 26 13 26C20.1797 26 26 20.1797 26 13ZM43 2C48.6112 2 53.2412 6.20152 53.9155 11.6302C52.604 9.45747 50.2203 8.00467 47.4974 8.00467C43.36 8.00467 40.006 11.3587 40.006 15.4961C40.006 19.6335 43.36 22.9875 47.4974 22.9875L47.5645 22.9872L47.618 22.9866C46.2139 23.637 44.6493 24 43 24C36.9248 24 32 19.0751 32 13C32 6.92487 36.9248 2 43 2ZM56 13C56 5.8203 50.1797 0 43 0C35.8203 0 30 5.8203 30 13C30 20.1797 35.8202 26 43 26C50.1797 26 56 20.1797 56 13Z"
              fill="#11A984"
            />
          </svg>
        </StyledIconWrapper>
        <div>
          <StyledLink href="mailto:info@dakiekste.com">
            info@dakiekste.com
          </StyledLink>
        </div>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledLink href="mailto:info@dakiekste.com">
          <IoMailOutline />
        </StyledLink>
        <StyledLink href="tel:+4917682472921">
          <IoCallOutline />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/dakiekste_/">
          <IoLogoInstagram />
        </StyledLink>
      </StyledRightWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 2rem;
  bottom: 0;
  flex-shrink: 0;
  width: 100%;
  font-size: 1.2rem;
  margin: 0;
  height: 14rem;
  background-color: #e9e8fb;
  color: #11a984;
`;

const StyledIconWrapper = styled.div`
  height: auto;
  width: 2rem;
`;

const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 1rem;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: #11a984;
  margin-bottom: -0.2rem;
`;
