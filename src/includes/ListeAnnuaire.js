import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
// import { Icon } from 'react-native-elements'
export default function Filtre(props) {const [selectedValue, setSelectedValue] = useState("java");
    const base_dir = "https://www.sortez.org/";
    const image_dir = base_dir+"application/resources/front/photoCommercant/imagesbank/";
    const commercant = props.commercant.toCommercant;
    if(typeof(commercant) !='undefined'){
        var bouclecommune = 
            <FlatList style={[filstreStyle.w_100]}
                    data={commercant}
                    renderItem={({item}) => (
                    <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                        <View style={[filstreStyle.w_100]} >
                            <Image  style={{height: 250, width: "100%"}}
                                source={{uri:item.Photo1}}
                            />
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100,styles.categ_bg]}>
                            
                            </View>
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100]}>
                                <Text style={ListeStyle.txt_categ}>{item.categorie}</Text>
                            </View>
                        </View>
                        <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                            <Text style={ListeStyle.titre_event}>{item.subctaeg}</Text>
                            <Text style={ListeStyle.date_debut_fin}>{item.titre}</Text>
                            <Text style={ListeStyle.adresse_txt}>{item.ville_nom}</Text>
                            {item.description != null ? <Text numberOfLines={4} style={ListeStyle.ville_txt}>{item.description}</Text>: (
                            <Text style={ListeStyle.ville_txt}>Pas de contenue</Text>
                            )}
                            <TouchableOpacity style={[styles.paddingTop_10]}>
                                <Image style={[ListeStyle.btn_details]} source={{uri:"https://www.sortez.org/mobile-test/wpimages/wp0958361f_06.png"}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                   )}
                   keyExtractor={item => item.id}
            />   
    }
    
    return(
        <View style={[filstreStyle.sub_container,styles.paddingTop]}>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                {bouclecommune}
                </View>
            </View>
        </View>
    )
}