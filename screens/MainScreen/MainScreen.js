import * as React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import ListRow from './ListRow';
import {capitalize} from '../../Utility';
import GridCell from './GridCell';
import {usePokemonList, getPokemon} from '../../api/APIManager';

function MainScreen({navigation}) {
  const [tab, setTab] = useState('list');
  const pokemonList = usePokemonList();

  function onListPress() {
    setTab('list');
  }

  function onGridPress() {
    setTab('grid');
  }

  async function onPokemonPress(id) {
    const pokemon = await getPokemon(id);
    console.log(pokemon);
    navigation.navigate('DetailScreen', {pokemon: pokemon, id: id});
  }

  return (
    <View style={styles.root}>
      <View style={styles.topTabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === 'list' ? styles.selectedTab : null]}
          onPress={onListPress}
        >
          <Text
            style={[
              styles.tabTitle,
              tab === 'list' ? styles.selectedTabTitle : null,
            ]}
          >
            List
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === 'grid' ? styles.selectedTab : null]}
          onPress={onGridPress}
        >
          <Text
            style={[
              styles.tabTitle,
              tab === 'grid' ? styles.selectedTabTitle : null,
            ]}
          >
            Grid
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        key={tab === 'list' ? 1 : 3}
        style={styles.list}
        data={pokemonList}
        renderItem={function({item, index}) {
          if (tab === 'list') {
            return (
              <ListRow
                id={index + 1}
                name={capitalize(item.name)}
                onPress={function() {
                  onPokemonPress(index + 1);
                }}
              />
            );
          } else {
            return (
              <GridCell
                id={index + 1}
                onPress={function() {
                  onPokemonPress(index + 1);
                }}
              />
            );
          }
        }}
        keyExtractor={function(item, index) {
          return (index + 1).toString();
        }}
        horizontal={false}
        numColumns={tab === 'list' ? 1 : 3}
      />
    </View>
  );
}

function ScreenHeader() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../../resources/logo.png')} />
    </View>
  );
}

MainScreen.navigationOptions = {
  headerTitle: <ScreenHeader />,
  headerStyle: {
    backgroundColor: '#323232',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  list: {
    width: '100%',
  },
  header: {
    flex: 1,
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 105,
    height: 28,
    resizeMode: 'contain',
  },
  topTabContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  tab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
  },
  selectedTab: {
    backgroundColor: '#323232',
  },
  tabTitle: {
    fontSize: 16,
  },
  selectedTabTitle: {
    color: '#ffffff',
  },
});

export default MainScreen;
