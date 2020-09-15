
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../mainScreens/Login'
import Home from '../mainScreens/Home'
import SignUpDetails from '../mainScreens/SignUpDetails'
import ResetPassword from '../mainScreens/ResetPassword'





const screens = {
    Home:{
        screen: Home
    },
    Login:{
        screen: Login
    },
    SignUpDetails:{
        screen: SignUpDetails
    },
    ResetPassword:{
        screen: ResetPassword
    }
}
const homeStack = createStackNavigator(screens);


export default createAppContainer(homeStack)