import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
            <TouchableOpacity
              style={{
                width: 150,
                height: 50,
                borderWidth: 3,
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                left: 135,
                backgroundColor: 'white'
                // backgroundColor: randomRgb()
              }}>
                  <Text style={{right: 10}}>Favorite</Text>
                  <AntDesign name="heart" size={24} color="red" />
              </TouchableOpacity>
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
        // marginBottom: 70,
        borderRadius: 5,
        // borderWidth: 12

    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    }

});

export default CardDetails;