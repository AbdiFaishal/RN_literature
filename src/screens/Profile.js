import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ButtonMedium from '../components/ButtonMedium';
import Header from '../components/Header';
import { UserContext } from '../context/userContext';

const Profile = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const openMenu = () => {
    navigation.openDrawer();
  };

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <View style={styles.container}>
      <Header openMenu={openMenu} />
      <View style={styles.userProfile}>
        <Image
          style={styles.userPicture}
          source={require('../../assets/images/profilePic.png')}
        />
        <View style={styles.userInfo}>
          <Text style={styles.text}>Nama : Abdi Faishal</Text>
          <Text style={styles.text}>Email : abdi.faishal@gmail.com</Text>
          <Text style={styles.text}>Gender : Male</Text>
          <Text style={styles.text}>Address : Cileungsi</Text>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <ButtonMedium text="Logout" onPress={handleLogout} />
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
  userProfile: {
    marginTop: 15,
    alignItems: 'center',
  },
  userPicture: {
    width: 200,
    borderRadius: 100,
    // resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  userInfo: {
    textAlign: 'center',
    paddingVertical: 15,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  logoutContainer: {
    alignItems: 'center',
  },
});

export default Profile;
