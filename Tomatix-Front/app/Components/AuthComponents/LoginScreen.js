// import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const userdata = {
        email,
        password,
    };

    const handleSubmit = async () => {
        console.log(userdata);

        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post("http://192.168.72.253:5501/user/login", userdata);
            console.log(res.data.message);
            if (res.data.success) {
                console.log("User : ",res.data.user);
                console.log(res.data.tok);
                navigation.push("Tabbb"); 
                
            } else {
                Alert.alert("Error", res.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            Alert.alert("Error", "An error occurred during login.");
        }
    };

    return (
        <View style={styles.outerdiv}>
            <View style={styles.loginForm}>
                <Text style={styles.titleText}>Login</Text>
                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail} // Directly setting state
                    />
                </View>
                <View style={styles.field}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

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
    loginButton: {
        backgroundColor: '#4caf50',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
