import React from "react";
import { Button, Text, View, Image, ImageBackground} from "react-native";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Box = styled.Button`
  background-color: #555;
  text-align: center;
  color: blue;
  font-weight: 600;
  flex:1;
  width: 150%;
  height: 300px;

`;
const Logo = styled.Image`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>Home</Text>
      <Box
          title="Go to drink water"
          onPress={() => navigation.navigate("DrinkWaterHome")}
        >
         
      </Box>
      <ImageBackground resizeMode="contain"
            style={{width:"100%", height:"100%"}}
            source={require("../assets/water.jpeg")}>
            <Text>test</Text>
      </ImageBackground>
    </Container>
  );
}
