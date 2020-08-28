import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import DetailsContent from '../includes/DetailsContent';


export default function DetailsArtAg({route}) {

    const rubrique = route.params.rubrique;
    const idEvent = route.params.idEvent;
    const txt_rubrique = route.params.txt_rubrique;

    if(rubrique == "agenda"){
        var url_details = 'https://www.sortez.org/sortez_pro/Api_front_global/get_ag_details';
    }else if(rubrique == "article"){
        var url_details = 'https://www.sortez.org/sortez_pro/Api_front_global/get_art_details';
    }

    const [data, setData] = useState("");

    const [isLoading, setLoading] = useState(true);

    const navigation = useNavigation();
    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }

    useEffect(() => {
        fetch(url_details, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idEvent,
            })
            })
              .then((response) => response.json())
              .then((json) => setData(json))
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
                <DetailsContent rubrique = {rubrique} agenda = {data} />
            </View>
        </ScrollView>
    );
    
}