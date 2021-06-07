import styled from "styled-components";

interface Props {
  subtitle: string;
  mainTitle: string;
  text?: string;
  children?: any;
  isUnderlined?: boolean;
}

export default function Section({
  subtitle,
  mainTitle,
  text,
  isUnderlined,
  children,
}: Props) {
  return (
    <Container>
      <SubHeader>{subtitle}</SubHeader>
      <TitleWrapper>
        <h2>{mainTitle}</h2>
        <Underline
          width="319"
          height="63"
          viewBox="0 0 319 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M318.275 6.05714C318.318 5.48354 317.869 4.99196 317.294 4.98241L17.776 0.012874C17.3194 0.00529827 16.9157 0.308 16.795 0.748418L0.626373 59.744C0.452637 60.3779 0.927185 61.0041 1.58441 61.0083L313.066 62.994C313.592 62.9974 314.031 62.5932 314.07 62.0689L318.275 6.05714Z"
            fill={isUnderlined ? "#6c63ff" : "none"}
          ></path>
        </Underline>
      </TitleWrapper>

      <TextWrapper>
        <p>{text}</p>
      </TextWrapper>
      {children}
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  place-items: center;
  padding: 100px 0;
  position: relative;
`;

const SubHeader = styled.p`
  text-transform: uppercase;
`;

const TextWrapper = styled.div`
  max-width: 600px;
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const Underline = styled.svg`
  position: absolute;
  top: 5px;
  left: -5px;
  z-index: -1;
  opacity: 0.4;
`;
