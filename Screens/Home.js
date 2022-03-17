import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../constants/color";

const Home = (props) => {
  const pressHandler = () => {
    props.navigation.navigate("Tapper");
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        pressHandler();
      }}
    >
      <Text style={styles.text}>Output Sounds Here</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 30,
  },
});

export default Home;