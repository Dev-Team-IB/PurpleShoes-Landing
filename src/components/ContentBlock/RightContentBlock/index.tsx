import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ImageIcon, SvgIcon } from "../../../common/Icon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import Titles from "../../Addons/Titles";
import { JSXElement } from "@babel/types";
import ChannelService from "../../../ChannelTalk/ChannelService";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
  redirection,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <Titles text={t(title)} type={"h3"} />
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => {
                          if (item.redirection === "ChannelTalk") {
                            ChannelService.lounge();
                          } else {
                            item.redirection
                              ? (window.location.href = item.redirection)
                              : scrollTo("about");
                          }
                        }}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImageIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
