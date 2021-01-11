import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardDetails = ({ result }) => {
    return (

        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <Image 
            style={styles.imageStyle} 
            source={{ uri: result.imageUrlHiRes}} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 380,
        height: 250,
        margin: 10,
        borderRadius: 5

    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold'
    }

});

export default CardDetails;