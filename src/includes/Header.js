import React, { Component } from 'react';
import {
  View,
  Platform,
  TextInput,
  Text,
  Image,
} from 'react-native';
import {styles} from '../style/Style';
import{filstreStyle} from '../style/FiltreStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
  const navigation = useNavigation();
  function goMenu() {
    navigation.navigate("Home",{
        rubrique: "agenda",
        txt_rubrique: "L'Agenda événementiel",
      });
}
  return (
        <View style={[styles.containerNopadding]}>
          <Image resizeMode={'contain'} style={styles.logo_home} source={require('../../assets/imgs/header_rapide.png')} />
          <View style={[styles.btnHomeMenu]}>
            <TouchableOpacity onPress={()=>goMenu()} style={[filstreStyle.w_100,filstreStyle.heighted]}></TouchableOpacity>
          </View>
        </View>
      )
}