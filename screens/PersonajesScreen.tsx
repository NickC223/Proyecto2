import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, Alert, SafeAreaView, FlatList, Image } from 'react-native';
import { useState, useEffect, use } from 'react';

export default function PersonajesScreen() {
  
  const [nombrePersonaje, setNombrePersonaje] = useState("");
  const [personajes, setPersonajes] = useState([]);

   useEffect(() => {
     fetchdata();
  },[nombrePersonaje]);

  const fetchdata = async () =>{
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/?name='+nombrePersonaje);
        const data = await response.json();
        if(data.results){
         // console.log(data.results);
          setPersonajes(data.results);
        } else{
          //console.log("No se encontro al personaje");
          setPersonajes([]);
        }
     } catch {
      //console.log("Error al obtener los personajes");
      setPersonajes([]);
     }
    };

    const mostrarInfo = (item) => {
      console.log(item);
      Alert.alert(item.name,
        "Especie: "+item.species+
        "\nEstado: "+item.status+
        "\nGénero: "+item.gender+
        "\nFecha Creación: "+item.created+
        "\nLocalización: "+item.location.name+
        "\nOrigen: "+item.origin.name);
  
    }
 

  return(
    <SafeAreaView style={styles.container}> 
    <ScrollView contentContainerStyle={styles.form}>
         <Text style={styles.titulo}>Consulta API lista</Text>
         <TextInput
          style={styles.input}
          placeholder='Escribir nombre del personaje'
          value={nombrePersonaje}
          onChangeText={setNombrePersonaje}
         />
         <FlatList
         data={personajes}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => (
          <TouchableOpacity onPress={() => mostrarInfo(item)}>

          <View style={styles.card}>
            <Image 
            source={{ uri: item.image }}
            style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.species}</Text>

            </View>
          </View>
          </TouchableOpacity>
         )}

         />
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
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#eee'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }

});