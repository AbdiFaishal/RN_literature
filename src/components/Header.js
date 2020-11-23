import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ openMenu }) => {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../../assets/logo-full.png')}
          style={styles.headerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666666',
    paddingTop: 15,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 20,
    top: 38,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 150,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default Header;
