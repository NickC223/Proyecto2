import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState } from 'react';



export default function FormStateScreen() {
  
    const [inputN, setInputN] = useState('');
    const [inputApM, setInputApM] = useState('');
    const [inputApP, setInputApP] = useState('');
    const [inputE, setInputE] = useState('');
    const [inputEs, setInputEs] = useState('')


  return(
    <ScrollView style={styles.container}>
  <View style={styles.container}>
          <Text style={styles.title}>Introduce tu nombre: {inputN}</Text>
          <TextInput  
          style={styles.input}
          value={inputN}
          onChangeText={(text) =>setInputN(text)}
          /> 

          <Text style={styles.title}>Introduce tu apellido paterno: {inputApM}</Text>
          <TextInput  
          style={styles.input}
          value={inputApM}
          onChangeText={(text) =>setInputApM(text)}
          />

          <Text style={styles.title}>Introduce tu apellido materno: {inputApP}</Text>
          <TextInput  
          style={styles.input}
          value={inputApP}
          onChangeText={(text) =>setInputApP(text)}
          />

          <Text style={styles.title}>Introduce edad: {inputE}</Text>
          <TextInput  
          style={styles.input}
          value={inputE}
          onChangeText={(text) =>setInputE(text)}
          /> 

          <Text style={styles.title}>Introduce la escuela donde estudias: {inputEs}</Text>
          <TextInput  
          style={styles.input}
          value={inputEs}
          onChangeText={(text) =>setInputEs(text)}
          />

          <Button title='Limpiar informacion' onPress={()=>useState('')} />
          <Button title='Mostrar informacion' onPress={()=>useState(inputN)} />

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
});