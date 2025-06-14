import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { BatteryState, useBatteryLevel, useBatteryState } from 'expo-battery';

export default function BateriaScreen() {
  const batterylevel = useBatteryLevel();
  const batterystate = useBatteryState();

  return(
    <View style={styles.container}>
      <Text>Nivel de bateria : {batterylevel} * 100</Text>
      <Text>Estado actual de la bateria: {batterystate}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f0',
    padding: 20
  }

});
