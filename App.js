/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import RestaurantList from "./src/components/RestaurantList";
import RestaurantInfo from "./src/components/RestaurantInfo";

const List = createStackNavigator({
    Home: { screen: RestaurantList },
    Info: { screen: RestaurantInfo }
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0066CC',
            color: '#FFF'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            color: '#FFF'
        }
    }
});

export default createBottomTabNavigator({
    List: { screen: List }
})