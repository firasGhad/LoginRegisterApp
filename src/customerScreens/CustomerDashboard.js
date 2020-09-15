import React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
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
  });

class SignUpDetails extends React.Component {
    

    render() {
    
        return (

            <View style={styles.container}>
            <Text>customer</Text>
          </View>

        )
    }
}

// SignUpDetails.contextType = CompanyContext;

export default SignUpDetails;