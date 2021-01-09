import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import DexResults from '../hooks/DexResults';
import CardList from '../components/CardList';

const HomeScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = DexResults();
    
    console.log(results)

    const filterResults = (supertype) => {
        return results.filter(results => {
            return results.supertype === supertype;
        });

    };

    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray'
        }}>
            <SearchBar 
              term={term} 
              onTermChange={setTerm}
              onTermSubmit={() => searchApi(term)}
            />
            <CardList 
            title="Current Card"
            results={filterResults('Pokémon')}
             />
            <Text style={styles.textStyle}>You Can Do EEET!!</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>{results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold'
    }
});

export default HomeScreen;