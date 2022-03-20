import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../constants/color";
import * as Speech from "expo-speech";

const Home = (props) => {
  
  const pressHandler = () => {
    const TTS = "This app is built for blind people";
    Speech.isSpeakingAsync().then((speaking) => {
      if (!speaking) {
        Speech.speak(TTS, {
          onDone: () => props.navigation.navigate("Tapper"),
        });
      }
    });
  };

  return (
    <Pressable style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>Home Screen</Text>
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
