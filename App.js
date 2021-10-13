import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from './components/Homescreen';
import Parksidemenu from './components/Parksidemenu';
import Hillsidemenu from './components/Hillsidemenu';
import Beachsidemenu from './components/Beachsidemenu';

const App = createStackNavigator({
    Homescreen: {
        screen: Homescreen,
        navigationOptions: () => ({
            header: null,
        }),
    },
    Parksidemenu: {
        screen: Parksidemenu,
        navigationOptions: () => ({
            title: 'Parkside Menu',
            // headerBackTitle: 'Back',
        }),
    },
    Hillsidemenu: {
        screen: Hillsidemenu,
        navigationOptions: () => ({
            title: 'Hillside Menu',
            // headerBackTitle: 'Back',
        }),
    },
    Beachsidemenu: {
        screen: Beachsidemenu,
        navigationOptions: () => ({
            title: 'Beachside Menu',
            // headerBackTitle: 'Back',
        }),
    },
    initialRouteName: 'Homescreen',
});

export default createAppContainer(App);
