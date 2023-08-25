// import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
// import React from 'react'

// import SignUp from './Signup'



// const SignIn=({navigation})=> {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../assets/img/background.png')}
//         style = {styles.container}
//       >
//         <Image source={require('../assets/ICONS/ifix.png')} style={styles.logo}></Image>
//         <Text style={styles.text}>Register Your Account</Text>
//         <Text style={styles.paragraph}>Let’s get started by creating your account.
//       To keep your account safe, we need a strong password.</Text>

//         <View style={styles.profileContainer1}>
//             <View style={styles.profileContainer2} >
//               <Image source={require('../assets/ICONS/user.png')} style={{width: 80, height: 80, backgroundColor: '#000',top: 10,}}/>
//             </View>
//         </View> 
//         <View style= {styles.inputForm}>
//         {/* <TextInput placeholder='First Middle Last Name' style={styles.TextInputField}/> */}
//         <TextInput placeholder='Email' style={styles.TextInputField}/>
//         <TextInput placeholder='Password' style={styles.TextInputField}></TextInput>
//         {/* <TextInput placeholder='Confirm Password'style={styles.TextInputField}></TextInput> */}

//         {/* <Image style={styles.eyePassword} source={require('../assets/ICONS/eye-close.png')}/> */}
//         <Button title='Submit' color='#1BCDCD'/>
//         </View>
//         <Text style={styles.paragraph}>For further support, you may visit the help Center or contact our customer service team</Text>
//         <Text style={styles.paragraph}>Not yet Registered? ? <TouchableOpacity onPress={()=> navigation.navigate(SignUp)}><Text style={{color: '#1BCDCD'}}> Register</Text></TouchableOpacity></Text>

//       </ImageBackground>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 0,
  
//   },

//   profileContainer1:{
//     width: 120,
//     height: 120,
//     borderRadius:100,
//     backgroundColor: '#1BCDCD',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     marginBottom: 30,
//   },
//   profileContainer2: {
//     width: 100,
//     height: 100,
//     borderRadius:100,
//     backgroundColor: '#000000',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     elevation: 5,

//   },

//   text: {
//     position: 'relative',
//     color: '#1BCDCD',
//     zIndex: 1,
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10,
    

//   },

//   logo: {
//     width: 60,
//     height: 40,
//     position: 'relative',
//     marginBottom: 10,
//     },

//     inputForm:{
//       position: 'relative'
//     },
//   TextInputField : {
//     backgroundColor: '#CBE4E4' ,
//     width: 300,
//     borderRadius: 5,
//     padding: 8,
//     marginBottom: 30,
//     position: 'relative',
//   },

//   paragraph: {
//     fontSize: 10,
//     color: '#fff',
//     textAlign: 'center',
//     marginHorizontal: 20,
//     marginVertical: 10,

//   },
//   eyePassword:{
//     height: 20,
//     width: 20,
//     position: 'absolute',
//     right: 10,
    
//   }

// })
// export default SignIn



import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

import SignUp from './Signup';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if email and password are not empty
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    if (email !=='' && password !==''){

   

    // Send the login request to the server using Axios
    axios
      .post('http://10.74.76.17/api/login.php', {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response); // Log the entire response object for debugging
      if (response.data.success) {
        // If login was successful, navigate to the home screen or any other desired screen
        // For example, you can create a Home screen and navigate to it here
        navigation.navigate('Home');
      } else {
        // If login failed, show an alert with the error message from the server
        console.log(response.data); // Log the response data for debugging
        Alert.alert('Login Failed', 'Invalid email or password.');
      }
    })
    .catch((error) => {
      console.log(error);
      Alert.alert('Error', 'Login failed. Please try again later.');
    });
  };
}
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/background.png')}
        style={styles.container}
      >
        <Image
          source={require('../assets/ICONS/ifix.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Login to Your Account</Text>
        <Text style={styles.paragraph}>
          Please enter your email and password to log in.
        </Text>

        <View style={styles.profileContainer1}>
          <View style={styles.profileContainer2}>
            <Image
              source={require('../assets/ICONS/user.png')}
              style={{ width: 80, height: 80, backgroundColor: '#000', top: 10 }}
            />
          </View>
        </View>
        <View style={styles.inputForm}>
          <TextInput
            placeholder='Email'
            style={styles.TextInputField}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder='Password'
            style={styles.TextInputField}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Button title='Submit' color='#1BCDCD' onPress={handleLogin} />
        </View>
        <Text style={styles.paragraph}>
          For further support, you may visit the help Center or contact our
          customer service team
        </Text>
        <Text style={styles.paragraph}>
          Not yet Registered?{' '}
          <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
            <Text style={{ color: '#1BCDCD' }}> Register</Text>
          </TouchableOpacity>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },

  profileContainer1: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#1BCDCD',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  profileContainer2: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 5,
  },

  text: {
    position: 'relative',
    color: '#1BCDCD',
    zIndex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  logo: {
    width: 60,
    height: 40,
    position: 'relative',
    marginBottom: 10,
  },

  inputForm: {
    position: 'relative',
  },
  TextInputField: {
    backgroundColor: '#CBE4E4',
    width: 300,
    borderRadius: 5,
    padding: 8,
    marginBottom: 30,
    position: 'relative',
  },

  paragraph: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default SignIn;
