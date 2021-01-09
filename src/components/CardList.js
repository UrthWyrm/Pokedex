import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardDetails from './CardDetails';

const CardList = ({ title, results }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>{results.length}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <CardDetails result={item} />;
                }}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default CardList;