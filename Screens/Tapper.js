import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import { colors } from "../constants/color";
import * as Speech from "expo-speech";

const Tapper = (props) => {
  const [tapped, setTapped] = useState(0);
  const { title = "Tap This" } = props;

  return (
    <Pressable style={styles.container} onPress={() => setTapped(1)}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{tapped}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.black,
  },
  text: {
    fontSize: 30,
    color: colors.white,
  },
});

export default Tapper;
