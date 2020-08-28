import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
// import { Icon } from 'react-native-elements'
export default function DetailsContent(props) {const [selectedValue, setSelectedValue] = useState("java");
    const base_dir = "https://www.sortez.org/";
    const image_dir = base_dir+"application/resources/front/photoCommercant/imagesbank/";
    const agenda = props.agenda.article;
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
    function goBack(){
        navigation.goBack();
    }
    if(typeof(agenda) != "undefined"){
        const src_iframa = "https://maps.google.fr/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;q="+agenda.organiser_name+" ("+agenda.ville+")  "+agenda.adresse_localisation+", "+agenda.codepostal_localisation+" &nbsp;&amp;aq=0&amp;ie=UTF8&amp;hq=&amp;hnear="+agenda.adresse_localisation+", "+agenda.codepostal_localisation+" &nbsp;&amp;t=m&amp;vpsrc=0&amp;output=embed"
        var details = 
        <View>
            <TouchableOpacity style={[styles.btnBack]} onPress={()=>goBack()}>
                <Text style={[styles.btnBackTxt]}>Retour Liste</Text>
            </TouchableOpacity>
            <Image style={{height: 250, width: "100%"}} source={{uri:agenda.photo1}} />
            <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>{agenda.nom_manifestation}</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>{agenda.date_debut}</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>{agenda.NomSociete} ({agenda.ville})</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>{agenda.adresse_localisation} - {agenda.codepostal_localisation} - {agenda.ville}</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>Tél. {agenda.telephone}</Text>
            <Text style={[styles.paddingTop_10,styles.textCenter]}>{agenda.description}</Text>
            <View style={[styles.border_solid,styles.padding_5]}>
                <Text style={[styles.textCenter,styles.txt_underline,styles.bold]}>Contact & informations:</Text>
                <Text style={[styles.textCenter]}>Evénement organisé par {agenda.organiser_name}</Text>
                <Text style={[styles.textCenter]}>{agenda.organiser_codePostal} - {agenda.organiser_adress}</Text>
                <Text style={[styles.textCenter]}>Tel : {agenda.organiser_telephone}</Text>
            </View>
            <View style={[styles.border_solid,styles.padding_5,styles.marginTop_10]}>
                <Text style={[styles.textCenter,styles.txt_underline,styles.bold]}>ADRESSE & PLAN D'ACCÈS:</Text>
                <Text style={[styles.textCenter]}>{agenda.organiser_name} ({agenda.ville}) - {agenda.adresse_localisation} - {agenda.codepostal_localisation} - {agenda.ville} </Text>
                {/* <WebView
                source={{html: '<iframe src="'+src_iframa+'" width="100%" height="100%"></iframe>'}}
                style={{marginTop: 20,width:"100%",height:250}}
                /> */}
            </View>
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