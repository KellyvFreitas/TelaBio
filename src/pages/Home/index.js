import React, { useState } from "react";
import Player from "../../components/PlayerLottie";
import Social from "../../components/Social";
import Image from "../../components/Image";

import { Container, Title, Button, HeaderIntro, HeaderPlayer } from "./styled";

export default () => {
  return (
    <Container>
      <HeaderIntro>
        <Image />
        <Title>Fernanda Santana 🚀</Title>

        <Button>Parcerias</Button>
        <Button>Blog</Button>
        <Button>Publis, ensaios, divulgações</Button>

        <Social />
      </HeaderIntro>
      <HeaderPlayer>
        <Player />
      </HeaderPlayer>
    </Container>
  );
};
