import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './components/Stock.tsx'
import warehouse from './assets/warehouse.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.base}>
      <Text style={{color: '#888', fontSize: 42}}>Lager-appen</Text>
      <Image source={warehouse} style={{ width: 320, height:240 }} />
      <Stock />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  },
});
