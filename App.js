import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/config/store';

import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default connect(null, null)(App);
