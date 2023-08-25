import { StyleSheet, Text, View, Image,TouchableOpacity, Button } from 'react-native'
import React from 'react'


import SignIn from './signIn'
import ErrorScanner from './ErrorScanner'
import SignUp from './Signup'
import Services from './Services'
import Store from './Store'
import FiXMe from './FiXMe'
import Home from './Home'
import NavFooter from './navFooter'


export default function Account({navigation}) {
  return (
    <View style={styles.container}>
        <View style= {styles.accountHeader}>
          <Text style={{fontSize: 20, color: '#fff', textAlign: 'left',marginTop: 5,}}>Account</Text>

          <TouchableOpacity onPress={()=> navigation.navigate(SignIn)} style={styles.loginButton}>
          <Button title={'Login'} color={'#1BCDCD'} onPress={()=> navigation.navigate(SignIn)}/>
           
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#fff', textAlign: 'left',marginTop: 5, position: 'absolute', margin: 20, bottom: 15}}>Welcome</Text>
        <Text style={{fontSize: 13, color: '#1BCDCD', textAlign: 'left',marginTop: 5, position: 'absolute', marginHorizontal: 20, bottom: 10}}>Explore your Account and Experience History</Text>
        </View>  

      <View style={styles.accountFeatures}>
          <View style={styles.featureItem}>
            <Image source={require('../assets/ICONS/laptop-alt.png')} style={styles.icon}/>
            <Text style= {styles.featureTitle}>MY COMPUTERS</Text>
            <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>
          </View>


          <View style={styles.featureItem}>
              <Image source={require('../assets/ICONS/cart.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}> MY CART</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </View>

      {/* 
          <View style={styles.featureItem}>
              <Image source={require('../assets/ICONS/eye-open.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}> RECENTLY VIEWED</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>
          </View> */}


          <View style={styles.featureItem}>
              <Image source={require('../assets/ICONS/repair.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}>MY REPAIRS</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </View>


          <View style={styles.featureItem}>
              <Image source={require('../assets/ICONS/ui-settings.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}>SETTINGS</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </View>
      </View>
<NavFooter/>
    </View>
  
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#181F20',


    },

    accountHeader: {
        backgroundColor: '#181F20',
        height: 140,
        width: '100%',
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    loginButton:{
        width: 100,
        height: 35,
        color: '#1BCDCD',
        borderRadius: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#fff'
       
    },

    accountFeatures: {
      width: '100%',
      paddingTop: 10,
      justifyContent: 'center',
      alignItems:'center',
      color: '#000',
     
      

    },
    featureItem: {
      backgroundColor: '#1BCDCD',
      width: '100%',
      height: 60,
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
      paddingLeft: 20,
      elevation: 5
      
   

    },

    icon: {
        width: 30,
        height: 30,
        marginRight: 15,
    },

    featureTitle: {
      color: '#000',
      flex: 1,
      fontWeight: 'bold'
    }

})