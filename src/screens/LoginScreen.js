import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {login} from '../services';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
  --- FlexBox ---
  flex
  flexDirection
  justifyContent
  alignItems
*/

const LoginScreen = () => {
  const navigation = useNavigation();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    login({username, password})
      .then(res => {
        AsyncStorage.setItem('user', JSON.stringify(res));
        navigation.replace('Home');
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          ref={usernameRef}
          style={styles.input}
          placeholder="Enter username"
          onChangeText={value => setUsername(value)}
          value={username}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <TextInput
          ref={passwordRef}
          style={styles.input}
          placeholder="Enter password"
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry
          returnKeyType="done"
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
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#42b3f5',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default LoginScreen;
