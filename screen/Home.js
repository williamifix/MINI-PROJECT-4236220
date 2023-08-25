import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

import SignIn from './signIn'
import ErrorScanner from './ErrorScanner'
import SignUp from './Signup'
import Services from './Services'
import Store from './Store'
import Account from './Account'
import FiXMe from './FiXMe'
import NavFooter from './navFooter'

const Home=({navigation})=> {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <ImageBackground source={require('../assets/img/background.png')} style={styles.homebackground}>
      <Button onPress={()=> navigation.navigate(SignIn)} title = 'Sign in' color={'#1BCDCD'}/>
      <Button onPress={()=> navigation.navigate(ErrorScanner)} title = 'Scan Error' color={'#1BCDCD'}/>
      <Button onPress={()=> navigation.navigate(SignUp)} title = 'sign up' color={'#1BCDCD'}/>
      <Button onPress={()=> navigation.navigate(Services)} title = 'Our services' color={'#1BCDCD'}/>
      <Button onPress={()=> navigation.navigate(Store)} title = 'Store'/>
      <Button onPress={()=> navigation.navigate(Account)} title = 'Account'/>

    <NavFooter/>

     </ImageBackground>
    </View>
  )
}
Home.navigationOptions= {
  title: 'House'
}
const styles = StyleSheet.create({
    homebackground:{
      flex: 1,
      width: '100%', 
      height: '100%',

    }
})
export default Home