import styled from "styled-components";
import serviceImage from "./images/managerservice.png";
import ChannelService from "./ChannelService";

ChannelService.boot({
  pluginKey: process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN,
});

const ManagerService = () => {
  window.scrollTo(0, 0);
  const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;
  const Main = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${serviceImage});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    position: relative;
    max-width: 555px;
    width: 100%;
    height: 2296px;
    margin: 0 auto;
  `;
  return (
    <Container>
      <Main></Main>
    </Container>
  );
};

export default ManagerService;
