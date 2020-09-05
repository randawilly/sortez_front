import React,{ useState } from 'react';
import {AsyncStorage } from 'react-native';

const isLogged = async () => {
    const value = await AsyncStorage.getItem('username');
    return value;
}
export {isLogged}