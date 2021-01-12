import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import SearchBar from '../components/SearchBar';
import DexResults from '../hooks/DexResults';
import CardList from '../components/CardList';

const HomeScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = DexResults();

    console.log(results)

    // const pokeBackground = source={require('C:/Users/cryst/Desktop/Pokedex/poke-dex/assets/images/pokedexTop.jpg')};


    const filterResults = (supertype) => {
        return results.filter(results => {
            return results.supertype === supertype;
        });

    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray'
        }}>
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('C:/Users/cryst/Desktop/Pokedex/poke-dex/assets/images/pokedex.jpg')}>

                <SearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={() => searchApi(term)}
                />
                <CardList
                    // title="Current Card"
                    results={filterResults('Pokémon')}
                />
                {/* <Text style={styles.textStyle}>You Can Do EEET!!</Text> */}
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                {/* <Text>{results.length}</Text> */}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold'
    },
    backgroundStyle: {
        flex: 1,
        width: '100%',
        height: null
    }
});

export default HomeScreen;