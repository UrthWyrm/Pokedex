import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
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
            justifyContent: 'center',
            backgroundColor: 'gray'
        }}>
            <Text style={styles.textStyle}>Name: {result.card.name}</Text>
            <Text style={styles.textStyle}>Health: {result.card.hp}</Text>
            <Text style={styles.textStyle}>National Pokedex Number: {result.card.nationalPokedexNumber}</Text>
            <Image 
            style={styles.imageStyle} 
            source={{ uri: result.card.imageUrlHiRes}} 
            />

            {/* <FlatList
              style={styles.listStyle}
              data={result.card.imageUrlHiRes}
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
        height: 350,
    },
    buttonStyle: {
        width: 50,
        height: 50,
        borderWidth: 10,
        backgroundColor: 'white'
    }

});

export default CardStats;