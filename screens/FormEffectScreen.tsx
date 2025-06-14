import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native';
import { useState, useEffect, use } from 'react';

export default function FormEffectScreen() {
  
    const [nombre, setNombre] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [edad, setEdad] = useState('');
    const [nombreEs, setNombreEs] = useState('');

   useEffect(() => {
    console.log("Mi nombre es: "+nombre),
    console.log("Mi apellido materno es: "+apellidoM),
    console.log("Mi apellido paterno es: "+apellidoP);
    console.log("Mi edad es: "+edad),
    console.log("Mi nombre de escuela es: "+nombreEs);

   },[nombre, apellidoM, apellidoP, edad, nombreEs]);
 
    const mostrarDatos = () => {
      Alert.alert('Datos ingresados',
        nombre + "/n" + apellidoM + "/n" + apellidoP+ "/n" + edad + "/n" + nombreEs
      )
    };

  return(
    <SafeAreaView style={styles.container}> 
    <ScrollView contentContainerStyle={styles.form}>

         <Text style={styles.titulo}>Formulario</Text>
         <Text style={styles.Nom}>Escribe tu nombre: </Text>
         <TextInput
         style={styles.input}
         placeholder='Nombre'
         value={nombre}
         onChangeText={setNombre}
          />


         <Text style={styles.ApM}>Escribe tu apellido materno: </Text>
         <TextInput
         style={styles.input}
         placeholder='Apellido Materno'
         value={apellidoM}
         onChangeText={setApellidoM}
          />

        <Text style={styles.ApP}>Escribe tu apellido paterno: </Text>
         <TextInput
         style={styles.input}
         placeholder='Apellido Paterno'
         value={apellidoP}
         onChangeText={setApellidoP}
          />

        <Text style={styles.Ed}>Escribe tu edad: </Text>
         <TextInput
         style={styles.input}
         placeholder='Edad'
         value={edad}
         onChangeText={setEdad}
          />

        <Text style={styles.Escuela}>Escribe el nombre de tu escuela: </Text>
         <TextInput
         style={styles.input}
         placeholder='Nombre de escuela'
         value={nombreEs}
         onChangeText={setNombreEs}
          />

          <Button title='Mostrar informacion' onPress={()=>alert(mostrarDatos)} />

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  Nom: {

  },
  ApM: {

  },
  ApP:{

  },
  Ed:{

  },
  Escuela:{

  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  boton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});