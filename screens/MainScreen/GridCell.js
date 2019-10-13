import * as React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDimensions} from '../../Utility';

function GridCell({id, onPress}) {
  const screenWidth = useDimensions().window.width;

  return (
    <TouchableOpacity
      style={[
        styles.root,
        {
          width: screenWidth / 3 - 16,
          height: screenWidth / 3 - 16,
        },
      ]}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 8,
  },
});

export default GridCell;
