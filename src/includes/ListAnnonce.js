import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList,ActivityIndicator,Linking} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
import { useNavigation } from '@react-navigation/native';

// import { Icon } from 'react-native-elements'
export default function Filtre(props) {const [selectedValue, setSelectedValue] = useState("java");
    const base_dir = "https://www.sortez.org/";
    const image_dir = base_dir+"application/resources/front/photoCommercant/imagesbank/";
    const agenda = props.agenda.toAnnonce;
    const navigation = useNavigation();

    function goDetails(id,nom_url){
        // detail_annonce_commercants/261
        // if(parseInt(id)>0){
        //     navigation.navigate("DetailsBoutique",{
        //         idEvent: id,
        //         rubrique: props.rubrique,
        //     });
        // }
        var url_complete = base_dir+nom_url+"/detail_annonce_commercants/"+id;
        Linking.openURL(url_complete).catch((err) => console.error('An error occurred', err));
    }
    if(typeof(agenda) !='undefined'){
        var bouclecommune = 
            <FlatList style={[filstreStyle.w_100]}
                    data={agenda}
                    renderItem={({item}) => (
                    <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                        <View style={[filstreStyle.w_100]} >
                            <Image  style={{height: 250, width: "100%"}}
                                source={{uri: base_dir+item.photo_link}}
                            />
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100,styles.categ_bg]}>
                            
                            </View>
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100]}>
                                <Text style={ListeStyle.txt_categ}>{item.NomSociete}</Text>
                            </View>
                        </View>
                        <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                            <Text style={ListeStyle.ville_txt}>{item.texte_courte}</Text>
                            <Text style={ListeStyle.ville_txt}><Text style={ListeStyle.titre_event}>{item.prixtoview}</Text> Etat : {item.etat}</Text>
                            <Text style={ListeStyle.adresse_txt}>{item.quartier}</Text>
                            <Text style={ListeStyle.ville_txt}>{item.NomSociete} , {item.ville}</Text>
                            <Text style={ListeStyle.ville_txt}>{item.count}</Text>
                            <TouchableOpacity onPress={()=>goDetails(item.annonce_id,item.nom_url)} style={[styles.paddingTop_10,styles.paddingBottom10]}>
                                <Image style={[ListeStyle.btn_details]} source={{uri:"https://www.sortez.org/mobile-test/wpimages/wp0958361f_06.png"}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                   )}
                   keyExtractor={item => item.id}
            />   
    }else{
        var bouclecommune = <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" />
    }
    
    return(
        <View style={[filstreStyle.sub_container]}>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                {bouclecommune}
                </View>
            </View>
        </View>
    )
}