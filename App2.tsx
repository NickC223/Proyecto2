import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function App() {
  const [contador, setContador] = useState(0);

  return ( 
    <View style={styles.container}>
      <Text style={styles.textoContador}>Contador: {contador}</Text>

      <View style={styles.containerBotones}>
        <TouchableOpacity style={styles.boton} onPress={() =>{ 
          if (contador + 1 === 10) {
            alert('El contador llego a 10')
          }
          setContador(contador + 1)
        }}>
          <Text style={styles.textoBoton}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => setContador(contador - 1)}>
          <Text style={styles.textoBoton}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => setContador(0)}>
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.boton} onPress={() => setContador(0)}>
          <Text style={styles.textoBoton}>Mostrar Alerta</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20
  },
  textoContador: {
    fontSize: 32,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  containerBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 10
  },
  boton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
