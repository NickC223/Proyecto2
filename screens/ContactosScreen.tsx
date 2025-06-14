import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';


export default function ContactosScreen() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if(status === 'granted'){
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image]
        });
        setContactos(data);
      }
    }
    )();
  },[]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      {item.ImageAvailable && item.image?.uri ?  (
        <Image
        source={{uri: item.Image.uri}}
        style={styles.foto}
        />
      ) : (<Text>Sin foto</Text>)}
      <Text style={styles.nombre}>{item.name} </Text>
      {item.phoneNumbers?.length > 0 && (
        <Text style={styles.telefono}>{item.phoneNumbers[0].number}</Text> 
      )}
    </View>
  );
  
  return (
  <View style={styles.container}>
    <Text style={styles.titulo}>Lista de contactos</Text>
    <FlatList
    data={contactos}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10
  },
  nombre: {
    fontSize: 18
  },
  telefono: {
    fontSize: 16,
    color: 'grey'
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 50
  }
});