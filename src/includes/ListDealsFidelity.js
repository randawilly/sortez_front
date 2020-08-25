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
                                <Text style={ListeStyle.txt_categ}>{item.categorie}</Text>
                            </View>
                        </View>
                        <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                            <Text style={ListeStyle.ville_txt}>{item.NomSociete}</Text>
                            <Text style={ListeStyle.ville_txt}>{item.ville_nom}</Text>
                            <Text style={ListeStyle.adresse_txt}>{item.description}</Text>
                            <Text style={ListeStyle.ville_txt}>{item.remise} € {item.prix_normal} € </Text>
                            
                            <CountDown
                                size={30}
                                until={1000}
                                onFinish={() => alert('Finished')}
                                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                                digitTxtStyle={{color: '#1CC625'}}
                                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                separatorStyle={{color: '#1CC625'}}
                                timeToShow={['H', 'M', 'S']}
                                timeLabels={{m: null, s: null}}
                                showSeparator
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