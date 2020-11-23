import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 190,
    width: 170,
    height: 350,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#333',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    // marginHorizontal: 18,
    // marginVertical: 12,
    padding: 5,
    // backgroundColor: 'red',
  },
});

export default Card;
