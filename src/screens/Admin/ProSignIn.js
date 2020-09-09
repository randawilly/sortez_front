import React,{ useState,useEffect } from 'react';
import { Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';
import FormPro from '../../includes/FormPro'
export default function ProSignIn() {
    
    const navigation = useNavigation();
    const url_rubriques = "https://www.sortez.org/sortez_pro/Sortez_pro_mobile/getAllRubriques"
    const url_statut = "https://www.sortez.org/sortez_pro/Sortez_pro_mobile/getStatus";
    const url_department = "https://www.sortez.org/sortez_pro/Sortez_pro_mobile/getDepartement";
    

    const [mainActivite, setMainActivite] = useState("0");
    const [subRubriqueVal, setSubRubriqueVal] = useState("0");
    const [statut, setStatut] = useState("0");
    const [OtherStatus, setOtherStatus] = useState("");
    const [nomSociete, setNomSociete] = useState("");
    const [adresse1, setAdresse1] = useState("");
    const [adresse2, setAdresse2] = useState("");
    const [department, setDepartment] = useState("0");

    const [statutArr, setStatutArr] = useState("0");
    const [depArr, setDepArr] = useState("0");


    const [rubrique, setRubrique] = useState("");

    useEffect(() => {
        fetch(url_rubriques)
          .then((response) => response.json())
          .then((json) => setRubrique(json))
          .catch((error) => console.error(error))
          .finally(() => console.log("ok"));
    }, []);  
    useEffect(() => {
        fetch(url_statut)
          .then((response) => response.json())
          .then((json) => setStatutArr(json))
          .catch((error) => console.error(error))
          .finally(() => console.log("ok"));
    }, []);  
    useEffect(() => {
        fetch(url_department)
          .then((response) => response.json())
          .then((json) => setDepArr(json))
          .catch((error) => console.error(error))
          .finally(() => console.log("ok"));
    }, []);  
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <FormPro rubrique = {rubrique} statut = {statutArr} department = {depArr}   />
            </View>
        </ScrollView>
    );
}