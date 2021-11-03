import { Link } from "react-router-dom";
import styled from "styled-components";
import mainimg from "./images/main.png";
import btn1Img from "./images/buttons/btn1.png";
import btn2Img from "./images/buttons/btn2.png";
import btn3Img from "./images/buttons/btn3.png";
import btn4Img from "./images/buttons/btn4.png";
import "./css/landingStyles.css";
import ChannelService from "./ChannelService";

ChannelService.boot({
  "pluginKey": process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN
});

const Landing = () => {
  const Main = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${mainimg});
    background-repeat: no-repeat;
    background-size: 100% auto;
    position: relative;
    max-width: 555px;
    width: 100%;
    height: 5099px;
    margin: 0 auto;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;
  return (
    <Container>
      <Main>
        <a href="https://smartstore.naver.com/purpleshoes?NaPm=ct%3Dkvdwpqn9%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dcf711f2c70daf3e5a3ec45a2936adf81c75f05c2">
          <img className="btn1" src={btn1Img} />
        </a>
        <Link to="/landinguser">
          <img className="btn2" src={btn2Img} />
        </Link>
        <Link to="/landingmanager">
          <img className="btn3" src={btn3Img} />
        </Link>
        <Link to="/brandstory">
          <img className="btn4" src={btn4Img} />
        </Link>
      </Main>
    </Container>
  );
};

export default Landing;
