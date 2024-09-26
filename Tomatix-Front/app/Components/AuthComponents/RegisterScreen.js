// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [section, setSection] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const userdata = {
        username,
        email,
        phone,
        section,
        password,
        confirmpassword,
    };

    const handleSubmit = async () => {
        console.log(userdata);
        try {
            const res = await axios.post('https://tomatix-backend-1.onrender.com/user/register', userdata); // Using your local IP
            console.log(res.data.message);
            if (res.data.success) {
                Alert.alert('Registration Successful');
                navigation.navigate('Login');
            } else {
                Alert.alert('Registration Failed', res.data.message);
            }
        } catch (error) {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                Alert.alert('Error', error.response.data.message || 'Something went wrong during registration.');
            } else if (error.request) {
                console.log('Error Request:', error.request);
                Alert.alert('Error', 'No response received from the server.');
            } else {
                console.log('Error:', error.message);
                Alert.alert('Error', 'Something went wrong.');
            }
        }
    };

    return (
        <View style={styles.outerdiv}>
            <View style={styles.loginForm}>
                <Text style={styles.titleText}>Register Here</Text>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        value={confirmpassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                </View>

                <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.linkContainer}>
                    <Text>Already a User?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.linkText}>Login now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    outerdiv: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loginForm: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    field: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
    },
    signUpButton: {
        backgroundColor: '#4caf50',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    linkText: {
        color: '#1e90ff',
        marginLeft: 5,
    },
});
