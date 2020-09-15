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
    TouchableOpacity,
    Button,
    Picker
} from 'react-native';

import Autocomplete from 'react-native-autocomplete-input';
import RadioButtonRN from 'radio-buttons-react-native';
import DropDownPicker from 'react-native-dropdown-picker';


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
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    textInput: {
      width: 200,
      borderColor: 'black',
  
    },
    autocompleteContainer: {
      backgroundColor: '#ffffff',
      borderWidth: 0,
    },
    descriptionContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    itemText: {
      fontSize: 15,
      paddingTop: 5,
      paddingBottom: 5,
      margin: 2,
    },
    infoText: {
      textAlign: 'center',
      fontSize: 16,
    },
    viewStyle: {
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      width: "92%",
      justifyContent: "space-between",
      alignItems: "center"
    },
    itemStyle: {
      fontSize: 10,
      fontFamily: "Roboto-Regular",
      color: "#007aff"
    },
    pickerStyle: {
      width: "100%",
      height: 40,
      color: "#007aff",
      fontSize: 14,
      fontFamily: "Roboto-Regular"
    },
    textStyle: {
      fontSize: 14,
      fontFamily: "Roboto-Regular"
    }
  });



class SignUpDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        id: null,
        isAdmin: false,
        isUsersFromAdmin: false,
        dataUpdateTemp: false,
        isCustomer: false,
        isSales: false,
        isSupport: false,
        isOpen: false,
        addModalShow: false,
        isCompany: false,
        editCustomer: false,
        showLabelCompany: true,
        checkIfReg: true,
        dataUpdate: false,
        updatePopup: false,
        imagePreviewUrl: null,
        imagePreviewUrl2: null,
        message: '',
        isCreate: false,
        file1Obj: [],
        fileTemp: '',
        backSupportFromInfo: 'support',
        backCustomerAdmin: 'customer',
        editInfoShow: '',
        isSignUp: false,
        checkIfChangeSub: '',
        signUpData: {
            first_name: '',
            last_name: '',
            phone: '',
            fax: '',
            email: '',
            password: '',
            confirmPassword: '',
            city: '',
            street: '',
            postal_code: '',
            type: '',
            companyname: '',
            companyphone: '',
            company_t_phone: '',
            companyemail: '',
            code: '',
            companyfax: '',
            companycity: '',
            companystreet: '',
            company_postal_code: '',
            email_notification: 1,
            subscription: 'regular',
            sms_notification: 0,
            companytype: 'חברה בע"מ',
        },
        file1: null,
        file2: null,
        file3: null,
        selectedCity: '',
        selectedCityCompany: '',
        defaultCity: '',
        code: '',
        backAfterSignUp: false,
        saleRedirect: false,
        adminRedirect: false,
        base64: 'data:image/jpg;base64,uploads\\3265485bf68840182f21943f5ec8848d=',
        formState: {},
        formMessages: {},
        validityState: {},
        msgErrorCode: '',
        changeSubscription: false,
        showEmailValidate: false,
        isUpdateRegular: false,
        inputFiles: [],
        selectedFileValidate: '',
        inputsFilesArray: [],
        username: "",
        item: [],
        filesArrayShow: [],
        fileCompany: [],
        idCompanyFile: '',
        showSms: false,
        homePageRegister: false,
        cities: [{name: 'acre', title: 'acre'}],
        query: '',
        selectedClient: "",
        clientTypes: [
          {
            itemName: "Samsung M20"
          },
          {
            itemName: "Nokia"
          },
          {
            itemName: "חברה"
          },
          {
            itemName: "Samsung M23"
          }
          ]

      }
  }

  isCompanyOrNo = value => {
    if (value === 'חברה') {
        this.setState({ isCompany: true })
    } else {
        this.setState({ isCompany: false })
    }
}

  async onValueChangeCat(value) {
    this.setState({ selectedClient: value });
    this.isCompanyOrNo(value)
  }

  componentDidMount() {
    //First method to be called after components mount
    //fetch the data from the server for the suggestion
    // fetch(`${API}/films/`)
    //   .then(res => res.json())
    //   .then(json => {
    //     const { results: cities } = json;
    //     this.setState({ cities });
    //     //setting the data in the films state
    //   });
  }

  findCity(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }
 
    const { cities } = this.state;
    //making a case insensitive regular expression to get similar value from the cities json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered city array according the query from the input
    return cities.filter(city => city.title.search(regex) >= 0);
  }

  companyTypes = [
    {
      label: 'חברה בע"מ'
     },
     {
      label: 'עוסק מורשה'
     }
    ];
render() {
  const { query } = this.state;
    const cities = this.findCity(query);
    const comp = (a, b) => a.trim() === b.trim();
    
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text>פרטים אישיים</Text>
        <TextInput style={styles.textInput} placeholder="שם פרטי"></TextInput>
        <TextInput style={styles.textInput} placeholder="שם משפחה"></TextInput>
        <TextInput style={styles.textInput} placeholder="נייד"></TextInput>
        <TextInput style={styles.textInput} placeholder="פקס"></TextInput>
        <TextInput style={styles.textInput} placeholder="דוא'ל"></TextInput>
        <TextInput style={styles.textInput} placeholder="סיסמה"></TextInput>
        <TextInput style={styles.textInput} placeholder="אשר סיסמה"></TextInput>

        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={cities.length === 1 && comp(query, cities[0].title) ? [] : cities}
          //default value if you want to set something in input
          defaultValue={query}
          /*onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions*/
          onChangeText={text => this.setState({ query: text })}
          placeholder="יישוב"
          style={styles.textInput}
                    renderItem={({ item }) => (
            //you can change the view you want to show in suggestion from here
            <TouchableOpacity onPress={() => this.setState({ query: item.title })}>
              <Text style={styles.itemText}>
                {item.title} 
              </Text>
            </TouchableOpacity>
          )}
        />
                <TextInput style={styles.textInput} placeholder="רחוב"></TextInput>
        <TextInput style={styles.textInput} placeholder="מיקוד"></TextInput>
      
  <View style={styles.viewStyle}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.textStyle}>סוג לקוח</Text>
        </View>
        <View style={{ flex: 0.7, fontSize: 14 }}>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedClient}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
            {this.state.clientTypes.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>
        </View>
      </View>
      </View>

      {this.state.isCompany ? <View>
        <Text style={styles.textInput}>פרטי החברה</Text>
        <RadioButtonRN
  data={this.companyTypes}
  selectedBtn={(e) => console.log(e)}
/>
<TextInput style={styles.textInput} placeholder="שם חברה"></TextInput>
        <TextInput style={styles.textInput} placeholder="נייד"></TextInput>
        <TextInput style={styles.textInput} placeholder="טלפון"></TextInput>
        <TextInput style={styles.textInput} placeholder="דוא'ל"></TextInput>
        <TextInput style={styles.textInput} placeholder="פקס"></TextInput>
        <TextInput style={styles.textInput} placeholder="ח.פ"></TextInput>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={cities.length === 1 && comp(query, cities[0].title) ? [] : cities}
          //default value if you want to set something in input
          defaultValue={query}
          /*onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions*/
          onChangeText={text => this.setState({ query: text })}
          placeholder="יישוב"
          style={styles.textInput}
                    renderItem={({ item }) => (
            //you can change the view you want to show in suggestion from here
            <TouchableOpacity onPress={() => this.setState({ query: item.title })}>
              <Text style={styles.itemText}>
                {item.title} 
              </Text>
            </TouchableOpacity>
          )}
        />
                <TextInput style={styles.textInput} placeholder="רחוב"></TextInput>
        <TextInput style={styles.textInput} placeholder="מיקוד"></TextInput>
        <Text style={styles.textInput}>מעוניין בהתראות בדוא"ל?</Text>
        <RadioButtonRN
  data={['כן','לא']}
  selectedBtn={(e) => console.log(e)}
/>

      </View>: <View/> }


    </ScrollView>

  )
}
}




// SignUpDetails.contextType = CompanyContext;

export default SignUpDetails;