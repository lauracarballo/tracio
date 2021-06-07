import styled from "styled-components";
import { Button } from "../components/Button";
import NextHead from "../components/Head";
import NavBar from "../components/NavBar";
import { GlobalStyle } from "../utils";

export default function Home() {
  return (
    <div>
      <NextHead />
      <PageWrapper>
        <NavBar />
        <Hero>
          <h1>Simple and privacy-friendly analytics</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button>Live Demo</Button>
        </Hero>

        <footer></footer>
      </PageWrapper>
      <GlobalStyle />
    </div>
  );
}

const PageWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 10px;
`;

const Hero = styled.main`
  padding: 30px 0;
`;
