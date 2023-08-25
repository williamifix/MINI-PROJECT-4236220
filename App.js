import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screen/Home';
import SignInScreen from './screen/signIn';
import ErrorScannerScreen from './screen/ErrorScanner';
import SignUpScreen from './screen/Signup'
import ServicesScreen from './screen/Services';
import StoreScreen from './screen/Store';
import AccountScreen from './screen/Account'
import FiXMeScreen from './screen/FiXMe';
import NavFooter from './screen/navFooter';
import HelpScreen from './screen/Help';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NavFooter/>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: 'iFiX - HOME'
        }}
        
        />

        <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{
          title: 'iFiX - SIGN IN',
         
        }}
        />


        <Stack.Screen 
        name="ErrorScanner" 
        component={ErrorScannerScreen} 
        options={{
          title: 'iFiX - ERROR SCANNER'
        }}/>


        <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{
          title: 'iFiX - REGISTER'
        }}/>


        <Stack.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{
          title: 'iFiX - SERVICES'
        }}/>


        <Stack.Screen 
        name="Store" 
        component={StoreScreen} 
        options={{
          title: 'iFiX - STORE'
        }}
        />
        <Stack.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          title: 'iFiX - USER ACCOUNT'
        }}/>

        <Stack.Screen 
        name="FiXMe" 
        component={FiXMeScreen} 
        options={{
          title: 'iFiX - FIXME'
        }}/>

        <Stack.Screen 
        name="Help" 
        component={HelpScreen} 
        options={{
          title: 'iFiX - USER HELP'
        }}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App