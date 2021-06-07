import styled from "styled-components";
import { Button } from "../components/Button";
import NextHead from "../components/Head";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import { GlobalStyle } from "../utils";

export default function Home() {
  return (
    <div>
      <NextHead />
      <PageWrapper>
        <NavBar />
        <Main>
          <section id="hero">
            <h1>Simple and privacy-friendly analytics</h1>
            <TextWrapper>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </TextWrapper>
            <Button>Live Demo</Button>
          </section>

          <Section
            subtitle="Check it out"
            mainTitle="See Tracio in action"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam"
          >
            <Image src="/chart.svg" alt="" />
          </Section>

          <SectionWrapper>
            <Section
              subtitle="Features"
              mainTitle="All the things you can do"
              isUnderlined
            >
              <Grid>
                <div>Lorem Ipsum </div>
                <div>Lorem Ipsum dolor sit amet</div>
                <div>Lorem Ipsum dolor sit amet</div>
                <div>Lorem Ipsum dolor sit amet</div>
                <div>Lorem Ipsum</div>
                <div>Lorem Ipsum dolor sit amet</div>
                <div>Lorem Ipsum dolor sit amet</div>
                <div>dolor sit amet</div>
                <div>Lorem Ipsum</div>
              </Grid>
            </Section>
          </SectionWrapper>
        </Main>

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

const Main = styled.main`
  padding: 30px 0;
`;

const SectionWrapper = styled.div`
  padding-top: 350px;
`;

const TextWrapper = styled.div`
  max-width: 600px;
`;

const Image = styled.img`
  position: absolute;
  top: 340px;
`;

const Grid = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  padding: 50px 0;
`;
