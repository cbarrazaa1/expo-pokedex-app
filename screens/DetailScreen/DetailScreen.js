import * as React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {capitalize} from '../../Utility';
import TypePill from './TypePill';

function DetailScreen({navigation}) {
  const pokemon = navigation.getParam('pokemon', {});
  const id = navigation.getParam('id', 0);

  return (
    <View style={styles.root}>
      <View style={styles.spriteContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          }}
        />
      </View>
      <View style={styles.typeContainer}>
        {pokemon.types.map(function(item) {
          return <TypePill name={capitalize(item.type.name)} />;
        })}
      </View>
      <View style={styles.measureContainer}>
        <View style={styles.measureDetail}>
          <Text style={styles.measureTitle}>Weight</Text>
          <Text style={styles.measureText}>{pokemon.weight / 10}kg</Text>
        </View>

        <View style={styles.measureDetail}>
          <Text style={styles.measureTitle}>Height</Text>
          <Text style={styles.measureText}>{pokemon.height / 10}m</Text>
        </View>
      </View>
    </View>
  );
}

DetailScreen.navigationOptions = function({navigation}) {
  return {
    title: capitalize(navigation.getParam('pokemon', {}).name),
    headerStyle: {
      backgroundColor: '#323232',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
    headerTintColor: '#ffffff',
  };
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
  },
  spriteContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  typeContainer: {
    width: '100%',
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  measureContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
  },
  measureDetail: {
    width: '49%',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  measureTitle: {
    fontSize: 16,
    flex: 1,
    marginTop: 8,
  },
  measureText: {
    fontSize: 22,
    flex: 2,
    marginTop: 6,
  },
});

export default DetailScreen;
