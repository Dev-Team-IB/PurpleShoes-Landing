import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ImageIcon, SvgIcon } from "../../../common/Icon";
import { ContentBlockProps } from "../types";
import { Button } from "../../../common/Button";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import Titles from "../../Addons/Titles";
import { ButtonWrapper } from "../RightContentBlock/styles";
import ChannelService from "../../../ChannelTalk/ChannelService";

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
  button,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImageIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <Titles text={t(title)} type={"h3"} margin={0} />
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
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
