import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';

import Header from './../components/Header';
import ButtonMedium from './../components/ButtonMedium';

const AddLiterature = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ScrollView style={styles.container}>
      <Header openMenu={openMenu} />
      <Text style={styles.textHeader}>Add Literature</Text>
      <Formik
        initialValues={{
          title: '',
          publication_date: '',
          pages: '',
          isbn: '',
          author: '',
          attache: '',
          image: '',
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
            <TextInput
              style={styles.input}
              placeholder="Publication Date"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Pages"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="ISBN"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Author"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Screenshot"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="File"
              placeholderTextColor="grey"
            />
            <View style={styles.btnSubmit}>
              <ButtonMedium text="Submit" />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
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
  formContainer: {
    padding: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    color: '#fff',
  },
  btnSubmit: {
    alignItems: 'center',
    marginTop: 25,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default AddLiterature;
