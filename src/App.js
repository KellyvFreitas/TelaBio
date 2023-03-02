import React from "react";
import Home from "./pages/Home";
import { Container, Menu, PageBody } from "./AppStyled";

export default () => {
  return (
    <Container>
      <Menu></Menu>
      <PageBody>
        <Home />
      </PageBody>
    </Container>
  );
};
