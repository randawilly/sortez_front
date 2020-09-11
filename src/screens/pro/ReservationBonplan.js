import React from 'react';
import {Image, Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';

export default function ReservationBonplan() {
    
    const navigation = useNavigation();

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    
    return (
            
        <ScrollView style={[styles.bg_pink]}>
        <View style={styles.containerPink}>
            <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                <Text style={[styles.title_white,styles.paddingBottom10]}>Liste des reservations des bonplans en cours</Text>
            </View>
            <View style={{borderColor:"white",borderWidth:2,width:"100%"}}>

            </View>
        </View>

        <View style={styles.containerNorm}>
            <View style={{fontSize:15,textAlign:"left"}}>
                <Text style={styles.txt_white}>Michel Martin</Text>
                <Text style={styles.txt_white}>Cagnes sur Mer</Text>
            </View>
        </View>

        <View style={styles.containerNorm}>
            <View style={styles.row}>
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/profilBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/settingBtn.png')} />
            </View>
        </View>

        <View style={styles.containerNorm}>
            <Text style={styles.txt_white}>Date dé réservation : 08/04/2016</Text>
            <Text style={styles.txt_white}>Date de visite : non précisée</Text>
            <Text style={styles.txt_white}>Nbre de personnes attachées : 3</Text>
            <Text style={styles.txt_white}>Offre à utiliser avant le : 31/12/2016</Text>
        </View>
        <View style={styles.containerPink}>
            <View style={{borderColor:"white",borderWidth:2,width:"100%"}}>

            </View>
        </View>
        <View style={styles.containerNorm}>
            <View style={{fontSize:15,textAlign:"left"}}>
                <Text style={styles.txt_white}>Michel Martin</Text>
                <Text style={styles.txt_white}>Cagnes sur Mer</Text>
            </View>
        </View>

        <View style={styles.containerNorm}>
            <View style={styles.row}>
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/profilBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/settingBtn.png')} />
            </View>
        </View>

        <View style={styles.containerNorm}>
            <Text style={styles.txt_white}>Date dé réservation : 08/04/2016</Text>
            <Text style={styles.txt_white}>Date de visite : non précisée</Text>
            <Text style={styles.txt_white}>Nbre de personnes attachées : 3</Text>
            <Text style={styles.txt_white}>Offre à utiliser avant le : 31/12/2016</Text>
        </View>
    </ScrollView>

    );
}