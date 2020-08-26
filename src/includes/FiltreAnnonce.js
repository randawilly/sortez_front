import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DatePicker from 'react-native-datepicker';
import { Agenda } from "../screens/Agenda";
// import { Icon } from 'react-native-elements'
export default function Filtre(props) {

    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [selectedValueSousCategorie, setSelectedValueSousCategorie] = useState("0");
    const [isLoading, setLoading] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    const [motcle, setmotcle] = useState("");
    const communes = props.commune.toVille;
    const commercant = props.commercant.tocommercant;
    const categorie = props.categorie.toCategorie_principale;
    const souscategorie = props.souscategorie.toSousRubrique;

 
    var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterAnnonce";
    var url_reset_filter = "https://www.sortez.org/sortez_pro/Api_front_global/getAnnonceListe"

    if(typeof(communes) !='undefined'){
        var bouclecommune = communes.map( (s, i) => {
            if(typeof(s.Nom) !='undefined'){
            return <Picker.Item key={i} value={s.IdVille} label={s.Nom} />
            }else{
            return <Picker.Item key={i} value={s.IdVille} label={s.ville_nom} />
            }
        });   
    }else{
        var bouclecommune = <Picker.Item label="Selectionner" value="0" />;
    }

    if(typeof(commercant) !='undefined'){
        var bouclecommercant = commercant.map( (s, i) => {
            if(s.IdCommercant != "null"){
            return <Picker.Item key={i} value={s.IdCommercant} label={s.NomSociete} />
            }
        });   
    }else{
        var bouclecommercant = <Picker.Item label="Selectionner" value="0" />;
    }

    if(typeof(categorie) !='undefined'){
        var bouclecategorie = categorie.map( (s, i) => {
            if(s.agenda_categid != "null"){
            return <Picker.Item key={i} value={s.IdRubrique} label={s.Nom} />
            }
        });   
    }else{
        var bouclecategorie = <Picker.Item label="Selectionner" value="0" />;
    }

    if(typeof(souscategorie) !='undefined'){
        var bouclesouscategorie = souscategorie.map( (s, i) => {
            if(s.agenda_categid != "null"){
            return <Picker.Item key={i} value={s.IdSousRubrique} label={s.Nom} />
            }
        });   
    }else{
        var bouclesouscategorie = <Picker.Item label="Selectionner" value="0" />;
    }

    function onChangeDebut (selectedDate) {
        const currentDate = selectedDate || date;
        setDateDebut(currentDate);
    }

    function onChangeFin (selectedDate) {
        const currentDate = selectedDate || date;
        setDateFin(currentDate);
    }

    function applyfilters(){
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
                categorie:selectedValueSousCategorie,
                // souscategorie:selectedValueSousCategorie,              
                motcles:motcle,
            })
            })
            .then((response) => response.json())
            .then((json) => changeAgenda(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    function changeAgenda(json){
        props.changeAgenda(json)
    }

    function resetall(){
        setSelectedValueCommune('0');
        setSelectedValueCommercant('0');
        setSelectedValueCategorie('0');
        setSelectedValueSousCategorie('0');
        setmotcle('');
        setLoading2(false)
    }

    function resetfilters(){
        setLoading2(true)
        fetch(url_reset_filter)
            .then((response) => response.json())
            .then((json) => changeAgenda(json))
            .catch((error) => console.error(error))
            .finally(() => resetall(false));
    }
    function setDate_debut(){
        setDateDebut(new Date());
    }
    function setDate_fin(){
        setDateFin(new Date());
    }
    if(props.rubrique == "boutique"){
        return(
        
            <View style={filstreStyle.sub_container}>
            <View style={filstreStyle.row}>
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <Picker
                        selectedValue={selectedValueCommune}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueCommune(itemValue)}>
                        <Picker.Item label="Communes" value="0" />
                        {bouclecommune}
                    </Picker>
                </View>
            </View>
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <Picker
                        selectedValue={selectedValueCommercant}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueCommercant(itemValue)}>
                        <Picker.Item label="Partenaires" value="0" />
                        {bouclecommercant}
                    </Picker>
                </View>
            </View>
            </View>
            <View style={filstreStyle.row}>
                {/* <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                    <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                        <Picker 
                            selectedValue={selectedValueCategorie}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueCategorie(itemValue)}>
                            <Picker.Item label="Catégories" value="0" />
                            {bouclecategorie}
                        </Picker>
                    </View>
                </View> */}
                <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                    <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                        <Picker
                            selectedValue={selectedValueSousCategorie}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueSousCategorie(itemValue)}>
                            <Picker.Item label="Categories" value="0" />
                            {bouclesouscategorie}
                        </Picker>
                    </View>
                </View>
            </View>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]} >
                    <TextInput
                        value={motcle}
                        style={filstreStyle.inputText}
                        placeholder="Mots clés"
                        placeholderTextColor="#E40EAB"
                        onChangeText={(text) => { setmotcle(text);}} />
                    </View>
                </View>
            </View>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                    <View style={[filstreStyle.bordered_rose,filstreStyle.heighted,filstreStyle.bg_pink]}>
                        <TouchableOpacity onPress={()=>applyfilters()} style={[filstreStyle.btn_pink]}>
                        {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                            <Text style={filstreStyle.btn_text}>Appliquez votre choix</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                    <View style={[filstreStyle.bordered_rose,filstreStyle.heighted,filstreStyle.bg_pink]}>
                        <TouchableOpacity onPress={()=>resetfilters()} style={[filstreStyle.btn_pink]}>
                        {isLoading2 ? <ActivityIndicator size="small" color="white" /> : (
                            <Text style={filstreStyle.btn_text}>Réinitialisez</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                    <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                        <Picker
                            selectedValue="list"
                            style={filstreStyle.selectText}
                            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                            <Picker.Item label="Vue liste" value="list" />
                        </Picker>
                    </View>
                </View>
                <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                    <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                        <Picker 
                            selectedValue="card"
                            style={filstreStyle.selectText}
                            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                            <Picker.Item label="Vue carte" value="card" />
                        </Picker>
                    </View>
                </View>
            </View>
        </View>
        )
    }
    
}