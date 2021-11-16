import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Titles from "../Addons/Titles";
import { ImageIcon } from "../../common/Icon";
import React from "react";

interface ProfileProps {
  name: string;
  description: string;
  image: string;
}

interface ProfileBlockProps {
  t: any;
  images: ProfileProps[];
}

const ProfileBlock = ({ images, t }: ProfileBlockProps) => {
  return (
    <MiddleBlockSection style={{ padding: "0px" }}>
      <Slide direction="up">
        <Row justify="space-between" align="top">
          {images.map(({ name, description, image }) => (
            <Col lg={5} md={5} sm={11} xs={11}>
              <ImageIcon
                src={image}
                width={"100%"}
                height={"100%"}
                style={{ marginBottom: "30px" }}
              />
              <Titles text={name} type={"h4"} margin={0} />
              <Content>{description}</Content>
            </Col>
          ))}
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(ProfileBlock);
