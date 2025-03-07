import React from "react";
import { View, Text, Button } from "react-native";

const Email = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email List Pages</Text>
      <Button title="Pindah ke Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Email;
