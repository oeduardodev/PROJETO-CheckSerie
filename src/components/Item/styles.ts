import { StyleSheet } from "react-native";
import { style } from "../Button/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  desciption: {
    flex: 1,
    fontSize: 14,
    color: "#cececeff",
    fontStyle: "italic",
    fontWeight: 300,
  },
});
