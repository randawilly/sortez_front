import React, { Component } from 'react';
import {
  View,
  Platform,
  TextInput,
  Text,
  Image
} from 'react-native';
import {styles} from '../style/Style';
export default class Header extends Component {
  render() {
      return(
          <Image resizeMode={'contain'} style={styles.logo_home} source={require('../../assets/imgs/header_rapide.png')} />
      )
    }
}