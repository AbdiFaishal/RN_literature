import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ButtonMedium from '../components/ButtonMedium';
import { UserContext } from '../context/userContext';

const Login = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const handleSubmit = (values) => {
    console.log('values: ', values);
    dispatch({
      type: 'LOGIN_SUCCESS',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Login</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="grey"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />

            <View style={styles.btnLogin}>
              <ButtonMedium text="Sign In" onPress={props.handleSubmit} />
            </View>
            <TouchableOpacity>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate('Register')}
              >
                Don't have an account? Click here
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
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
  btnLogin: {
    alignItems: 'center',
    marginTop: 25,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Login;
