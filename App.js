/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from "react-navigation";
import RestaurantList from "./src/components/RestaurantList";


export default createStackNavigator({
    Home: { screen: RestaurantList}
})