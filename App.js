import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from './components/Homescreen';
import Parksidemenu from './components/Parksidemenu';
import Hillsidemenu from './components/Hillsidemenu';
import Beachsidemenu from './components/Beachsidemenu';

const App = createStackNavigator({
    Homescreen: { screen: Homescreen },
    Parksidemenu: { screen: Parksidemenu },
    Hillsidemenu: { screen: Hillsidemenu },
    Beachsidemenu: { screen: Beachsidemenu },
    initialRouteName: 'Homescreen',
});

export default createAppContainer(App);
