import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Style';

interface IProps {
  search: (searchTextValue: string) => void;
}

const SearchBar = ({search}: IProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        onChangeText={search}
        placeholder="Search Crypto..."
        style={styles.search}></TextInput>
    </View>
  );
};

export default SearchBar;
