import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";
import { createContext } from "react";
import ChannelService from "../../ChannelTalk/ChannelService";

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
);

export default Container;
