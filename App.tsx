import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, View } from 'react-native';
import Stock from './components/Stock.tsx'
import campingImg from './assets/camping.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
      <Text style={{color: '#658354', fontSize: 40, marginBottom: 10 }}>Lager-appen</Text>
      <Image source={campingImg} style={{ width: 370, height:230, borderRadius: 20 / 2 }} />
      </View>
      <View style={styles.base}>
      <Stock />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F8'
  },
  hero: {
    alignItems: 'center',
    marginBottom: 20,
  },
  base: {
    flex: 1,
    backgroundColor: '#F8F6F8',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
