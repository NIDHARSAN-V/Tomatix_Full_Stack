import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ChatAnswer = ({ answer_text }) => {
    
    
    return (
        <View style={styles.container}>
            <Image
                source={require('./tomatix-chatbot-removebg-preview.png')}
                style={styles.image}
            />
            <Text style={styles.answer}>{answer_text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
    },
    image: {
        width: 30,
        height: 40,
        resizeMode: 'contain',
        marginRight: 10,
    },
    answer: {
        borderRadius: 10,
        backgroundColor: '#FFF',
        padding: 10,
        shadowColor: 'gray',
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.3, 
        shadowRadius: 5,
        fontSize: 16, 
        maxWidth: '80%', 
    },
});

export { ChatAnswer };
