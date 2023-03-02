import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container } from "./styled";

export default () => {
  return (
    <Container>
      <Player
        className="player"
        loop
        autoplay
        src="https://assets3.lottiefiles.com/packages/lf20_saysspa8.json"
        style={{ height: "500px", width: "500px" }}
      />
    </Container>
  );
};
