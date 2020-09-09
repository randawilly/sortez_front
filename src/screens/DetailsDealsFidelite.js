import React,{useEffect,useState} from 'react';
import { Text, View, Button,ScrollView,AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import DetailsContentDealsFidelity from '../includes/DetailsContentDealsFidelity';


export default function DetailsDealsFidelite({route}) {

    const idEvent = route.params.idEvent;
    const type = route.params.type;

    var url_details = 'https://www.sortez.org/sortez_pro/Api_front_global/get_deals_details';
    const [username, setUsernames] = useState(null);
    const [loaded, setLoaded] = useState(getSession());
    const [data, setData] = useState("");

    const [isLoading, setLoading] = useState(true);
    const [ion_auth_id, setIon_auth_id] = useState(null);
    
    

    const navigation = useNavigation();

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    async function getSession(){
        var username = await AsyncStorage.getItem('username');
        var ion_auth_id = await AsyncStorage.getItem('ion_auth_id');
        setIon_auth_id(ion_auth_id);
        setUsernames(username)
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
                type: type,
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
    function changestatus(status){
        setUsernames(status)
    }
    return (
        <View style={{flex: 1}}>
            <View style={styles.headerHeight}>
                <Header changestatus={changestatus} />
            </View>
            <ScrollView>
                <View style={[styles.container]}>
                    <DetailsContentDealsFidelity username={username} ion_auth_id={ion_auth_id} typeDeals = {type}  agenda = {data} />
                </View>
            </ScrollView>
        </View>
    );
    
}