import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bruno from './SRC/Components/Bruno/index';
import Giovani from './SRC/Components/Giovani/main';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Bruno></Bruno>
    <Giovani></Giovani>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});