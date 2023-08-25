import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';

import Home from './Home';
import SignIn from './signIn'
import ErrorScanner from './ErrorScanner'
import SignUp from './Signup'
import Services from './Services'
import Store from './Store'
import Account from './Account'
import FiXMe from './FiXMe'
import { useNavigation } from '@react-navigation/native';

const NavFooter = () => {
    const navigation = useNavigation();
  return (
    <View style ={styles.menuFooter}>
          <TouchableOpacity onPress={()=> navigation.navigate(Home)} title= ''>
            <View style={styles.menuFooterItem} >
                <Image source={require('../assets/ICONS/homeB.png')} style= {{width: 30, height: 30,}}/>
                <Text style={{color: '#fff'}}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate(Account)} title= ''>
            <View style={styles.menuFooterItem} >
              <Image source={require('../assets/ICONS/user.png')} style= {{width: 30, height: 30,}}/>
                <Text style={{color: '#fff'}}>Account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate(Store)} title= ''>
            <View style={styles.menuFooterItem} >
              <Image source={require('../assets/ICONS/cart.png')} style= {{width: 30, height: 30,}}/>
                <Text style={{color: '#fff'}}>Store</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate(FiXMe)} title= ''>
          <View style={styles.menuFooterItem} >
            <Image source={require('../assets/ICONS/laptop-alt.png')} style= {{width: 30, height: 30,}}/>
              <Text style={{color: '#fff'}}>Fix Me</Text>
            </View>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    menuFooter:{
        width: '100%',
        height: 60,
        backgroundColor: '#181F20',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:20,
        marginBottom: 0,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#000'
      },
      menuFooterItem:{
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    
      }
})
export default NavFooter;
