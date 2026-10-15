import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

const Registro = () => {
    const navigation = useNavigation();
    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sexo, setSexo] = useState('');
    const [edad, setEdad] = useState('');
    const [preguntaRecuperacion, setPreguntaRecuperacion] = useState('');
    const [respuestaRecuperacion, setRespuestaRecuperacion] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const interrogantes = [
        '¿Nombre de tu mejor amigo?',
        '¿Color favorito?',
        '¿Equipo de fútbol?',
    ];

    const sexos = ['Masculino', 'Femenino', 'Otro'];

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleRegistro = async () => {
        try {
            // Validaciones
            if (!nombre || !apellidoP || !apellidoM || !telefono || !email || !password || !confirmPassword || !sexo || !edad || !preguntaRecuperacion || !respuestaRecuperacion) {
                Alert.alert('Error', 'Por favor, completa todos los campos');
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('Error', 'Las contraseñas no coinciden');
                return;
            }

            if (!aceptaTerminos) {
                Alert.alert('Error', 'Debes aceptar los términos y condiciones para continuar');
                return;
            }

            // Datos para enviar al servidor
            const data = {
                nombre,
                apellidoP,
                apellidoM,
                telefono,
                email,
                contraseña: password,
                sexo,
                edad: parseInt(edad, 10),
                pregunta_recuperacion: {
                    pre_id: interrogantes.indexOf(preguntaRecuperacion) + 1,
                    respuesta: respuestaRecuperacion,
                },
                rol: 'Cliente',
            };

            // Simulación de envío al servidor
            const response = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/singUp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result);

            if (response.ok) {
                Alert.alert('Éxito', 'Registro exitoso');
                navigation.navigate('Login'); // Redirigir al login después del registro
            } else {
                Alert.alert('Error', result.message || 'Error al registrar');
            }
        } catch (error) {
            console.error('Error al registrar:', error);
            Alert.alert('Error', 'Ocurrió un error al intentar registrarte. Por favor, intenta de nuevo.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Registro</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <Text style={styles.label}>Apellido Paterno</Text>
            <TextInput
                style={styles.input}
                placeholder="Apellido Paterno"
                value={apellidoP}
                onChangeText={setApellidoP}
            />

            <Text style={styles.label}>Apellido Materno</Text>
            <TextInput
                style={styles.input}
                placeholder="Apellido Materno"
                value={apellidoM}
                onChangeText={setApellidoM}
            />

            <Text style={styles.label}>Teléfono</Text>
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Contraseña"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                    <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Confirmar Contraseña</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirmar Contraseña"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={toggleShowConfirmPassword} style={styles.eyeIcon}>
                    <FontAwesome name={showConfirmPassword ? 'eye-slash' : 'eye'} size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Sexo</Text>
            <SelectDropdown
                data={sexos}
                defaultButtonText="Selecciona tu sexo"
                onSelect={(selectedItem) => setSexo(selectedItem)}
                buttonStyle={styles.dropdownButton}
            />

            <Text style={styles.label}>Edad</Text>
            <TextInput
                style={styles.input}
                placeholder="Edad"
                value={edad}
                onChangeText={setEdad}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Pregunta de recuperación</Text>
            <SelectDropdown
                data={interrogantes}
                defaultButtonText="Selecciona una pregunta"
                onSelect={(selectedItem) => setPreguntaRecuperacion(selectedItem)}
                buttonStyle={styles.dropdownButton}
            />

            <Text style={styles.label}>Respuesta de recuperación</Text>
            <TextInput
                style={styles.input}
                placeholder="Respuesta"
                value={respuestaRecuperacion}
                onChangeText={setRespuestaRecuperacion}
            />

            <View style={styles.termsContainer}>
                <TouchableOpacity onPress={() => setAceptaTerminos(!aceptaTerminos)}>
                    <FontAwesome name={aceptaTerminos ? 'check-square' : 'square-o'} size={24} color="#4CAF50" />
                </TouchableOpacity>
                <Text style={styles.termsText}>Acepto los términos y condiciones</Text>
            </View>

            <TouchableOpacity onPress={handleRegistro} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Registrarse</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    passwordInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    eyeIcon: {
        marginLeft: 10,
    },
    dropdownButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    termsText: {
        marginLeft: 10,
    },
    registerButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Registro;