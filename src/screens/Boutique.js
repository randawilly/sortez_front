import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/FiltreAnnonce';
import ListAnnonce from '../includes/ListAnnonce';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Boutique({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;

    const [nbPage, setNbPage] = useState(1);

    var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/getcommunesAnnonce";
    var url_commercant = "https://www.sortez.org/sortez_pro/Api_front_global/getpartenaireAnnonce";
    var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getcategorieAnnonce';
    var url_souscategorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getsouscategorieAnnonce';
    var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getAnnonceListe/'+nbPage;
    var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterAnnonce/"+nbPage;

    const [commune, setCommune] = useState("");
    const [commercant, setCommercant] = useState("");
    const [categorie, setCategorie] = useState("");
    const [souscategorie, setsousCategorie] = useState("");

    const [agendas, setAgendas] = useState("");


    const [isLoading, setLoading] = useState(true);


    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [motcle, setmotcle] = useState("");

    const [isLoadingList, setLoadingList] = useState(false);
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
    fetch(url_commercant)
        .then((response) => response.json())
        .then((json) => setCommercant(json))
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
        fetch(url_souscategorie)
            .then((response) => response.json())
            .then((json) => setsousCategorie(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);  

    useEffect(() => {
        fetch(url_rubrique)
            .then((response) => response.json())
            .then((json) => setAgendas(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    function changeAgenda(new_valeur){
        setAgendas(new_valeur);
    }
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
      };
      function loadAnnonce(){
        var newPage = nbPage+1;
        if(selectedValueCommune == "0" && selectedValueCommercant =="0" && selectedValueCategorie == "0" && motcle == ""){
            var url_to = url_rubrique;
        }else{
            var url_to = url_filter;
        }
        setNbPage(newPage);
        setLoadingList(true);
        fetch(url_to, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            commune: selectedValueCommune,
            commercant: selectedValueCommercant,
            categorie:selectedValueCategorie,
            motcles:motcle,
        })
        })
        .then((response) => response.json())
        .then((json) => changeAgenda(json))
        .catch((error) => console.error(error))
        .finally(() => setLoadingList(false));
    }
    function setcommune(commune){
        setSelectedValueCommune(commune);
    }

    function setCateg(categ){
        setSelectedValueCategorie(categ);
    }

    function setmotscles(mot){
        setmotcle(mot)
    }
    function setCommercants(idcom){
        setSelectedValueCommercant(idcom);
    }
    return (
        <View style={{flex: 1,}}>
        <View style={styles.headerHeight}>
        <Header />
        </View>
        <ScrollView
        onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && isLoadingList == false ) {
                loadAnnonce();
            }
        }}
        scrollEventThrottle={400}
        >
            <View style={[styles.container]}>
                <Text style={[styles.title_rubrique,styles.paddingBottom10]}>{txt_rubrique}</Text>
                <Filtre setCommercants={setCommercants} setmotscles={setmotscles} setcommune={setcommune} setCateg={setCateg} rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} commercant = {commercant} categorie = {categorie} souscategorie = {souscategorie}  />
                <ListAnnonce rubrique = {rubrique} agenda = {agendas} />
                {isLoadingList ? <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" /> : (
                    <TouchableOpacity></TouchableOpacity>
                )}
            </View>
        </ScrollView>
        </View>
        );
    
}