import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Titles from "../Addons/Titles";
import { ImageIcon } from "../../common/Icon";
import React from "react";

interface ImageProps {
  path: string;
  width: string;
  height: string;
}

interface ImageMiddleBlockProps {
  t: any;
  images: ImageProps[];
}
/*
const ImageFilter: any = ({
  images,
  oddEven,
}: {
  images: ImageProps[];
  oddEven: boolean;
}) => {
  let arr: any[] = [];
  if (oddEven) {
    images.map((e, i) => {
      !(i % 2) &&
        arr.push(<ImageIcon src={e.path} width={e.width} height={e.height} />);
    });
  } else {
    images.map((e, i) => {
      i % 2 &&
        arr.push(<ImageIcon src={e.path} width={e.width} height={e.height} />);
    });
  }
  return arr;
};
*/
const ImageMiddleBlock = ({ images }: ImageMiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <ImageIcon src={""} width={""} height={""} />
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export const ImageMiddleCenterBlock = ({ icon }: { icon: string }) => {
  return (
    <MiddleBlockSection style={{ paddingTop: "0px" }}>
      <Slide direction="up">
        <ImageIcon src={icon} width={"100%"} height={"100%"} />
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ImageMiddleBlock);
