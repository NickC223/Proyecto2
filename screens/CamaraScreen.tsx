import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, Alert, SafeAreaView, FlatList, Image } from 'react-native';
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import React, {useState} from 'react';

export default function CamaraScreen() {
  const [tipoCamara, setTipoCamara] = useState<CameraType>('back');
  const [permisos, setPermisos] = useCameraPermissions();

  if(!permisos){
    return <View />
  }

  if(!permisos.granted){
    return (
    <View style={styles.container}>
      <Text style={styles.message}>Necesitas permisos para la camara</Text>  
      <Button title='Dar permisos' onPress={setPermisos} />  
    </View>);
  }

  function toggleTipoCamara(){
    setTipoCamara(current => (current === 'back' ? 'front' : 'back'));
  }
  
  return(
    <View style={styles.container}> 
    <CameraView style={styles.camera} facing={tipoCamara}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleTipoCamara}>
          <Text style={styles.text}>Cambiar camara</Text>
        </TouchableOpacity>
      </View>
    </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  form: {
    marginTop: 30,
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    backgroundColor: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
    borderRadius: 8
  }
});