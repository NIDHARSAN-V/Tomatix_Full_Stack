import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setLoading(true);
    const updatedChatHistory = [...chatHistory, { from: 'user', message: input }];
    setChatHistory(updatedChatHistory);

    try {
      const response = await fetch('https://tomatix-backend-1.onrender.com/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatHistory: updatedChatHistory }),
      });

      const data = await response.json();
      const botMessage = data.response;

      setChatHistory([...updatedChatHistory, { from: 'bot', message: botMessage }]);
      setInput('');
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((chat, index) => (
          <View key={index} style={chat.from === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{chat.message}</Text>
          </View>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={input}
        onChangeText={(text) => setInput(text)}
      />

      <Button title={loading ? 'Sending...' : 'Send'} onPress={sendMessage} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 100,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1f5d3',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Chatbot;
