import React,{useEffect,useState} from 'react';
import { Text,Image, View, Button,ScrollView,Dimensions,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../includes/Header'; 

export default function ValidVisit({route}) {
    const navigation = useNavigation();
    const cardInfo = route.params.infoCom;

    const [subcateg, setSubcateg] = useState("");
    const [nbPage, setNbPage] = useState(1);
    const [isLoadingList, setLoadingList] = useState(false);
    const txt_rubrique = "Valider une visite"
    function goBack(){
        navigation.goBack();
    }
    function scanQrCode(){
        alert('okok');
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
                                {/* <Image style={[styles.img,styles.qr_image]} resizeMode={'contain'} source={{uri:"https://www.sortez.org/application/resources/front/images/cards/qrcode_464275.png"}} /> */}
                                <TouchableOpacity onPress={()=>scanQrCode()} style={[styles.bouton_rose_back]}>
                                    <Text style={styles.text_bouton}>Scanner le QR CODE</Text>
                                </TouchableOpacity>
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