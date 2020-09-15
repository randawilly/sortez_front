import React from 'react';
import {Image, Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';
import Headerpro from '../../includes/Headerpro';

export default function Reservationhebergenment() {
    
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
        <View style={[styles.padding_bottom_after,styles.container]}>
            <View style={[styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                <Text style={[styles.title_black,styles.paddingBottom10]}>DEMANDE DE RESERVATION HEBERGEMENT</Text>
            </View>
            <View style={styles.container_btn}>
                <TouchableOpacity style={[styles.Btn_green,styles.margleft_right]}>
                        <Text style={styles.btnText}>CLASSEMENT PAR DATE DEMANDE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container_btn}>
                <TouchableOpacity style={[styles.Btn_green,styles.margleft_right]}>
                        <Text style={styles.btnText}>CLASSEMENT PAR DATE DEBUT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container_btn}>
                <View style={styles.row}>
                    <View style={styles.w_45}>
                        <TouchableOpacity style={styles.Btn_green}>
                                <Text style={styles.btnText}>IMPRIMER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.w_45}>
                        <TouchableOpacity style={styles.Btn_green}>
                                <Text style={styles.btnText}>EXPORT CSV</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.container_pro}>
            <View style={[styles.border_black]}>

            </View>
            <View style={{fontSize:15,textAlign:"left"}}>
                <Text style={styles.title_black_pro}>Michel Martin</Text>
            </View>
        </View>

        <View style={[styles.container]}>
            <View style={[styles.row]}>
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/croix.png')} />
            </View>
        </View>

        <View style={styles.container_pro}>
            <Text style={styles.txt_black_pro}>Date demande : 08/09/2020</Text>
            <Text style={styles.txt_black_pro}>Date de début : 07/09/2020</Text>
            <Text style={styles.txt_black_pro}>Date de fin : 11/09/2020</Text>
            <Text style={styles.txt_black_pro}>Nbre de personnes adultes : 3</Text>
            <Text style={styles.txt_black_pro}>Nbre de personnes enfants : 1</Text>
            <Text style={styles.txt_black_pro}>Ville : Cagnes sur Mer</Text>
            <Text style={styles.txt_black_pro}>Commentaires :</Text>
            <Text style={styles.comment_black_pro}>Nullam lorem sapien, tempus ac, fringilla at, elementum sed, purus. Duis molestie pede. Vivamus quis odio sit amet libero</Text>
        </View>
        <View style={styles.container_pro}>
            <View style={[styles.border_black]}>

            </View>
            <View style={{fontSize:15,textAlign:"left"}}>
                <Text style={styles.title_black_pro}>Michel Martin</Text>
            </View>
        </View>

        <View style={[styles.container]}>
            <View style={[styles.row]}>
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/mailBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/phoneBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/smsBtn.png')} />
                <Image resizeMode={'contain'} style={styles.img,styles.w_20} source={require('../../../assets/imgpro/croix.png')} />
            </View>
        </View>

        <View style={styles.container_pro}>
            <Text style={styles.txt_black_pro}>Date demande : 08/09/2020</Text>
            <Text style={styles.txt_black_pro}>Date de début : 07/09/2020</Text>
            <Text style={styles.txt_black_pro}>Date de fin : 11/09/2020</Text>
            <Text style={styles.txt_black_pro}>Nbre de personnes adultes : 3</Text>
            <Text style={styles.txt_black_pro}>Nbre de personnes enfants : 1</Text>
            <Text style={styles.txt_black_pro}>Ville : Cagnes sur Mer</Text>
            <Text style={styles.txt_black_pro}>Commentaires :</Text>
            <Text style={styles.comment_black_pro}>Nullam lorem sapien, tempus ac, fringilla at, elementum sed, purus. Duis molestie pede. Vivamus quis odio sit amet libero</Text>
            <View style={[styles.border_black,styles.marginBottom]}>

            </View>
        </View>
        
    </ScrollView>
    </View>

    );
}