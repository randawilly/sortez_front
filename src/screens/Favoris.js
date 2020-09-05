import React,{useEffect,useState} from 'react';
import { Text,Image, View, Button,ScrollView,Dimensions,ActivityIndicator,FlatList,Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import{filstreStyle} from '../style/FiltreStyle';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import{ListeStyle} from '../style/ListeStyle';

export default function Favoris({route}) {
    const navigation = useNavigation();
    const favorisL = route.params.Favoris;
    const favorisArr = favorisL.favoris;
    const base_dir = "https://www.sortez.org/";
    function go_redirect(nom_url){
        var url_complete = base_dir+nom_url+"/presentation_commercants";
        Linking.openURL(url_complete).catch((err) => console.error('An error occurred', err));
    }
    if(favorisL.favoris.length == 0){
        var txt_to_show = "Liste vide";
        boucleFavoris= <TouchableOpacity></TouchableOpacity>
    }else{
        var txt_to_show = "Vous avez "+favorisL.favoris.length +" Favoris";
        var boucleFavoris = 
        <FlatList style={[filstreStyle.w_100]}
        data={favorisArr}
        renderItem={({item}) => (
            <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                <View style={[filstreStyle.w_100]} >
                    <Image  style={{height: 250, width: "100%"}}
                        source={{uri:item.Photo1}}
                    />
                </View>
                <View style={[filstreStyle.w_100,styles.paddingTop_10]}>
                    <Text style={ListeStyle.date_debut_fin}>{item.titre}</Text>
                    {item.description != null ? <Text numberOfLines={4} style={ListeStyle.ville_txt}>{item.description}</Text>: (
                    <Text style={ListeStyle.ville_txt}>Pas de contenue</Text>
                    )}
                    <TouchableOpacity onPress={()=>go_redirect(item.nom_url)} style={[styles.paddingTop_10,styles.paddingBottom10]}>
                        <Image style={[ListeStyle.btn_details]} source={{uri:"https://www.sortez.org/mobile-test/wpimages/wp0958361f_06.png"}} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
       keyExtractor={item => item.id}
        />
    }
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
                    <Text style={[styles.title_rubrique,styles.paddingBottom10,styles.txt_underline]}>{txt_rubrique}</Text>
                    <View style={[filstreStyle.sub_container]}>
                        <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                            <Text style={[styles.textCenter,styles.title_info]}>{txt_to_show}</Text>
                            {boucleFavoris}
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