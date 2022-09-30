import { Image, Text, View, StyleSheet } from 'react-native';
import { Typography } from '../styles';
import campingImg from '../assets/camping.png'
import Stock from './Stock.tsx';

export default function Home() {
    return (
        <View>
            <View style={styles.hero}>
                <Text style={Typography.header1}>Lager-appen</Text>
                <Image source={campingImg} style={{ width: 370, height:230, borderRadius: 20 / 2 }} />
            </View>
            <View style={styles.base}>
                <Stock />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    hero: {
        alignItems: 'center',
        marginBottom: 20,
},
base: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});