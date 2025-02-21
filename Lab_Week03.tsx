import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert, StyleSheet } from "react-native";

const Pert3_lat1 = () => {
  const [angka, setAngka] = useState(0);
  const [inputNama, setInputNama] = useState("");
  const [finalNama, setFinalNama] = useState("Anonymous");
  const [finalUmur, setFinalUmur] = useState(18);

  const tambahAngka = () => {
    setAngka(angka + 1);
  };

  const kurangAngka = () => {
    setAngka(angka - 1);
  };

  const resetAngka = () => {
    setAngka(0);
  };

  const passValue = () => {
    setFinalNama(inputNama.trim() !== "" ? inputNama : "Anonymous");
    setFinalUmur(angka); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Halo nama ku, {finalNama}!, umurku {finalUmur} tahun
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        value={inputNama}
        onChangeText={setInputNama}
      />

      <View style={styles.buttonContainer}>
        <Button title="INCREMENT" onPress={tambahAngka} />
        <Button title="DECREMENT" onPress={kurangAngka} />
      </View>
      <Button title="PASS VALUE" onPress={passValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
});

export default Pert3_lat1;