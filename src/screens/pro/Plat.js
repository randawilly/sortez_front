import React from 'react';
import {Image, Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';
import Headerpro from '../../includes/Headerpro';

export default function Plat() {
    
    const navigation = useNavigation();

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    
    return (
        <View style={{flex: 1,}}>
        <View style={styles.headerHeight}>
        <Headerpro />     
        </View>   
    <ScrollView>
        <View style={styles.container}>
            <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                <Text style={[styles.title_black,styles.paddingBottom10]}>Reservations des Plats du jour</Text>
            </View>
            <View style={[styles.row]}>
                <View style={[styles.w_50,styles.paddingRight_10]}>
                    <TouchableOpacity style={[styles.btnVertCont]}>
                        <Text style={[styles.btnVertContText]}>IMPRIMER</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.w_50,styles.paddingLeft_10]}>
                    <TouchableOpacity style={[styles.btnVertCont]}>
                        <Text style={[styles.btnVertContText]}>EXPORT CSV</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.bg_black,filstreStyle.w_100,styles.marginTop_20,styles.row]}>
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/closeblack.png')} />
                <Text style={[styles.txt_white,styles.paddingTop_5,]}>PLAT DU JOUR : MARDI 8 JANVIER</Text>
                <Image resizeMode={'contain'} style={styles.img,styles.w_20,styles.float_right} source={require('../../../assets/imgpro/flechedown.png')} />
            </View>
            <View style={[filstreStyle.w_100,styles.marginTop_20,styles.row_reverse]}>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>8</Text>
                    <Text style={[styles.textCenter]}>Nbre {"\n"} plats</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>12</Text>
                    <Text style={[styles.textCenter]}>Nbre {"\n"} pers</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_red]}>2</Text>
                    <Text style={[styles.textCenter]}>Solde</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter,styles.float_left]}>
                    <Text style={[styles.txt_box_white]}>   </Text>
                    <Text style={[styles.textCenter]}>Nom</Text>
                </View>
            </View>
            <View style={styles.containerNormBgWhite}>
                <View style={styles.row}>
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/profilBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/settingBtn.png')} />
                </View>
            </View>
            <View style={[filstreStyle.w_100,styles.row_reverse]}>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>8</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>12</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter,styles.float_left]}>
                    <Text style={[styles.txt_nom_black]}>Michel Martin : 11h30</Text>
                </View>
            </View>
            <View style={styles.containerNormBgWhite}>
                <View style={styles.row}>
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/profilBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/settingBtn.png')} />
                </View>
            </View>
            <View style={[filstreStyle.w_100,styles.row_reverse]}>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>8</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>12</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter,styles.float_left]}>
                    <Text style={[styles.txt_nom_black]}>Michel Martin : 11h30</Text>
                </View>
            </View>
            <View style={styles.containerNormBgWhite}>
                <View style={styles.row}>
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/profilBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                    <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/settingBtn.png')} />
                </View>
            </View>
            <View style={[filstreStyle.w_100,styles.row_reverse]}>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>8</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter]}>
                    <Text style={[styles.txt_box_green]}>12</Text>
                </View>
                <View style={[styles.paddingLeftRight_10,styles.alignCenter,styles.float_left]}>
                    <Text style={[styles.txt_nom_black]}>Michel Martin : 11h30</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    </View>
    );
}