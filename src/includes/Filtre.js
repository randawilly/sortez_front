import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import DatePicker from 'react-native-datepicker';
import { Agenda } from "../screens/Agenda";
// import { Icon } from 'react-native-elements'
export default function Filtre(props) {

    const [selectedValueCommune, setSelectedValueCommune] = useState("0");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [selectedValueMedia, setSelectedValueMedia] = useState("0");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("0");
    const [selectedValueSubcateg, setSelectedValueSubcateg] = useState("0");
    const [isLoading, setLoading] = useState(false);
    const [isLoading2, setLoading2] = useState(false);
    const [isLoading3, setLoading3] = useState(false);
    const [dateDebut, setDateDebut] = useState("0000-00-00");
    const [dateFin, setDateFin] = useState("0000-00-00");
    const [motcle, setmotcle] = useState("");
    const [subcateg, setSubcateg] = useState("");

    const communes = props.commune.toVille;

    if(subcateg != '' && subcateg != null && typeof(subcateg) != undefined){
        if(subcateg.toSubcateg !=null && subcateg.toSubcateg !="" && typeof(subcateg.toSubcateg) !="undefined" ){
        var bouclesubcateg = subcateg.toSubcateg.map( (s, i) => {
            return <Picker.Item key={i} value={s.IdSousRubrique} label={s.Nom} />
        }); 
    }
    }

    if(typeof(props.commercant) !="undefined"){
        var commercant = props.commercant.tocommercant;
    }
    const categorie = props.categorie.toCategorie_principale;

    if(props.rubrique =="agenda"){
        var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterAgenda";
        var url_reset_filter = "https://www.sortez.org/sortez_pro/Api_front_global/getAgendasListe";
    }else if(props.rubrique == "article"){
        var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterArticle";
        var url_reset_filter = "https://www.sortez.org/sortez_pro/Api_front_global/getArticlesListe"
    }else if(props.rubrique =="annuaire"){
        var url_filter = "https://www.sortez.org/sortez_pro/Api_front_global/filterAnnuaire";
        var url_reset_filter = "https://www.sortez.org/sortez_pro/Api_front_global/getAnnuaireListe"
    }

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
            if(typeof(s.agenda_categid) != "undefined"){
            if(s.agenda_categid != "null"){
            return <Picker.Item key={i} value={s.agenda_categid} label={s.category} />
            }
        }else{
            if(s.IdRubrique != "null"){
                return <Picker.Item key={i} value={s.IdRubrique} label={s.Nom} />
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


            props.setmotscles(motcle);
            props.setcommune(selectedValueCommune);
            props.setCateg(selectedValueCategorie);
            props.setSubcategs(selectedValueSubcateg);
            if(props.rubrique !="annuaire"){
                props.setdatedebut(dateDebut);
                props.setdatefin(dateFin);
                props.setcommercant(selectedValueCommercant);
            }

        
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

    function changeAgenda(json){
        props.changeAgenda(json)
    }

    function resetall(){
        setSelectedValueCommune('0');
        setSelectedValueCommercant('0');
        setSelectedValueMedia('0');
        setSelectedValueCategorie('0');
        setDateDebut("0000-00-00");
        setDateFin("0000-00-00");
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
        props.setmotscles(motcle);
        
        props.setcommune(selectedValueCommune);
        
        props.setCateg(selectedValueCategorie);
        props.setSubcategs(selectedValueSubcateg);
        
        if(props.rubrique !="annuaire"){
            props.setdatefin(dateFin);
            props.setdatedebut(dateDebut);
            props.setcommercant(selectedValueCommercant);
        }
    }
    function setDate_debut(){
        setDateDebut(new Date());
    }
    function setDate_fin(){
        setDateFin(new Date());
    }
    function changecateg(id_categ){
        setSelectedValueCategorie(id_categ);
        setLoading3(true)
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
            .finally(() => setLoading3(false));
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
        {props.rubrique =="annuaire" ? 
        <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <Picker 
                        selectedValue={selectedValueCategorie}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => changecateg(itemValue)}>
                        <Picker.Item label="Catégories" value="0" />
                        {bouclecategorie}
                    </Picker>
                </View>
            </View>
        : (
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
        )}
        </View>
        {props.rubrique =="annuaire" ? 
        
        <View style={filstreStyle.row}>
            <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                {isLoading3 ? <ActivityIndicator style={{paddingTop:11}} size="small" color="#DC1A95" /> : (
                    <Picker
                        selectedValue={selectedValueSubcateg}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueSubcateg(itemValue)}>
                        <Picker.Item label="Sous-catégories" value="0" />
                        {bouclesubcateg}
                    </Picker>
                )}
                </View>
            </View>
        </View>

        : (
        <View style={filstreStyle.row}>
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <Picker
                        selectedValue={selectedValueMedia}
                        style={filstreStyle.selectText}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueMedia(itemValue)}>
                        <Picker.Item label="Média" value="media" />
                    
                    </Picker>
                </View>
            </View>
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
        </View>
        )}
        {props.rubrique !="annuaire" ? 
        <View style={filstreStyle.row}>
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <TouchableOpacity onPress={()=>setDate_debut()}>
                        <View>
                        {dateDebut =="0000-00-00" ? <Text style={filstreStyle.txt_date}>Date début</Text> : (
                            <DatePicker
                                style={{width:"100%"}}
                                date={dateDebut}
                                mode="date"
                                placeholder="Date début"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2050-06-01"
                                confirmBtnText="Valider"
                                cancelBtnText="Annuler"
                                customStyles={{
                                dateInput: {
                                    borderWidth: 0
                                }
                                }}
                                onDateChange={(date) => {onChangeDebut(date)}}
                        />
                        )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[filstreStyle.w_50,filstreStyle.padding_5]}>
                <View style={[filstreStyle.bordered_rose,filstreStyle.heighted]}>
                    <TouchableOpacity onPress={()=>setDate_fin()}>
                        <View>
                        {dateFin =="0000-00-00" ? <Text style={filstreStyle.txt_date}>Date Fin</Text> : (
                            <DatePicker
                                style={{width:"100%"}}
                                date={dateFin}
                                mode="date"
                                placeholder="Date fin"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2050-06-01"
                                confirmBtnText="Valider"
                                cancelBtnText="Annuler"
                                customStyles={{
                                dateInput: {
                                    borderWidth: 0
                                }
                                }}
                                onDateChange={(date) => {onChangeFin(date)}}
                        />
                        )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        : (
            <TouchableOpacity></TouchableOpacity>
        )}
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
                        <Text style={filstreStyle.btn_text}>Rechercher</Text>
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