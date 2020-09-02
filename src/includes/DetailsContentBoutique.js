import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
import { useNavigation } from '@react-navigation/native';
import HTML from 'react-native-render-html';
import { SliderBox } from "react-native-image-slider-box";
// import { Icon } from 'react-native-elements'
export default function DetailsContentBoutique(props) {const [selectedValue, setSelectedValue] = useState("java");
    const agenda = props.agenda.boutique;
    const navigation = useNavigation();
    function goDetails(id){
        if(parseInt(id)>0){
            navigation.navigate("DetailsArtAg",{
                idEvent: id,
                rubrique: props.rubrique,
                txt_rubrique: props.txt_rubrique
            });
        }
    }
    if(typeof(agenda) != "undefined"){
        const slides = [ agenda.photo1,];
        if(agenda.photo2 !=null){
            slides[1]=agenda.photo2;
        }
        if(agenda.photo3 !=null){
            slides[2]=agenda.photo3;
        }
        if(agenda.photo4 !=null){
            slides[3]=agenda.photo4;
        }
        if(agenda.etat == "1"){
            var etat = "Neuf";
        }else if(agenda.etat =="0"){
            var etat = "Revente";
        }else{
            var etat = "Service";
        }

        if(agenda.module_paypal == "1"){
            var btn_pay = agenda.module_paypal_btnpaypal;
        }else{
            var btn_pay = "Paypal non disponible";
        }
        function goBack(){
            navigation.goBack();
        }
        var details = 
        <View style={styles.w_100}>
            <TouchableOpacity style={[styles.btnBack]} onPress={()=>goBack()}>
                <Text style={[styles.btnBackTxt]}>Retour Liste</Text>
            </TouchableOpacity>
            {/* <Image style={{height: 250, width: "100%"}} source={{uri:agenda.photo1}} /> */}
            <SliderBox circleLoop={true} autoplay={true} style={styles.slideImgAnnonce} resizeMode={'contain'} images={slides} />
            <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Désignation: {agenda.texte_courte}</Text>
            <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Tarif: € {agenda.prix_ancien}</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>Etat: {etat}</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>{agenda.NomSociete} ({agenda.ville})</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>{agenda.texte_longue}</Text>
            <HTML html={btn_pay} />
        </View>
    }else{
        var details = 
        <View>
            <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" />
        </View>
    }
    return(
        <View style={[filstreStyle.sub_container,styles.paddingTop]}>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                    {details}
                </View>
            </View>
        </View>
    )
}