import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LoginScreen = () => {
  const handleLogin = () => {
    // TODO: Implement login logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.title}>Seyahatinizi planlamaya başlamak için oturum açın.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Google ile devam et" onPress={() => {}} color="#FF5722" />
        <Button title="Email ile devam et" onPress={handleLogin} color="#FF5722" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    height: '30%',
    width: '100%',
    backgroundColor: '#FF5722',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default LoginScreen;
