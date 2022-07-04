import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

/*
  --- FlexBox ---
  flex
  flexDirection
  justifyContent
  alignItems
*/

const LoginScreen = () => {
  const navigation = useNavigation();
  const [usename, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    navigation.push('Home');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          onChangeText={value => setUsername(value)}
          value={usename}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  loginText: {
    fontWeight: '800',
    color: '#0055',
    fontSize: 18,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: '100%',
    height: 40,
    marginTop: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#42b3f5',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default LoginScreen;
