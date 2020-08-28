import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
import { useNavigation } from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';

// import { Icon } from 'react-native-elements'
export default function DetailsContentDealsFidelity(props) {const [selectedValue, setSelectedValue] = useState("java");
    const dealsF = props.agenda.details;
    const typeDeals = props.typeDeals;
    const navigation = useNavigation();
    if(typeof(dealsF) != "undefined"){

        if(typeDeals == "bonplan"){
            var img = dealsF.bonplan_photo1;
            var titre = dealsF.bonplan_titre;
            var description = <Text style={[styles.colorBlack,styles.textCenter,styles.paddingTop_10]}>{dealsF.bonplan_texte}</Text>;
            var txt_prix = <View>
                                <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Prix: {dealsF.prix_normbp}</Text>
                                <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Valeur: {dealsF.prix_remisebp}</Text>
                                <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Economie: {parseInt(dealsF.prix_remisebp)-parseInt(dealsF.prix_normbp)}</Text>
                            </View>
        }else{
            var img = dealsF.image;
            var titre = dealsF.titre;
            var txt_prix = <Text style={[styles.title_info,styles.textCenter]}>Valeur: {dealsF.prix}</Text>
            var description = <View>
                <Text style={styles.txt_fidelity1}>
                Avant de bénéficier de cette offre de fidélisation
                le consommateur doit posséder
                la carte privilège Sortez ©.
                </Text>
                <Text style={styles.txt_fidelity2}>
                Notre établissement est partenaire de la carte
                de fidélité multi-commerce Sortez©.
                Un concept fédérateur pour la dynamisation
                et la fidélisation du commerce et de l'artisanat
                </Text>
            </View>;
        }

        var details = 
        <View style={styles.w_100}>
            <TouchableOpacity style={[styles.btnBack]} onPress={()=>goBack()}>
                <Text style={[styles.btnBackTxt]}>Retour Liste</Text>
            </TouchableOpacity>
            <Image style={{height: 250, width: "100%"}} source={{uri:img}} />
            <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>{titre}</Text>
            {description}
            <Text style={[styles.textCenter]}>{txt_prix}</Text>
            <Text style={ListeStyle.label_date}>Il reste:</Text>
            <CountDown
                size={20}
                until={new Number((Math.round(new Date(dealsF.date_fin).getTime()/ 1000)) - (Math.round(new Date().getTime()/ 1000)))}
                onFinish={() => reinit_filter()}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#DC1A95'}}
                digitTxtStyle={{color: '#DC1A95'}}
                timeLabelStyle={{color: '#DC1A95', fontWeight: 'bold'}}
                separatorStyle={{color: '#DC1A95'}}
                timeToShow={['D','H', 'M', 'S']}
                timeLabels={{d:"Jours",h:"Heures",m: "Minutes", s: "secondes"}}

            />
        </View>
    }else{
        var details = 
        <View>
            <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" />
        </View>
    }
    function goBack(){
        navigation.goBack();
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