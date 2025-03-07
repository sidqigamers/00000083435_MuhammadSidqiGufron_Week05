import React from "react";
import { View, Text, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Profile;
