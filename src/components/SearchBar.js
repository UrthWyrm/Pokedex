import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.barStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    barStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingRight: 20,
        backgroundColor: 'gray'
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        marginRight: 13
    }


});

export default SearchBar;