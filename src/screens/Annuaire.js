import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListeAnnuaire from '../includes/ListeAnnuaire';

export default function Annuaire({route}) {

    const rubrique = route.params.rubrique;
    const txt_rubrique = route.params.txt_rubrique;

    if(rubrique == "annuaire"){
        var url_communes = "https://www.sortez.org/sortez_pro/Api_front_global/get_communesAnnonce";
        var url_subcateg = "https://www.sortez.org/sortez_pro/Api_front_global/getCommercantsAgenda";
        var url_categorie = 'https://www.sortez.org/sortez_pro/Api_front_global/getCategorieAnnuaire';
        var url_rubrique = 'https://www.sortez.org/sortez_pro/Api_front_global/getAnnuaireListe';
    }

    const [commune, setCommune] = useState("");
    const [subcateg, setSubcateg] = useState("");
    const [categorie, setCategorie] = useState("");
    const [commercant, setCommercant] = useState("");

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
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <Header />
                <Text style={styles.title_rubrique}>{txt_rubrique}</Text>
                <Filtre rubrique = {rubrique} changeAgenda = {changeAgenda} agenda= {agendas} commune={commune} categorie = {categorie}  />
                <ListeAnnuaire rubrique = {rubrique} commercant = {commercant} />
            </View>
        </ScrollView>
    );
    
}