// import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'

// import SignIn from './signIn'

// import axios from 'axios'


// const SignUp=({navigation})=> {

//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  
//   const [isSubmit, setIsSubmit] = useState(false);
  
//   useEffect(()=> {
//       const authenticate = async() => {
//           axios.post('http://localhost:80/api/insert', 
//           JSON.stringify({
//               username : username,
//               email: email,
//               password: password,
//           })
//           ).then((Response)=> {
//             console.log(response);
//             setIsSubmit(false);
//             //navigate user based on responds

//           })
//           .catch((error)=> {
//             console.log(error)
//           });
//         };
//         if (isSubmit) authenticate();
//   }, [isSubmit])










//   return (
//     <View style={styles.container}>
//       <ImageBackground source={require('../assets/img/background.png')}
//         style = {styles.container}
//       >
//         <Image source={require('../assets/ICONS/ifix.png')} style={styles.logo}></Image>
//         <Text style={styles.text}>Register Your Account</Text>
//         <Text style={styles.paragraph}>Let’s get started by creating your account.
// To keep your account safe, we need a strong password.</Text>

//         <View style={styles.profileContainer1}>
//             <View style={styles.profileContainer2} >
//               <Image source={require('../assets/ICONS/user.png')} style={{width: 80, height: 80, backgroundColor: '#000',top: 10,}}/>
//             </View>
//         </View> 
//         <View style= {styles.inputForm}>
//         <TextInput 
//             placeholder='First Middle Last Name' 
//             style={styles.TextInputField}
//             value={userName}
//             onChangeText={(text) => setUserName(text)}
            
//             />

//         <TextInput 
//             placeholder='Email' 
//             style={styles.TextInputField}
//             value={Email}
//             onChangeText={(text) => setEmail(text)}

            
//             />

//         <TextInput 
//             placeholder='Password' 
//             style={styles.TextInputField}
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={true}

            
//             />

//         <TextInput 
//             placeholder='Confirm Password'
//             style={styles.TextInputField}
//             value={confirmPassword}
//             onChangeText={(text) => setConfirmPassword(text)}
//             secureTextEntry={true}

            
            
//             />
       
//         <Button title='Submit' color='#1BCDCD' onPress={()=> setIsSubmit(true)}/>
//         </View>
//         <Text style={styles.paragraph}>For further support, you may visit the help Center or contact our customer service team</Text>
//         <Text style={styles.paragraph}>Already have an account? <TouchableOpacity onPress={()=> navigation.navigate(SignIn)}><Text style={{color: '#1BCDCD'}}>Sign in</Text></TouchableOpacity></Text>

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
// export default SignUp



import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const handleRegistration = async () => {
      try {
        const response = await axios.post('http://10.74.76.17/api/insert.php', {
          username: username,
          email: email,
          password: password,
        });

        console.log(response.data);

        // Assuming the server responds with a 'success' field indicating registration success
        if (response.data.success) {
          Alert.alert('Success', 'Registration successful!', [{ text: 'OK', onPress: () => navigation.navigate('SignIn') }]);
        } else {
          Alert.alert('Error', 'Registration failed. Please try again later.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An error occurred during registration. Please try again later.');
      }
      setIsSubmit(false);
    };

    if (isSubmit) {
      handleRegistration();
    }
  }, [isSubmit]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/img/background.png')}
        style={styles.container}
      >
        <Image source={require('../assets/ICONS/ifix.png')} style={styles.logo}></Image>
        <Text style={styles.text}>Register Your Account</Text>
        <Text style={styles.paragraph}>Let’s get started by creating your account.
To keep your account safe, we need a strong password.</Text>

        <View style={styles.profileContainer1}>
          <View style={styles.profileContainer2} >
            <Image source={require('../assets/ICONS/user.png')} style={{ width: 80, height: 80, backgroundColor: '#000', top: 10, }} />
          </View>
        </View>
        <View style={styles.inputForm}>
          <TextInput
            placeholder='First Middle Last Name'
            style={styles.TextInputField}
            value={username}
            onChangeText={(text) => setUserName(text)}
          />

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

          <TextInput
            placeholder='Confirm Password'
            style={styles.TextInputField}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
          />

          <Button title='Submit' color='#1BCDCD' onPress={() => setIsSubmit(true)} />
        </View>
        <Text style={styles.paragraph}>For further support, you may visit the help Center or contact our customer service team</Text>
        <Text style={styles.paragraph}>Already have an account? <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text style={{ color: '#1BCDCD' }}>Sign in</Text></TouchableOpacity></Text>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    position: 'relative'
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
  eyePassword: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 10,
  }
})

export default SignUp;
