import React,{useEffect,useState} from 'react';
import { Text,Image, View, Button,ScrollView,Dimensions,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListeArtAg from '../includes/ListeArtAg';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Card({route}) {

    const cardInfo = route.params.UserInfo;
    var imgSrc = "https://www.sortez.org/application/resources/front/images/cards/qrcode_"+cardInfo.card.virtual_card_img
    const txt_rubrique = route.params.txt_rubrique;

    const [subcateg, setSubcateg] = useState("");
    const [nbPage, setNbPage] = useState(1);
    const [isLoadingList, setLoadingList] = useState(false);
    
    return (
        <View style={{flex: 1,}}>
        <View style={styles.headerHeight}>
        <Header />
        </View>
        <ScrollView 
        onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && isLoadingList == false ) {
                loadArticle();
            }
        }}
        scrollEventThrottle={400}
        >
        
            <View style={[styles.container]}>
                <Text style={[styles.title_rubrique,styles.paddingBottom10]}>{imgSrc}</Text>
                <Image resizeMode={'contain'} style={styles.img} source={{uri:imgSrc}} />
            </View>
        </ScrollView>
        </View>
    );
    
}