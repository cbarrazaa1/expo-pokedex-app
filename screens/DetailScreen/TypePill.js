import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TypePill({name}) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 90,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  text: {
    color: '#ffffff',
  },
});

export default TypePill;
