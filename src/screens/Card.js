import React,{useEffect,useState} from 'react';
import { Text,Image, View, Button,ScrollView,Dimensions,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import{filstreStyle} from '../style/FiltreStyle';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListeArtAg from '../includes/ListeArtAg';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Card({route}) {
    const navigation = useNavigation();
    const cardInfo = route.params.UserInfo;
    var imgSrc = "https://www.sortez.org/application/resources/front/images/cards/qrcode_"+cardInfo.card.virtual_card_img
    const txt_rubrique = route.params.txt_rubrique;

    const [subcateg, setSubcateg] = useState("");
    const [nbPage, setNbPage] = useState(1);
    const [isLoadingList, setLoadingList] = useState(false);
    function goBack(){
        navigation.goBack();
    }
    return (
        <View style={{flex: 1,}}>
        <View style={styles.headerHeight}>
        <Header />
        </View>
            <ScrollView>
            
                <View style={[styles.container]}>
                    <Text style={[styles.title_rubrique,styles.paddingBottom10]}>{txt_rubrique}</Text>
                    <View style={[filstreStyle.sub_container]}>
                            <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                                <Image style={[styles.img,styles.qr_image]} resizeMode={'contain'} source={{uri:"https://www.sortez.org/application/resources/front/images/cards/qrcode_464275.png"}} />
                                <Text style={[styles.textCenter,styles.title_info,styles.paddingTop]}>Carte n° {cardInfo.card.num_id_card_virtual} </Text>
                                <TouchableOpacity onPress={()=>goBack()} style={[styles.bouton_rose_back]}>
                                    <Text style={styles.text_bouton}>Retour</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
    
}