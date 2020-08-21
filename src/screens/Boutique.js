import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListAnnonce from '../includes/ListAnnonce';


export default function Boutique({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;


    var url_communes = "https://www.randawilly.ovh/sortez_pro/Api_front_global/getcommunesAnnonce";
    var url_commercant = "https://www.randawilly.ovh/sortez_pro/Api_front_global/getpartenaireAnnonce";
    var url_categorie = 'https://www.randawilly.ovh/sortez_pro/Api_front_global/getcategorieAnnonce';
    var url_souscategorie = 'https://www.randawilly.ovh/sortez_pro/Api_front_global/getsouscategorieAnnonce';
    var url_rubrique = 'https://www.randawilly.ovh/sortez_pro/Api_front_global/getAnnonceListe';


    const [commune, setCommune] = useState("");
    const [commercant, setCommercant] = useState("");
    const [categorie, setCategorie] = useState("");
    const [souscategorie, setsousCategorie] = useState("");

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
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <Header />
                <Text>{txt_rubrique}</Text>
                <Filtre rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} commercant = {commercant} categorie = {categorie} souscategorie = {souscategorie}  />
                <ListAnnonce rubrique = {rubrique} agenda = {agendas} />
            </View>
        </ScrollView>
        );
    
}