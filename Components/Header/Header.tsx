import React from 'react';
import {Text, View} from 'react-native';
import styles from './Style';

interface IProps {
  title: string;
}

const Header = ({title}: IProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
