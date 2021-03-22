import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Open</Text>
      </TouchableOpacity>
      <MyWebComponent />
    </View>
  );
}

class MyWebComponent extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <WebView
          originWhitelist={["*"]}
          source={{ uri: "http://be0e0b752dba.ngrok.io" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
