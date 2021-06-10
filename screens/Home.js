import React from "react";
import { Button, Text, View } from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>Home</Text>
      <Button
        title="Go to drink water"
        onPress={() => navigation.navigate("DrinkWaterHome")}
      />
    </Container>
  );
}
