import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png'

export default function Start({ navigation }) {

    async function handleSubmit() {
        navigation.navigate('Game');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={styles.center}>

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Começar o Jogo</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    center: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});