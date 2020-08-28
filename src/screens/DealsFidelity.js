import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/FiltreDealsFidelity';
import ListAnnonce from '../includes/ListDealsFidelity';


export default function DealsFidelity({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;


    var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/getcommunesDeals";
    var url_commercant = "https://www.sortez.org/sortez_pro/Api_front_global/getpartenaireDealsFidelity";
    var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getcategorieDealsFidelity';
    // var url_souscategorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getsouscategorieAnnonce';
    var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getBonplanFidelityListe';


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
    return (
        <ScrollView>
         <Header />
            <View style={[styles.container]}>
                <Text style={styles.title_rubrique}>{txt_rubrique}</Text>
                <Filtre rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} commercant = {commercant} categorie = {categorie} />
                <ListAnnonce rubrique = {rubrique} agenda = {agendas} />
            </View>
        </ScrollView>
        );
    
}