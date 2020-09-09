import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DatePicker from 'react-native-datepicker';
import { DealsFidelity } from "../screens/DealsFidelity";
// import { Icon } from 'react-native-elements'
export default function FiltreDealsFidelity(props) {

    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [selectedValueType, setSelectedValueType] = useState("df");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [motcle, setmotcle] = useState("");

    const [isLoading, setLoading] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    
    
    const [subcateg, setSubcateg] = useState("");
    const communes = props.commune.toVille;

    if(subcateg != ''){
        var bouclesubcateg = subcateg.toSubcateg.map( (s, i) => {
            return <Picker.Item key={i} value={s.IdRubrique} label={s.Nom} />
        }); 
    }

    if(typeof(props.commercant) !="undefined"){
        var commercant = props.commercant.tocommercant;
    }
    const categorie = props.categorie.toCategorie_principale;

        var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterDealsFidelity";
        var url_reset_filter = "https://www.sortez.org/sortez_pro/Api_front_global/getBonplanFidelityListe";

    if(typeof(communes) !='undefined'){
        var bouclecommune = communes.map( (s, i) => {
            return <Picker.Item key={i} value={s.IdVille} label={s.ville_nom} />
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
            if(typeof(s.categid) != "undefined"){
            if(s.categid != "null"){
            return <Picker.Item key={i} value={s.categid} label={s.categorie} />
            }
        }
        });   
    }else{
        var bouclecategorie = <Picker.Item label="Selectionner" value="0" />;
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
            setLoading(true);
            props.setcommune(selectedValueCommune);
            props.setCateg(selectedValueCategorie);
            props.setType(selectedValueType);
            props.setmotscles(motcle);
            props.setCommercants(selectedValueCommercant);
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
                type:selectedValueType,
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
        setSelectedValueType('df');
        setSelectedValueCategorie('0');
        setmotcle('');
        setLoading2(false);
        props.setcommune(selectedValueCommune);
            props.setCateg(selectedValueCategorie);
            props.setType(selectedValueType);
            props.setmotscles(motcle);
            props.setCommercants(selectedValueCommercant);
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
    function changecateg(id_categ){
        setSelectedValueCategorie(id_categ);
        setLoading(true)
            fetch("https://www.sortez.org/sortez_pro/Api_front_global/getsubcategby_categid", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_categ: id_categ,
            })
            })
            .then((response) => response.json())
            .then((json) => setSubcateg(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
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
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <Picker 
                        selectedValue={selectedValueCategorie}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueCategorie(itemValue)}>
                        <Picker.Item label="Catégories" value="0" />
                        {bouclecategorie}
                    </Picker>
                </View>
            </View>
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <Picker 
                        selectedValue={selectedValueType}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueType(itemValue)}>
                        <Picker.Item label="Deals et fidelité" value="df" />
                        <Picker.Item label="Deals" value="d" />
                        <Picker.Item label="FIdelité" value="f" />
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
                        <Text style={filstreStyle.btn_text}>Chercher</Text>
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