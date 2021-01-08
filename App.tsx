import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import MeuHeader from "./components/meu-header";
import ListaItens from "./components/listaItens";
import styled from "styled-components";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/home";
import LoginScreen from "./components/login";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} initialParams={{navigation: NavigationContainer}} />
                <Stack.Screen name="Login" options={{headerShown: false, title: ''}} component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
