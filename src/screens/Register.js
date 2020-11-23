import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ButtonMedium from '../components/ButtonMedium';

const Register = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHeader}>Register</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
          fullName: '',
          gender: '',
          phone: '',
          address: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              placeholderTextColor="grey"
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="grey"
            />
            <View style={styles.btnRegister}>
              <ButtonMedium text="Sign Up" />
            </View>
            <TouchableOpacity>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('Login')}
              >
                Already have an account? Click here
              </Text>
            </TouchableOpacity>
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
    paddingTop: 50,
  },
  textHeader: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 25,
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
  btnRegister: {
    alignItems: 'center',
    marginTop: 25,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Register;
