import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
// import { FlatList, TextInput } from 'react-native-gesture-handler';

import Header from '../components/Header';
import Card from './../components/Card';

const Home = ({ navigation }) => {
  const [literatures, setLiteratures] = useState([
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
    {
      title: 'Perencangan Game FPS dengan algoritma ABC',
      author: 'Dilah',
      date: '2019',
      key: '3',
    },
    {
      title: 'Manajemen Sistem Cuci Motor',
      author: 'Renaldi',
      date: '2005',
      key: '4',
    },
    {
      title: 'Efisiensi Bahan Bakar Pada Motor',
      author: 'Resi',
      date: '2009',
      key: '5',
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
      <Text style={styles.textHeader}>Your best literatures is here</Text>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="grey"
            />
            <Button title="search" />
          </View>
        )}
      </Formik>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={literatures}
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
    // justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: '#161616',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#333333',
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
  },
  textHeader: {
    fontSize: 18,
    margin: 20,
    color: '#fff',
    textAlign: 'center',
  },
  formContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: 8,
    // width: 180,
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
export default Home;
