import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Poke from '../api/Poke';

const CardStats = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await Poke.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Let's Go!</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CardStats;