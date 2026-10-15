import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PantaPerfil: React.FC = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require("C:\Users\salom\OneDrive\Documentos\AplicacionesMoviles5C\invernadero\.expo\assets")} style={styles.profileIcon} />
        <Text style={styles.userName}>David Smith</Text>
        <Text style={styles.userLocation}>Huejutla de Reyes, Hidalgo</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} placeholder="David" />
        
        <Text style={styles.label}>Apellido</Text>
        <TextInput style={styles.input} placeholder="Smith" />
        
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput style={styles.input} placeholder="davidsmith@pro" keyboardType="email-address" />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#4CAF50",
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
  },
  userName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  userLocation: {
    color: "white",
    fontSize: 16,
  },
  formContainer: {
    width: "90%",
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PantaPerfil;
