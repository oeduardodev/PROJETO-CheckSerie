import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e0e0ff",
    paddingTop: 62,
    marginBottom: 24,
  },

  logo: {
    height: 34,
    width: 134,
  },

  TextClearButton: {
    color: "#b7b7b7ff",
    fontWeight: 600,
    fontSize: 12,
  },

  form: {
    padding: 24,
    paddingHorizontal: 16,
    marginTop: 32,
    gap: 7,
    width: "100%",
  },

  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#131313ff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 24,
    paddingTop: 32,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#373737ff",
    paddingBottom: 12,
  },

  clearButton: {
    marginLeft: "auto",
    backgroundColor: "#2e2e2eff",
    padding: 5,
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#667a9584",
    marginVertical: 16,
  },

  listContent: {
    paddingTop: 28,
    paddingBottom: 22,
  },

  empty: {
    fontSize: 14,
    color: "#667a9584",
    alignItems: "center",
  },
});
