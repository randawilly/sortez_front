import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
import { useNavigation } from '@react-navigation/native';
// import { Icon } from 'react-native-elements'
export default function Filtre(props) {const [selectedValue, setSelectedValue] = useState("java");
    const base_dir = "https://www.sortez.org/";
    const image_dir = base_dir+"application/resources/front/photoCommercant/imagesbank/";
    const agenda = props.agenda.toAgenda;
    const navigation = useNavigation();
    const [pageNb, setNbPage] = useState(0);
    const [LoadingData, setLoadingData] = useState(false);
    function goDetails(id){

        if(parseInt(id)>0){
            navigation.navigate("DetailsArtAg",{
                idEvent: id,
                rubrique: props.rubrique,
                txt_rubrique: props.txt_rubrique
            });
        }

    }

    

    function setNewData(datas){
        props.changeAgenda([...props.agenda.toAgenda, ...datas.toAgenda]);
    }

    function convert_date_debut_fin(date_debut,date_fin){
        if(date_debut !="" && date_debut != null && typeof(date_debut) != undefined){
        var date_exploded = date_debut.split('-');
        if(date_exploded.length > 1){
            if(date_exploded[1] == "01"){
                var months = "Janvier";
            }
            if(date_exploded[1] == "02"){
                var months = "Février";
            }
            if(date_exploded[1] == "03"){
                var months = "Mars";
            }
            if(date_exploded[1] == "04"){
                var months =  "Avril";
            }
            if(date_exploded[1] == "05"){
                var months =  "Mai";
            }
            if(date_exploded[1] == "06"){
                var months =  "Juin";
            }
            if(date_exploded[1] == "07"){
                var months =  "Juillet";
            }
            if(date_exploded[1] == "08"){
                var months =  "Août";
            }
            if(date_exploded[1] == "09"){
                var months =  "Septembre";
            }
            if(date_exploded[1] == "10"){
                var months = "Octobre";
            }
            if(date_exploded[1] == "11"){
                var months =  "Novembre";
            }
            if(date_exploded[1] == "12"){
                var months =  "Decembre";
            }
            var date_debut_finished = date_exploded[2]+" "+ months+" "+ date_exploded[0];
            
        }
    }

    if(date_fin !="" && date_fin != null && typeof(date_fin) != undefined){
        var date_exploded_fin = date_fin.split('-');
        if(date_exploded_fin.length > 1){
            if(date_exploded_fin[1] == "01"){
                var months_fin = "Janvier";
            }
            if(date_exploded_fin[1] == "02"){
                var months_fin = "Février";
            }
            if(date_exploded_fin[1] == "03"){
                var months_fin = "Mars";
            }
            if(date_exploded_fin[1] == "04"){
                var months_fin =  "Avril";
            }
            if(date_exploded_fin[1] == "05"){
                var months_fin =  "Mai";
            }
            if(date_exploded_fin[1] == "06"){
                var months_fin =  "Juin";
            }
            if(date_exploded_fin[1] == "07"){
                var months_fin =  "Juillet";
            }
            if(date_exploded_fin[1] == "08"){
                var months_fin =  "Août";
            }
            if(date_exploded_fin[1] == "09"){
                var months_fin =  "Septembre";
            }
            if(date_exploded_fin[1] == "10"){
                var months_fin = "Octobre";
            }
            if(date_exploded_fin[1] == "11"){
                var months_fin =  "Novembre";
            }
            if(date_exploded_fin[1] == "12"){
                var months_fin =  "Decembre";
            }
            var date_fin_finished = date_exploded_fin[2]+" "+ months_fin+" "+ date_exploded_fin[0];
            
        }
    }
    if(typeof(date_debut_finished) !="undefined" && typeof(date_fin_finished) !="undefined" ){
        if(date_debut_finished == date_fin_finished){
            var date_debut_fin_finished = "Le "+date_debut_finished;
        }else{
            var date_debut_fin_finished ="Du " + date_debut_finished+" Jusqu'au "+date_fin_finished;
        }
    }
    if(typeof(date_debut_finished) !="undefined" && typeof(date_fin_finished) =="undefined" ){
        var date_debut_fin_finished = "Le "+date_debut_finished;
    }

    if(typeof(date_debut_fin_finished) !="undefined"){
        return date_debut_fin_finished;
    }

    }


    if(typeof(agenda) !='undefined'){
        var bouclecommune = 
            <FlatList style={[filstreStyle.w_100]}
                    data={agenda}
                    renderItem={({item}) => (
                    <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                        <View style={[filstreStyle.w_100]} >
                            <Image  style={{height: 250, width: "100%"}}
                                source={{uri:item.photo1}}
                            />
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100,styles.categ_bg]}>
                            
                            </View>
                            <View style={[styles.textCenter,styles.Pabsolute,filstreStyle.w_100]}>
                                <Text style={ListeStyle.txt_categ}>{item.category}</Text>
                            </View>
                        </View>
                        <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                            <Text style={ListeStyle.titre_event}>{item.nom_manifestation}</Text>
                            {item.datetime_debut ? <Text style={ListeStyle.date_debut_fin}>{convert_date_debut_fin(item.datetime_debut,item.datetime_fin)}</Text>: (
                            <Text style={ListeStyle.date_debut_fin}>{convert_date_debut_fin(item.date_debut,item.date_fin)}</Text>
                            )}
                            <Text style={ListeStyle.adresse_txt}>{item.adresse_localisation}</Text>
                            <Text style={ListeStyle.ville_txt}>{item.ville}</Text>
                            <TouchableOpacity onPress={()=>goDetails(item.id)} style={[styles.paddingTop_10,styles.paddingBottom10]}>
                                <Image style={[ListeStyle.btn_details]} source={{uri:"https://www.sortez.org/mobile-test/wpimages/wp0958361f_06.png"}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                   )}
                   keyExtractor={item => item.id}
                   onEndReachedThreshold={0.5}
                    onEndReached={() => {
                            props.loadArticle()
                    }}
            />   
    }else{
        var bouclecommune = <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" />
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