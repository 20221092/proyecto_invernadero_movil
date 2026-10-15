import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Acelga Ruby Red - Sobre de 1 LB', price: '$380.00', image: require('.expo/assets/invernadero.jpg') },
  { id: '2', name: 'Tomatillo Cáscara - Libra', price: '$1,800.00', image: require('.expo/assets/temu.png') },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/user.jpg')} style={styles.logo} />
        <TextInput placeholder="Buscar..." style={styles.searchBar} />
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <MaterialIcons name="menu" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {/* Menú Desplegable */}
      {menuOpen && (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('PantallaPerfil')}>

            <Text style={styles.menuItem}>Perfil</Text>
          </TouchableOpacity>
          
            <TouchableOpacity onPress={() => navigation.navigate('Contactospantalla')}>
            <Text style={styles.menuItem}>Contacto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.menuItem}>Quiénes somos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Politicas')}>
            <Text style={styles.menuItem}>Políticas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
            <Text style={styles.menuItem}>FAQ</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Lista de productos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4CAF50',
    padding: 15,
  },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 10,
  },
  menu: {
    backgroundColor: '#FFF',
    padding: 10,
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productCard: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  productImage: { width: 100, height: 100, resizeMode: 'contain' },
  productName: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  productPrice: { fontSize: 14, color: '#4CAF50', marginTop: 5 },
});
