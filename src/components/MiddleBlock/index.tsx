import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Titles from "../Addons/Titles";

interface MiddleBlockProps {
  title: string;
  content?: string;
  button?: string;
  t: any;
  redirection?: string;
}

const MiddleBlock = ({
  title,
  content,
  button,
  t,
  redirection,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Titles text={t(title)} type="h1" margin={0} />
              <Content>{t(content)}</Content>
              {button && (
                <Button
                  name="submit"
                  onClick={() => {
                    redirection && (window.location.href = redirection);
                  }}
                >
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
