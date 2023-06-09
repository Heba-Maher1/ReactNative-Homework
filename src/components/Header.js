import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View styles={styles.header}>
      <Text styles={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 600,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default Header;
