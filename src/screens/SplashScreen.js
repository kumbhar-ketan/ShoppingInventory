import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(res => {
        const user = JSON.parse(res);
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('Login');
        }
      })
      .catch(e => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default SplashScreen;
