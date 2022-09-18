import { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import config from "../config/config.json";

function StockList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
        .then(response => response.json())
        .then(result => setProducts(result.data));
     }, []);

    const list = products.map((product, index) => <Text style={{fontSize:18, color: '#575657', marginBottom: 5 }} key={index}>{ product.name }: { product.stock }st</Text>);

    return (
        <View>
            {list}
        </View>
    )
}

export default function Stock(){
    return (
        <View>
            <Text style={{color: '#658354', fontSize: 25, marginBottom: 10 }}>Lagerförteckning</Text>
            <StockList />
        </View>
    );
}