import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        try {
            // Validaciones básicas
            if (!email.trim() || !password.trim()) {
                Alert.alert('Error', 'Por favor, completa todos los campos');
                return;
            }

            if (!validarEmail(email)) {
                Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido');
                return;
            }

            // Datos para enviar al servidor
            const datos = {
                email,
                password,
            };

            // Simulación de envío al servidor
            const response = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/singIn/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });

            const resultado = await response.json();

            if (response.ok) {
                // Si el inicio de sesión es exitoso, navegar a la pantalla Home
                navigation.navigate('Home', { userEmail: email });
            } else {
                // Si hay un error, mostrar un mensaje
                Alert.alert('Error', resultado.message || 'Correo o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo.');
        }
    };

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
                Iniciar sesión
            </Text>

            <Text style={{ fontSize: 16, marginBottom: 5 }}>Correo electrónico</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginBottom: 15,
                }}
                placeholder="Ingresa tu correo electrónico"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={{ fontSize: 16, marginBottom: 5 }}>Contraseña</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <TextInput
                    style={{
                        flex: 1,
                        height: 40,
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingHorizontal: 10,
                    }}
                    placeholder="Ingresa tu contraseña"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={toggleShowPassword} style={{ marginLeft: 10 }}>
                    <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleLogin}
                style={{
                    backgroundColor: '#4CAF50',
                    padding: 15,
                    borderRadius: 5,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: '#fff', fontSize: 16 }}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={{ marginTop: 15 }}>
                <Text style={{ color: '#4CAF50', textAlign: 'center' }}>¿No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;