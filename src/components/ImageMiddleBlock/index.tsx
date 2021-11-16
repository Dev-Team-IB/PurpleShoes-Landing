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

const ImageMiddleBlock = ({ images }: ImageMiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {images.forEach( (e) => <ImageIcon src={e.path} width={e.width} height={e.height} /> }
            </Col>
          </ContentWrapper>
        </Row>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {images.forEach((e, i) => {
                if (!(i % 2))
                  return (
                    <ImageIcon src={e.path} width={e.width} height={e.height} />
                  );
              })}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ImageMiddleBlock);
