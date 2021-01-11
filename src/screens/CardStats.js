import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Poke from '../api/Poke';

const CardStats = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async id => {
        const response = await Poke.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={styles.textStyle}>Name: {result.card.name}</Text>
            <Text style={styles.textStyle}>Health: {result.card.hp}</Text>
            <Text style={styles.textStyle}>National Pokedex Number: {result.card.nationalPokedexNumber}</Text>

            {/* <FlatList
              style={styles.listStyle}
              data={result.imageUrl}
              keyExtractor={photo => photo} 
              renderItem={({ item }) => {
                  return <Image style={styles.imageStyle} source={{ uri: item }} />

              }}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    listStyle: {
        width: 150,
        height: 150
    },
    imageStyle: {
        width: 250,
        height: 250,
    }

});

export default CardStats;