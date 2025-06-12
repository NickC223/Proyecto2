import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen ({ navigation }){
    return(
        <View style={styles.container}>
        <Image
        source={{ uri: "https://th.bing.com/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?rs=1&pid=ImgDetMain" }}
        style={styles.image}
        />
        <Button title='Ir a componentes' onPress={() => navigation.navigate('Componentes')} />
        <Button title='Ir a contador' onPress={() => navigation.navigate('Contador')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        gap: 10,
        padding: 20
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: 'center'
    }
})