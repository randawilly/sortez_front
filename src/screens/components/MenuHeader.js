import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MenuHeader = () => {
    
    const navigation = useNavigation();
  return(
    <View>
        <View style={styles.ViewstyleHead}>
            <View style={styles.ViewOneStyle} >
                <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Dashboard')} >
                    <Icon name="navicon" size={40} color={'white'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.ViewTwoStyle}>
                <Image
                    style={styles.logoImg}
                    source={require("../../../assets/img/logo_right.png")}
                />
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    ViewOneStyle:{
        height:50,
        width:'50%',
      },
      ViewTwoStyle:{
        height:50,
        width:'50%',
        alignItems:'flex-end'
      },
      ViewstyleHead:{
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 15 },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 15,
            height: 80,
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'#ff0793'
      },
      logoImg:{
        width:70,
        height:50,
        marginRight:10,
        marginBottom:10,
        marginTop:20,
      },
      btnMenu:{
          paddingLeft: 15,
          paddingTop:30
      }
});
export default MenuHeader;
