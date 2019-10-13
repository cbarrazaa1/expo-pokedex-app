import * as React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

function ListRow({id, name, onPress}) {
  return (
    <TouchableOpacity style={[styles.root, id % 2 !== 0 ? styles.even : styles.odd]} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
      />
      <Text style={styles.name}>
        #{id} {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 96,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    marginRight: 20,
  },
  even: {
    backgroundColor: '#f5f5f5',
  },
  odd: {
    backgroundColor: '#efefef',
  },
});

export default ListRow;
