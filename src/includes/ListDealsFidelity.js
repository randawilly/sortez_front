import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import CountDown from 'react-native-countdown-component';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
// import { Icon } from 'react-native-elements'
export default function ListeDealsFidelity(props) {const [selectedValue, setSelectedValue] = useState("java");
    const base_dir = "https://www.sortez.org/";
    const image_dir = base_dir+"application/resources/front/photoCommercant/imagesbank/";
    const agenda = props.agenda.toDealsFidelity;
    
function resetfilters(){
    setLoading2(true)
    fetch(url_reset_filter)
        .then((response) => response.json())
        .then((json) => changeAgenda(json))
        .catch((error) => console.error(error))
        .finally(() => resetall(false));
}

    if(typeof(agenda) !='undefined'){
        var bouclecommune = 
            <FlatList style={[filstreStyle.w_100]}
                    data={agenda}
                    renderItem={({item}) => (
                    <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                        <View style={[filstreStyle.w_100]} >
                            <Image  style={{height: 250, width: "100%"}}
                                source={{uri: item.image}}
                            />
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100,styles.categ_bg]}>
                            
                            </View>
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100]}>
                                <Text style={ListeStyle.txt_categ}>{item.categorie}</Text>
                            </View>
                        </View>
                        <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                            <Text style={ListeStyle.titre_event}>{item.NomSociete}</Text>
                            <Text style={ListeStyle.ville_txt}>{item.ville_nom}</Text>
                            <Text style={ListeStyle.desc_txt}>{item.description}</Text>
                            <Text style={ListeStyle.price_now}>{item.remise} € <Text style={ListeStyle.price_normal}>{item.prix_normal} € </Text> </Text>
                            <Text style={ListeStyle.label_date}>Il reste:</Text>
                            <CountDown
                                size={20}
                                until={new Number((Math.round(new Date(item.date_fin).getTime()/ 1000)) - (Math.round(new Date().getTime()/ 1000)))}
                                onFinish={() => reinit_filter()}
                                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#DC1A95'}}
                                digitTxtStyle={{color: '#DC1A95'}}
                                timeLabelStyle={{color: '#DC1A95', fontWeight: 'bold'}}
                                separatorStyle={{color: '#DC1A95'}}
                                timeToShow={['D','H', 'M', 'S']}
                                timeLabels={{d:"Jours",h:"Heures",m: "Minutes", s: "secondes"}}
            
                            />
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