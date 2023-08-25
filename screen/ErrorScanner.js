import { StyleSheet, Text, View,Image,Button, TextInput, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef, useState } from 'react'
import {Camera} from 'expo-camera'
import {shareAsync} from 'expo-sharing'
import * as MediaLibrary from 'expo-media-library'

export default function ErrorScanner() {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();

useEffect(()=>{
    (async ()=> {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const MediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === 'granted');
        setHasMediaLibraryPermission(MediaLibraryPermission.status === 'granted');
    })();
}, []);
if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
   

return (
    <View style={styles.container}>
      <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />


      <View style= {{width: 200}}>
      <Button title="Share" onPress={sharePic} color={'#1BCDCD'}/>
      {hasMediaLibraryPermission ? <Button title="SUBMIT" onPress={savePhoto} /> : undefined}
      <Button title="Discard" onPress={() => setPhoto(undefined)} color={'#1BCDCD'}/>
        </View>
      
    </View>
  );
}

return (
  <SafeAreaView style={styles.container}>
      <Text style= {{color: '#CBE4E4', marginHorizontal: 20, textAlign: 'center',position: 'absolute', top: 20}}>Focus the camera on Laptop Screen Until the Code is captured</Text>

  <Camera style={styles.camera} ref={cameraRef}>
         <StatusBar style="auto" />
         <Image source={require('../assets/ICONS/scan_frame.png')} style={{height: 360, width: 360,position: 'absolute' }}/>

  </Camera>
  
        
        <View style= {styles.inputForm}>
          
        <Text style={{color: '#fff', textAlign: 'center'}}>or</Text>
            <TextInput placeholder='Enter Error Code'style={styles.TextInputField}/>

         
            <Button title='Submit' color='#1BCDCD'/>
            <TouchableOpacity onPress={takePic}>
        <View style={styles.cameraButton} >
            <View style={styles.circle1}>
                <View style={styles.circle2}>
                    
                </View>
            </View>
        </View>

        </TouchableOpacity>
        </View>
       
  </SafeAreaView>
);
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
        backgroundColor: 'transparent',
        backgroundColor: '#181F20',
        

      
      },
      camera: {
        width: 350,
        height: 350,
        top: 80,
        backgroundColor: '#000',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
       

        
   
      },
      inputForm:{
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      TextInputField : {
        backgroundColor: '#CBE4E4' ,
        width: 300,
        borderRadius: 5,
        padding: 5,
        marginVertical: 20,
        position: 'relative',
        textAlign: 'center'
      },

      circle1: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: '#fff',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      circle2: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#CBE4E4',
        marginVertical: 20,
        elevation: 5,

      },
      buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end'
      },
      preview: {
        
        alignSelf: 'stretch',
        flex: 1
      }
      
})