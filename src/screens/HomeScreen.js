import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello To App</Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: 'green',
            height: 40,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.pop();
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;
