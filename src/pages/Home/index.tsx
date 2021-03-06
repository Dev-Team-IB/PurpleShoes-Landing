import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import AboutContent2 from "../../content/AboutContent2.json";
import AboutServiceContent from "../../content/AboutServiceContent.json";
import ContributerContent from "../../content/ContributorContent.json";
import AboutImageContent from "../../content/AboutImageContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ShoesUserContent from "../../content/ShoesUserContent.json";
import ShoesManagerContent from "../../content/ShoesManagerContent.json";
import { ContentBlockProps } from "../../components/ContentBlock/types";
import ImageMiddleBlock, {
  ImageMiddleCenterBlock,
} from "../../components/ImageMiddleBlock";
import { ImageIcon } from "../../common/Icon";
import ProfileBlock from "../../components/ProfileBlock";

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
        icon="Main1.png"
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
        icon="About1.jpg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={AboutContent2.title}
        content={AboutContent2.text}
        icon="About2.jpg"
        id="about"
      />
      <MiddleBlock
        title={AboutServiceContent.title}
        style={{ paddingBottom: "0px" }}
      />
      <ImageMiddleCenterBlock icon="Service1.png" />

      <ContentBlock
        type="right"
        title={ShoesUserContent.title}
        content={ShoesUserContent.text}
        button={ShoesUserContent.button}
        icon="owner1.jpg"
        id="user"
      />
      <ContentBlock
        type="left"
        title={ShoesManagerContent.title}
        content={ShoesManagerContent.text}
        button={ShoesManagerContent.button}
        icon="manager1.jpg"
        id="manager"
      />
      <MiddleBlock
        title={ContributerContent.title}
        style={{ paddingBottom: "0px" }}
      />
      <ProfileBlock images={ContributerContent.person} />
    </Container>
  );
};

export default Home;
