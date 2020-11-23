import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import Card from './../components/Card';

const MyCollection = ({ navigation }) => {
  const [collections, setCollections] = useState([
    {
      title: 'Manajemen Sistem Rumah Sakti',
      author: 'Dilah',
      date: '2020',
      key: '1',
    },
    {
      title: 'Aplikasi Pembelajaran Anak',
      author: 'Dilah',
      date: '2020',
      key: '2',
    },
  ]);
  const openMenu = () => {
    navigation.openDrawer();
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <Card>
        <Image
          style={styles.cardImage}
          source={require('../../assets/images/book-card.png')}
        />
        <Text style={[styles.cardText, styles.cardTitle]}>{item.title}</Text>
        <View style={styles.nameAndYear}>
          <Text style={styles.cardText}>{item.author}</Text>
          <Text style={styles.cardText}>{item.date}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Header openMenu={openMenu} />
      <Text style={styles.textHeader}>My Collection</Text>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={collections}
          numColumns={2}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#161616',
  },
  textHeader: {
    fontSize: 18,
    margin: 20,
    color: '#fff',
    // textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: 8,
    width: 160,
  },
  cardTitle: {
    paddingBottom: 10,
  },
  cardText: {
    color: '#fff',
  },
  nameAndYear: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MyCollection;
