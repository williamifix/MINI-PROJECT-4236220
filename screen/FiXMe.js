import { StyleSheet, Text, View, Image,TouchableOpacity, Button, Touchable } from 'react-native'
import React from 'react'


import SignIn from './signIn'
import ErrorScanner from './ErrorScanner'
import SignUp from './Signup'
import Services from './Services'
import Store from './Store'
import Home from './Home'
import NavFooter from './navFooter'
import Help from './Help'


export default function FiXMe({navigation}) {
  return (
    <View style={styles.container}>
        <View style= {styles.accountHeader}>
          <Text style={{fontSize: 20, color: '#fff', textAlign: 'left',marginTop: 5, fontWeight: 'bold'}}>AUTO SERVICES</Text>

          <TouchableOpacity style={styles.loginButton}>
          <Button title={'HELP'} color={'#1BCDCD'} onPress={()=> navigation.navigate(Help)}/>
           
        </TouchableOpacity>
       
        {/* <Text style={{fontSize: 20, color: '#fff', textAlign: 'left',marginTop: 5, position: 'absolute', margin: 20, bottom: 15}}>PREMIUM</Text>
        <Text style={{fontSize: 13, color: '#1BCDCD', textAlign: 'left',marginTop: 5, position: 'absolute', marginHorizontal: 20, bottom: 10}}>Upgrade to enjoy our premium online services</Text> */}
        </View>  

      <View style={styles.accountFeatures} onPress={()=> navigation.navigate(Services)}>
          

          <TouchableOpacity style={styles.featureItem} onPress={()=> navigation.navigate(ErrorScanner)}>
          <Image source={require('../assets/ICONS/laptop-alt.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}>ERROR SCANNER</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </TouchableOpacity>

          <TouchableOpacity style={styles.featureItem} onPress={()=> navigation.navigate(Services)}>
              <Image source={require('../assets/ICONS/cart.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}>SERVICES STORE</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </TouchableOpacity>




          <TouchableOpacity style={styles.featureItem}>
              <Image source={require('../assets/ICONS/repair.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}>BOOK APPOINMTENT / SERVICE</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </TouchableOpacity>


          <TouchableOpacity style={styles.featureItem}>
              <Image source={require('../assets/ICONS/ui-settings.png')} style={styles.icon}/>
              <Text style= {styles.featureTitle}>CALL AN AGENT</Text>
              <Image source={require('../assets/ICONS/simple-down.png')} style={styles.icon}/>

          </TouchableOpacity>
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
        height: 70,
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
        // borderRadius: 5,
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