import { StyleSheet, Text, View, TextInput, ScrollView,Image,TouchableOpacity, Button } from 'react-native'
import React from 'react'

import SignIn from './signIn'
import ErrorScanner from './ErrorScanner'
import SignUp from './Signup'
import Store from './Store'
import Account from './Account'
import FiXMe from './FiXMe'
import NavFooter from './navFooter'



export default function Services() {
  return (
    <View style={styles.container}>
        <View style={styles.serviceHeader}>
            <TextInput placeholder='Search for a service' style= {{borderWidth: 1, flex: 1, borderRadius: 5,padding: 5, borderColor: '#1BCDCD' }}/>
            <TouchableOpacity style={{elevation: 5, }}>
                <Button title={'SERVICE ITEMS ( 0 )'} color={'#1BCDCD'}/>
            </TouchableOpacity>
        </View>
    <ScrollView style={styles.serviceView} >

        <Text style={styles.serviceCategory}>COMPUTER HARDWARE SERVICES</Text>

        <ScrollView style={styles.serviceHorizontalScroll} horizontal={true}>
            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/boostPcPerformance.jpeg')} style={styles.productImage}/>

                <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>
                    BOOST PC PERFORMANCE

                    </Text>
                    <Text style={styles.servicePlaform}>
                   AL BRANDS
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                       AVAILABLE
                    </Text>
                </View>
            </View>


            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/brokenScreen.jpg')} style={styles.productImage}/>

                <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>
                    BROKEN LAPTOP SCREEN

                    </Text>
                    <Text style={styles.servicePlaform}>
                   ALL BRANDS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                       14", 15.6", 16" INCHES
                    </Text>
                </View>
            </View>



            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/brokenHinges.png')} style={styles.productImage}/>

                <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>
                    BROKEN LAPTOP HINGES

                    </Text>
                    <Text style={styles.servicePlaform}>
                   ALL BRANDS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                       14", 15.6", 16" INCHES
                    </Text>
                </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/laptopLiquidSpillage.jpg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>
                        LAPTOP LIQUID SPILLAGE

                    </Text>
                    <Text style={styles.servicePlaform}>
                        ALL BRANDS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                       14", 15.6", 16" INCHES
                    </Text>
            </View>
            </View>

            

        </ScrollView>

        <Text style={styles.serviceCategory}>COMPUTER SOFTWARE SERVICES</Text>

        <ScrollView style={styles.serviceHorizontalScroll} horizontal={true}>
        <View style={styles.serviceItem}>
            <Image source={require('../assets/img/softwareInstallation.png')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                        SOFTWARE INSTALLATION

                    </Text>
                    <Text style={styles.servicePlaform}>
                        ALL OPERATING SYSTEMS
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                    SERVICE AVAILABLE
                    </Text>
            </View>
            </View>
            <View style={styles.serviceItem}>
                <Image source={require('../assets/img/win11.jpg')} style={styles.productImage}/>
            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                        OS (WINDOWS) INSTALLATION

                    </Text>
                    <Text style={styles.servicePlaform}>
                        ALL LAPTOPS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                    SERVICE AVAILABLE                    
                    </Text>
            </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/dataRecovery.png')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                        DATA RECOVERY / BACKUP

                    </Text>
                    <Text style={styles.servicePlaform}>
                        ALL OPERATING SYSTEMS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                    SERVICE AVAILABLE                    
                    </Text>
            </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/activationError.png')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                        WINDOWS / APP ACTIVATION

                    </Text>
                    <Text style={styles.servicePlaform}>
                        ALL OPERATING SYSTEMS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                        SERVICE AVAILABLE
                    </Text>
            </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/Bootfailure.png')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                        BOOT FAILURE

                    </Text>
                    <Text style={styles.servicePlaform}>
                        ALL OPERATING SYSTEMS 
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                        SERVICE AVAILABLE
                    </Text>
            </View>
            </View>

                      
            
            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/updatewindows.jpg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>

            </View>
            </View>

        </ScrollView>

        <Text style={styles.serviceCategory}>DEFENSE AND SECURITY SERVICES</Text>
        <ScrollView style={styles.serviceHorizontalScroll} horizontal={true}>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/virusMalware.jpeg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                    VIRUS AND MALWARE ATTACKS

                    </Text>
                    <Text style={styles.servicePlaform}>
                   WINDOWS OS ONLY
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                      AVAILABLE
                    </Text>
            </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/virusMalware.jpeg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                    VIRUS AND MALWARE ATTACKS

                    </Text>
                    <Text style={styles.servicePlaform}>
                   WINDOWS OS ONLY
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                      AVAILABLE
                    </Text>
            </View>
            </View>


            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/virusMalware.jpeg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                    VIRUS AND MALWARE ATTACKS

                    </Text>
                    <Text style={styles.servicePlaform}>
                   WINDOWS OS ONLY
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                      AVAILABLE
                    </Text>
            </View>
            </View>
           
        </ScrollView>
        <Text style={styles.serviceCategory}>INTERNET / NETWORK SERVICES</Text>
        <ScrollView style={styles.serviceHorizontalScroll} horizontal={true}>
            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/networkInstallation.jpg')} style={styles.productImage}/>

                <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>
                    HOME / OFFICE / SCHOOL NETWORK

                    </Text>
                    <Text style={styles.servicePlaform}>
                   WINDOWS OS ONLY
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                      AVAILABLE
                    </Text>
                </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/expansionHarddisc.jpeg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                    NETWORK SECURITY / FIREWALL

                    </Text>
                    <Text style={styles.servicePlaform}>
                   WINDOWS OS ONLY
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                      AVAILABLE
                    </Text>
            </View>
            </View>

            <View style={styles.serviceItem}>
            <Image source={require('../assets/img/expansionHarddisc.jpeg')} style={styles.productImage}/>

            <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>
                    VIRUS AND MALWARE ATTACKS

                    </Text>
                    <Text style={styles.servicePlaform}>
                   WINDOWS OS ONLY
                    </Text>
                    <Text style={styles.serviceIsAvailable}>
                      AVAILABLE
                    </Text>
            </View>
            </View>
        </ScrollView>
    </ScrollView>


<NavFooter/>
    </View>
  )
}

const styles = StyleSheet.create({
        container:{
            backgroundColor: '#CBE4E4',
            flex: 1,
            backgroundColor: '#CBE4E4',
            alignItems: 'center',
            justifyContent: 'center',
        },
    serviceHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        gap: 10,
        elevation: 5
    },

    serviceView:{
       backgroundColor: 'transparent',
        top: 10,
        marginBottom: 70,
        

    },

    serviceHorizontalScroll:{
       marginBottom: 20,
       paddingBottom: 30,
       marginHorizontal: 10,

    },



    serviceItem:{
        height: 180,
        width: 180,
        borderRadius: 10,
        elevation: 5,
        marginRight: 20,

    },
    serviceInfo:{
        width: 180,
        height: 70,
        backgroundColor: '#353638',
        position: 'absolute',
        bottom: 0,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
       

    },
    serviceName:{
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    servicePlaform: {
        color: '#1BCDCD',
        fontSize: 8
    },
    productImage:{
        width:180,
        height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'stretch'
    },
    serviceIsAvailable:{
        color: '#fff',
        fontSize: 11,
    },

    serviceCategory: {
        backgroundColor: '#181F20',
        color: '#1BCDCD',
       paddingVertical: 10,
       marginBottom:10,
       fontSize: 13,
       fontWeight: 'bold'
    }
 
})