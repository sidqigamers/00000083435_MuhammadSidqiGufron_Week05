import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Navigation List</Text>
      <Button title="Email" onPress={() => navigation.navigate("Email")} />
    </View>
  );
};

export default HomeScreen;
