import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Welcome to the General Store</Text>
    <Button title="Login" onPress={() => navigation.navigate('Login')} />
  </View>
);

const LoginScreen = ({ navigation }) => {
  const signInWithPhoneNumber = async () => {
    const confirmation = await auth().signInWithPhoneNumber('+919876543210');
    console.log(confirmation);
  };

  return (
    <View>
      <Text>Login with Phone Number</Text>
      <Button title="Send OTP" onPress={signInWithPhoneNumber} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
