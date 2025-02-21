import React from "react";
import { StyleSheet, View } from "react-native";
import Pert3_lat1 from "./Lab_Week03";


export default function App() {
  return (
    <View style={styles.container}>
      <Pert3_lat1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
