
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import OnboardingScreen from './screen/Onboarding';
import Login from './screen/Login'
import Signin from './screen/SignUp'
import HomeScreen from './screen/HomeScreen';
import devise from './screen/devise';
import Panier from './screen/Panier';

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
        
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Signin" component={Signin} options={{headerShown: false}}/>
        <Stack.Screen name= "Home" component={HomeScreen} />
        <Stack.Screen name= "devise" component={devise} />
        <Stack.Screen name= "Panier" component={Panier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
