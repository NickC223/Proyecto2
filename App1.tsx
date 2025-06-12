import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
<View style={styles.box}>
      <Text style={styles.title}>Hola mundo</Text>
      <TextInput  
      style={styles.input}
      placeholder='Escribe aqui'
      /> 
      <Image
      source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
      style={styles.image}
      />
      <Button  
      title='Mostrar texto en consola'
      onPress={() => console.log('Nombre: Nicholas Camacho Barba')}
      />

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  box:{
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center'
  }
});
