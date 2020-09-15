import React, { useState } from 'react';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 100,
  },
  logo: {
    width: 250,
    height: 100,

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginTop: 10,
    width: 200,

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textInput: {
    width: 200,
    borderColor: 'gray',

  }
});

export default class ResetPassword extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isSignUp: false,
      isReset: false,
      customerRole: false,
      adminCompanyRole: false,
      userCompanyRole: false,
      statusCookie: true,
      role: '',
      msg: '',
      dataLogIn: {
        email: '',
        password: ''
      }
    }
  }



  render() {

    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../public/ResetIcon.png')} style={styles.logo}></Image>
        </View>
        <Text>דוא"ל</Text>
        <TextInput style={styles.textInput}
          placeholder="דואר אלקטרוני!"
        ></TextInput>
        <View>
          <TouchableOpacity title='סיסמה' style={styles.appButtonContainer} >
            <Text style={styles.appButtonText}>סיסמה</Text></TouchableOpacity>
          <TouchableOpacity title='אשר סיסמה' style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>אשר סיסמה</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
