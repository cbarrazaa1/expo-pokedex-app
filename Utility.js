import * as React from 'react';
import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    window,
    screen,
  });

  const onChange = ({window, screen}) => {
    setDimensions({window, screen});
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  });

  return dimensions;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
