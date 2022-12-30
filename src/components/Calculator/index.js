import React from "react";
import { Container, Current, Previous, Screen } from "./Styled";

export default function Calculator() {
  return (
    <Container>
      <Screen>
        <Previous>10</Previous>
        <Current>5</Current>
      </Screen>
    </Container>
  );
}
