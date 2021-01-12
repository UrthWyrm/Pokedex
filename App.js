import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CardStats from './src/screens/CardStats';

// const ImageHeader = props => (
//   <View style={{ backgroundColor: '#eee' }}>
//     <Image
//       style={StyleSheet.absoluteFill}
//       source={{ uri: 'C:/Users/cryst/Desktop/Pokedex/poke-dex/assets/images/pokedexTop.jpg' }}
//     />
//     <Header {...props} style={{ backgroundColor: 'transparent' }}/>
//   </View>
// );

const navigator = createStackNavigator({
  Home: HomeScreen,
  Stats: CardStats
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerBackground: (
      <Image
        style={{
          flex: 1,
          // resizeMode: 'contain',
          height: null,
          width: '100%'
        }}
        source={ require('C:/Users/cryst/Desktop/Pokedex/poke-dex/assets/images/pokedexTop.jpg')}
      />
    ),
    title: 'Pokedex',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      justifyContent: 'center',
      marginLeft: 140
    },
  },
  
});

export default createAppContainer(navigator);



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
