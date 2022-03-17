
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./constants/color";
import Navigator from "./routes/homeStack";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
