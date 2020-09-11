import React,{useState} from 'react';
import {Image, Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';

export default function ListeClient() {
    
    const navigation = useNavigation();
    const [motcle, setmotcle] = useState("");
    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    
    return (
            
    <ScrollView>
        <View style={styles.container}>
            <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                <Text style={[styles.title_black,styles.paddingBottom10]}>LISTE DE MES CLIENTS ET SELECTION DES DESTINAITAIRE</Text>
            </View>
            <View style={[styles.row]}>
                <View style={[styles.w_50,styles.paddingRight_10]}>
                    <TouchableOpacity style={[styles.btnVertContCLient]}>
                        <Text style={[styles.btnVertContTextClient]}>ANNIVERSAIRE</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.w_50,styles.paddingLeft_10]}>
                    <TouchableOpacity style={[styles.btnVertContCLient]}>
                        <Text style={[styles.btnVertContTextClient]}>FILTRER</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.row,styles.paddingTop_10]}>
                <View style={[styles.w_50,styles.paddingRight_10]}>
                    <View style={[styles.btnVertContCLient]}>
                        <View style={[styles.row,styles.w_75,styles.paddingTop_10,styles.paddingBottom10,styles.paddingLeft_10]}>
                            <TextInput
                                value={motcle}
                                style={styles.searchCLient}
                                placeholder="RECHERCHER"
                                placeholderTextColor="black"
                                onChangeText={(text) => { setmotcle(text);}} />
                            <TouchableOpacity style={[styles.paddingTop_5,styles.paddingLeft_10]}>
                                <Text style={[styles.btnOkSearch]}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.w_50,styles.paddingLeft_10]}>
                    <TouchableOpacity style={[styles.btnVertContCLient]}>
                        <Text style={[styles.btnVertContTextClient]}>TOUT SELECTIONNER</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.row,styles.paddingTop_10]}>
                <View style={[styles.w_50,styles.paddingRight_10]}>
                    <TouchableOpacity style={[styles.btnVertContCLient]}>
                        <Text style={[styles.btnVertContTextClient]}>IMPRIMER</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.w_50,styles.paddingLeft_10]}>
                    <TouchableOpacity style={[styles.btnVertContCLient]}>
                        <Text style={[styles.btnVertContTextClient]}>EXPORT CSV</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.row,styles.paddingTop_10]}>
                <View style={[filstreStyle.w_100,styles.paddingRight_10]}>
                    <TouchableOpacity style={[styles.btnVertContCLient]}>
                        <Text style={[styles.btnVertContTextClient]}>ADRESSER DES EMAILS OU SMS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.bg_black,styles.barreBlack,filstreStyle.w_100,styles.marginTop_20]}>
            </View>
            <View style={[filstreStyle.w_100,styles.marginTop_20,styles.row]}>
                <View style={[styles.alignCenter]}>
                    <Text style={[styles.txt_nom_black]}>Michel Martin</Text>
                    <Text style={[styles.txt_nom_black]}>Nice</Text>
                </View>
                <View style={[styles.float_right,styles.w_20]}>
                    <Image resizeMode={'contain'} style={[styles.img]} source={require('../../../assets/imgpro/settingBtn.png')} />
                </View>
            </View>
            <View style={[filstreStyle.w_100,styles.marginTop_20]}>
                <View style={[styles.row]}>
                    <View style={[styles.w_75,styles.bg_red,styles.padding_10]}>
                        <Text style={[styles.txt_white]}>7</Text>
                    </View>
                    <View style={[styles.w_25,styles.bg_blue,styles.padding_10]}>
                        <Text style={[styles.txt_white,styles.text_right]}>10</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.paddingTop,styles.txt_nom_black]}>1 produit acheté = 1 produit offert</Text>
            <View style={[filstreStyle.w_100,styles.marginTop_20]}>
                <View style={[styles.row]}>
                    <View style={[filstreStyle.w_100,styles.bg_red,styles.padding_10]}>
                        <Text style={[styles.txt_white]}>7</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.paddingTop,styles.txt_nom_black]}>Bon à imprimer : 20% de remise</Text>
            <View style={[filstreStyle.w_100,styles.marginTop_20,]}>
                <View style={[styles.row]}>
                    <View style={[filstreStyle.w_100,styles.bg_red,styles.padding_10]}>
                        <Text style={[styles.txt_white]}>7</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.bg_black,styles.barreBlack,filstreStyle.w_100,styles.marginTop_20]}>
            </View>
            <View style={[filstreStyle.w_100,styles.marginTop_20,styles.row]}>
                <View style={[styles.alignCenter]}>
                    <Text style={[styles.txt_nom_black]}>Michel Martin</Text>
                    <Text style={[styles.txt_nom_black]}>Nice</Text>
                </View>
                <View style={[styles.float_right,styles.w_20]}>
                    <Image resizeMode={'contain'} style={[styles.img]} source={require('../../../assets/imgpro/settingBtn.png')} />
                </View>
            </View>
            <View style={[filstreStyle.w_100,styles.marginTop_20]}>
                <View style={[styles.row]}>
                    <View style={[styles.w_75,styles.bg_red,styles.padding_10]}>
                        <Text style={[styles.txt_white,styles.font20]}>7</Text>
                    </View>
                    <View style={[styles.w_25,styles.bg_blue,styles.padding_10]}>
                        <Text style={[styles.txt_white,styles.font20,styles.text_right]}>10</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.paddingTop,styles.txt_nom_black]}>1 produit acheté = 1 produit offert</Text>
            <View style={[filstreStyle.w_100,styles.marginTop_20]}>
                <View style={[styles.row]}>
                    <View style={[filstreStyle.w_100,styles.bg_red,styles.padding_10]}>
                        <Text style={[styles.txt_white,styles.font20]}>7</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.paddingTop,styles.txt_nom_black]}>Bon à imprimer : 20% de remise</Text>
            <View style={[filstreStyle.w_100,styles.marginTop_20,]}>
                <View style={[styles.row]}>
                    <View style={[filstreStyle.w_100,styles.bg_red,styles.padding_10]}>
                        <Text style={[styles.txt_white,styles.font20]}>7</Text>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>

    );
}