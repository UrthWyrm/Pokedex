import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Poke from '../api/Poke';

const CardStats = ({ navigation }) => {
    const id = navigation.getParam('id');
    console.log(id);

    const getResult = async (id) => {
        const response = await Poke.get(`/${id}`);
        response.data;
    };

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