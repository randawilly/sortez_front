import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListeAnnuaire from '../includes/ListeAnnuaire';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Annuaire({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;
    const [nbPage, setNbPage] = useState(1);

    if(rubrique == "annuaire"){
        var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/get_communesAnnonce";
        var url_subcateg = "https://www.sortez.org/sortez_pro/Api_front_global/getCommercantsAgenda";
        var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getCategorieAnnuaire';
        var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getAnnuaireListe/'+nbPage;
        var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterAnnuaire/"+nbPage;
    }

    const [commune, setCommune] = useState("");
    const [subcateg, setSubcateg] = useState("");
    const [categorie, setCategorie] = useState("");
    const [commercant, setCommercant] = useState("");
    const [agendas, setAgendas] = useState("");
    const [isLoading, setLoading] = useState(true);

    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [selectedValueSubcateg, setSelectedValueSubcateg] = useState("0");
    const [motcle, setmotcle] = useState("");
    const [isLoadingList, setLoadingList] = useState(false);

    function setcommune(commune){
        setSelectedValueCommune(commune);
    }

    function setCateg(categ){
        setSelectedValueCategorie(categ);
    }
    function setSubcategs(subcateg){
        setSelectedValueSubcateg(subcateg);
    }

    function setmotscles(mot){
        setmotcle(mot)
    }



    const navigation = useNavigation();
    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }


    
    useEffect(() => {
            fetch(url_communes)
              .then((response) => response.json())
              .then((json) => setCommune(json))
              .catch((error) => console.error(error))
              .finally(() => setLoading(false));
    }, []);  
    
    useEffect(() => {
        fetch(url_categorie)
            .then((response) => response.json())
            .then((json) => setCategorie(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);  

    useEffect(() => {
        fetch(url_rubrique)
            .then((response) => response.json())
            .then((json) => setCommercant(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    function changeAgenda(new_valeur){
        setCommercant(new_valeur);
    }

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
      };

      function loadAnnuaire(){
        var newPage = nbPage+1;
        setNbPage(newPage);
        if(selectedValueCommune == "0" && selectedValueCategorie == "0" && selectedValueSubcateg == "0" && motcle == "" ){
            var url_to = url_rubrique;
        }else{
            var url_to = url_filter;
        }
        setLoadingList(true);
        fetch(url_to, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            commune: selectedValueCommune,
            categorie:selectedValueCategorie,
            souscategorie:selectedValueSubcateg,
            motcles:motcle,
        })
        })
        .then((response) => response.json())
        .then((json) => changeAgenda(json))
        .catch((error) => console.error(error))
        .finally(() => setLoadingList(false));
    }
    return (
        <View style={{flex: 1,}}>
        <View style={styles.headerHeight}>
        <Header />
        </View>
        <ScrollView
        onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && isLoadingList == false ) {
                loadAnnuaire();
            }
        }}
        scrollEventThrottle={400}
        >
            <View style={[styles.container]}>
                <Text style={[styles.title_rubrique,styles.paddingBottom10]}>{txt_rubrique}</Text>
                <Filtre setmotscles={setmotscles} setcommune={setcommune} setCateg={setCateg} setSubcategs={setSubcategs} rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} categorie = {categorie}  />
                <ListeAnnuaire rubrique = {rubrique} commercant = {commercant} />
                {isLoadingList ? <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" /> : (
                    <TouchableOpacity></TouchableOpacity>
                )}
            </View>
        </ScrollView>
        </View>
    );
    
}