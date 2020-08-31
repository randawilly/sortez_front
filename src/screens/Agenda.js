import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListeArtAg from '../includes/ListeArtAg';


export default function Agenda({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;


    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [selectedValueMedia, setSelectedValueMedia] = useState("0");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [selectedValueSubcateg, setSelectedValueSubcateg] = useState("0");
    const [dateDebut, setDateDebut] = useState("0000-00-00");
    const [dateFin, setDateFin] = useState("0000-00-00");
    const [motcle, setmotcle] = useState("");
    const [subcateg, setSubcateg] = useState("");

    function setcommune(commune){
        setSelectedValueCommune(commune);
    }

    function setcommercant(commercant){
        setSelectedValueCommercant(commercant);
    }

    function setCateg(categ){
        setSelectedValueCategorie(categ);
    }
    function setSubcategs(subcateg){
        setSelectedValueSubcateg(subcateg);
    }
    function setdatedebut(date_debut){
        setDateDebut(date_debut);
    }
    function setdatefin(date_debut){
        setDateFin(date_debut);
    }
    function setmotscles(mot){
        setmotcle(mot)
    }

    function loadArticle(){
        alert(selectedValueCommune);
        setLoading(true)
        fetch(url_filter, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            commune: selectedValueCommune,
            commercant: selectedValueCommercant,
            categorie:selectedValueCategorie,
            souscategorie:selectedValueSubcateg,
            date_debut:dateDebut,
            date_fin:dateFin,
            motcles:motcle,
        })
        })
        .then((response) => response.json())
        .then((json) => changeAgenda(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    if(rubrique == "agenda"){
        var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/get_communes";
        var url_commercant = "https://www.sortez.org/sortez_pro/Api_front_global/getCommercantsAgenda";
        var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getCategorieAgenda';
        var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getAgendasListe';
    }else if(rubrique == "article"){
        var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/get_communesArticle";
        var url_commercant = "https://www.sortez.org/sortez_pro/Api_front_global/getCommercantsArticle";
        var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getCategorieArticle';
        var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getArticlesListe';
    }

    const [commune, setCommune] = useState("");
    const [commercant, setCommercant] = useState("");
    const [categorie, setCategorie] = useState("");

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

    return (
        <ScrollView>
        <Header />
            <View style={[styles.container]}>
                <Text style={styles.title_rubrique}>{txt_rubrique}</Text>
                <Filtre setmotscles={setmotscles} setdatefin={setdatefin} setcommune = {setcommune} setcommercant={setcommercant} setCateg={setCateg} setSubcategs={setSubcategs} setdatedebut={setdatedebut} rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} commercant = {commercant} categorie = {categorie}  />
                <ListeArtAg loadArticle={loadArticle} changeAgenda = {changeAgenda} rubrique = {rubrique} agenda = {agendas} />
            </View>
        </ScrollView>
    );
    
}