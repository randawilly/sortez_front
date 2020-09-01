import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/FiltreDealsFidelity';
import ListAnnonce from '../includes/ListDealsFidelity';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DealsFidelity({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;

    const [nbPage, setNbPage] = useState(1);

    var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/getcommunesDeals";
    var url_commercant = "https://www.sortez.org/sortez_pro/Api_front_global/getpartenaireDealsFidelity";
    var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getcategorieDealsFidelity';
    var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getBonplanFidelityListe/'+nbPage;
    var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterDealsFidelity/"+nbPage;


    const [commune, setCommune] = useState("");
    const [commercant, setCommercant] = useState("");
    const [categorie, setCategorie] = useState("");
    const [souscategorie, setsousCategorie] = useState("");

    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [selectedValueType, setSelectedValueType] = useState("df");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [motcle, setmotcle] = useState("");
    const [isLoadingList, setLoadingList] = useState(false);
    function setcommune(commune){
        setSelectedValueCommune(commune);
    }
    function setCateg(categ){
        setSelectedValueCategorie(categ);
    }
    function setType(type){
        setSelectedValueType(type);
    }
    function setmotscles(mot){
        setmotcle(mot)
    }
    function setCommercants(idcom){
        setSelectedValueCommercant(idcom);
    }

    const [agendas, setAgendas] = useState("");


    const [isLoading, setLoading] = useState(true);

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
    // useEffect(() => {
    //     fetch(url_souscategorie)
    //         .then((response) => response.json())
    //         .then((json) => setsousCategorie(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setLoading(false));
    // }, []);  

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
    function loadDealsFidelity(){
        var newPage = nbPage+1;
        if(selectedValueCommune == "0" && selectedValueType =="df" && selectedValueCommercant == "0" && selectedValueCategorie == "0" && motcle == ""){
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
            type:selectedValueType,
            motcles:motcle,
        })
        })
        .then((response) => response.json())
        .then((json) => changeAgenda(json))
        .catch((error) => console.error(error))
        .finally(() => setLoadingList(false));
    }
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
    };
    return (
        <ScrollView
        onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && isLoadingList == false ) {
                loadDealsFidelity();
            }
        }}
        scrollEventThrottle={400}
        >
         <Header />
            <View style={[styles.container]}>
                <Text style={styles.title_rubrique}>{txt_rubrique}</Text>
                <Filtre setCommercants={setCommercants} setmotscles={setmotscles} setType={setType} setCateg={setCateg} setcommune={setcommune} rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} commercant = {commercant} categorie = {categorie} />
                <ListAnnonce rubrique = {rubrique} agenda = {agendas} />
                {isLoadingList ? <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" /> : (
                    <TouchableOpacity></TouchableOpacity>
                )}
            </View>
        </ScrollView>
        );
    
}