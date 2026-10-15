import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Contactospantalla: React.FC = () => {
  return (
    <View style={styles.container}>
   
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require("../invernadero/assets/logo.jpeg")} style={styles.logo} />
        </View>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
          <TextInput placeholder="Buscar..." style={styles.searchInput} />
        </View>
        <Image source={require("../invernadero/assets/user.jpg")} style={styles.profileIcon} />
      </View>
      
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contacto</Text>
        <View style={styles.contactItem}>
          <MaterialIcons name="place" size={24} color="black" />
          <Text style={styles.contactText}>Calle Continuación Felipe Ángeles #58 - Local 2, Huejutla de Reyes, Hidalgo</Text>
        </View>
        <View style={styles.contactItem}>
          <MaterialIcons name="phone" size={24} color="black" />
          <Text style={styles.contactText}>+52 771229172</Text>
        </View>
        <View style={styles.contactItem}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={styles.contactText}>InvernaTech@gmail.com</Text>
        </View>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <MaterialIcons name="thumb-up" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="facebook" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="photo-camera" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF3E0" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20, 
    backgroundColor: "#4CAF50",
    borderBottomWidth: 2,
    borderColor: "#186BAD",
  },
  logoContainer: { flexDirection: "row", alignItems: "center", paddingTop: 10 },
  logo: { width: 40, height: 40, marginRight: 8 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 16,
    paddingTop: 10,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, paddingVertical: 8 },
  profileIcon: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: "white", paddingTop: 10 },
  contactContainer: { padding: 20 },
  contactTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007B55",
    textShadowColor: "#CCC",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  contactItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  contactText: { marginLeft: 10, fontSize: 16 },
  socialContainer: { flexDirection: "row", justifyContent: "flex-start", marginVertical: 20 },
});

export default Contactospantalla;
