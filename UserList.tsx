import React from "react";
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import userData from "./data.json";

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((users) => {
        return (
          <TouchableOpacity key={users.name}>
            <View style={styles.container}>
              <View style={styles.card}>
                <Image
                  source={getImageSource(users.photo_url)}
                  style={styles.avatar}
                />
                <View style={styles.description}>
                  <Text style={styles.boldText}>{users.name}</Text>
                  <Text>{users.email}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const getImageSource = (photo) => {
  switch (photo) {
    case './assets/alucard.jpg':
      return require('./assets/alucard.jpg');
    case './assets/corleone.jpg':
      return require('./assets/corleone.jpg');
    case './assets/Sepi.jpg':
      return require('./assets/Sepi.jpg');
    default:
      return require('./assets/icon.png');
  }
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 325,
    gap: 8,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  boldText: {
    fontWeight: "bold",
  },
  description: {
    display: "flex",
    gap: 2,
  },
});

export { UserList };
