import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import AboutContent2 from "../../content/AboutContent2.json";
import AboutServiceContent from "../../content/AboutServiceContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ShoesUserContent from "../../content/ShoesUserContent.json";
import { ContentBlockProps } from "../../components/ContentBlock/types";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        redirection={MiddleBlockContent.redirection}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={AboutContent2.title}
        content={AboutContent2.text}
        icon="graphs.svg"
        id="about"
      />
      <MiddleBlock title={AboutServiceContent.title} />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={ShoesUserContent.title}
        content={ShoesUserContent.text}
        button={ShoesUserContent.button}
        icon="developer.svg"
        id="ShoesUser"
      />
    </Container>
  );
};

export default Home;
