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
import About from 'components/About';
import Icon from 'react-native-vector-icons/FontAwesome';


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
    List: { screen: List },
    About: { screen: About}
},{
    navigationOptions: ({ navigation }) =>{
        return {
            tabBarIcon: ({ tintColor }) => {
                const route = navigation.state.routeName
                const name = {
                    'List': 'list',
                    'About': 'info-circle'
                }[route];

                return <Icon name={name} color={tintColor} size={22} />
            },
            tabBarOptions: {
                activeBackgroundColor: '#E6F0FA'
            }
        }
    }
})