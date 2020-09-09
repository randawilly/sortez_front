
import React, { Component,useState } from 'react';
import {View,Platform,TextInput,Text,Picker,TouchableOpacity,ActivityIndicator} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import{styles} from '../style/Style';
import DatePicker from 'react-native-datepicker';
import { Agenda } from "../screens/Agenda";
// import { Icon } from 'react-native-elements'
export default function FormPro(props) {

    const rubrique = props.rubrique.rubriues;
    const statutArr = props.statut.status;
    const depArr = props.department.department;

    const [PostalCode, SetPostalCode] = useState("0");
    const [phoneFix, setPhoneFix] = useState("0");
    const [phoneMobile, setPhoneMobile] = useState("0");
    const [Email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [subRubriqueVal, setSubRubriqueVal] = useState("0");
    const [statut, setStatut] = useState("0");
    const [OtherStatus, setOtherStatus] = useState("");
    const [nomSociete, setNomSociete] = useState("");
    const [adresse1, setAdresse1] = useState("");
    const [adresse2, setAdresse2] = useState("");
    const [department, setDepartment] = useState("0");
    const [isLoadingSubActivity, setLoadingSubActivity] = useState(false);
    const [isLoadingSubActivityDep, setLoadingSubActivityDep] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [mainActivite, setMainActivite] = useState("0");
    const [subRubrique, setSubRubrique] = useState("");
    const [nomResponsable, setNomResponsable] = useState("");
    const [prenomResponsable, setPrenomResponsable] = useState("");
    const [fonctionResponsable, setFonctionResponsable] = useState("");
    const [telResponsable, setTelResponsable] = useState("");
    const [emailResponsable, setEmailResponsable] = useState("");


    if(typeof(rubrique) !='undefined'){
        if(typeof(rubrique) != "undefined" && rubrique != null){
            var boucleRubrique = rubrique.map( (s, i) => {
                return <Picker.Item key={i} value={s.IdRubrique} label={s.Nom} />
            });   
        }else{
            var boucleRubrique = <Picker.Item label="Selectionner" value="0" />;
        }
    }
    if(typeof(statutArr) !='undefined'){
        if(typeof(statutArr) != "undefined" && statutArr != null){
            var boucleStatut = statutArr.map( (s, i) => {
                return <Picker.Item key={i} value={s.id} label={s.Nom} />
            });   
        }else{
            var boucleStatut = <Picker.Item label="Selectionner" value="0" />;
        }
    }
    if(typeof(subRubrique) !='undefined'){
        if(typeof(subRubrique.subRubrique) != "undefined" && subRubrique != null && subRubrique.subRubrique != null){
            var boucleSubRubrique = subRubrique.subRubrique.map( (s, i) => {
                return <Picker.Item key={i} value={s.IdSousRubrique} label={s.Nom} />
            });   
        }else{
            var boucleSubRubrique = <Picker.Item label="Selectionner" value="0" />;
        }
    }
    if(typeof(depArr) !='undefined'){
        console.log(depArr)
        if(typeof(depArr) != "undefined" && depArr != null && department != null){
            var boucleDepartment = depArr.map( (s, i) => {
                return <Picker.Item key={i} value={s.departement_id} label={s.departement_nom} />
            });   
        }else{
            var boucleDepartment = <Picker.Item label="Selectionner" value="0" />;
        }
    }
    function requestProAccount() {
        navigation.navigate("ProSignIn",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function goBack(){
        navigation.goBack();
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
    function setMainActiviteFunct(val){
        setLoadingSubActivity(true);
        setMainActivite(val);
        fetch('https://www.sortez.org/sortez_pro/Sortez_pro_mobile/getSubRubriqueByIdRubrique',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idRubrique: val,
            })
        }).then((response) => response.json())
        .then((responseData) => {
            setSubRubrique(responseData);
            setLoadingSubActivity(false);
            // goBack();
        })
        .catch((error) => {
            sesetLoadingSubActivitytLoading(false);
            console.log(error);
        });
    }
    function SetPostalCodeFunc(val){
        setLoadingSubActivityDep(true);
        SetPostalCode(val);
        fetch('https://www.sortez.org/sortez_pro/Sortez_pro_mobile/getDepartByPostalCode',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                codePosta: val,
            })
        }).then((response) => response.json())
        .then((responseData) => {
            if(typeof(responseData.department.departement_id) != null){
                alert(responseData.department.departement_id)
                setDepartment(responseData.department.departement_id);
            }else{
                setDepartment(0) ;
            }
            setLoadingSubActivityDep(false);
            // goBack();
        })
        .catch((error) => {
            setLoadingSubActivityDep(false);
            console.log(error);
        });
    }
    return(
        
        <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                    <Text style={[styles.title_info,styles.paddingBottom10]}>Créer votre compte Professionnel</Text>
                        <TouchableOpacity onPress={()=>goBack()} style={styles.bouton_rose_contact}>
                            <Text style={styles.text_bouton}>Retour</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={[styles.title_info,styles.txt_underline,styles.paddingBottom10]}>Votre activité</Text>
                        </View>

                        <Text>Préciser votre activité *</Text>
                        <View style={styles.inputView} >
                        <Picker
                            selectedValue={mainActivite}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setMainActiviteFunct(itemValue)}>
                            <Picker.Item label={"Veuillez choisir"} />
                            {boucleRubrique}
                        </Picker>
                        </View>
                        <Text>Sous-rubrique :</Text>
                        <View style={styles.inputView} >
                        {!isLoadingSubActivity ? <Picker
                            selectedValue={subRubriqueVal}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setSubRubriqueVal(itemValue)}>
                            <Picker.Item label={"Veuillez choisir"} />
                            {boucleSubRubrique}
                        </Picker> : (
                            <ActivityIndicator size="small" color="white" />
                        )}
                        
                        </View>
                        <Text>Statut :</Text>
                        <View style={styles.inputView} >
                        <Picker
                            selectedValue={statut}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setStatut(itemValue)}>
                            <Picker.Item label={"Veuillez choisir"} />
                            {boucleStatut}
                        </Picker> 
                        </View>
                        <Text>Autre, préciser</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Autre, préciser"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setOtherStatus(text)} />
                    </View>
                        <Text>Nom ou enseigne *</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Nom ou enseigne"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setNomSociete(text)} />
                    </View>
                        <Text>Adresse 1</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Adresse 1"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setAdresse1(text)} />
                    </View>
                        <Text>Adresse 2</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Adresse 2"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setAdresse2(text)} />
                    </View>
                    <Text>Code Postal *</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Code Postal *"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => SetPostalCodeFunc(text)} />
                    </View>
                    <Text>Departement</Text>
                    <View style={styles.inputView} >
                        <Picker
                            selectedValue={department}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}>
                            <Picker.Item label={"Veuillez choisir"} />
                            {boucleDepartment}
                        </Picker>
                    </View>
                    <Text>Téléphone directe</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            
                            style={styles.inputText}
                            placeholder="Téléphone directe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPhoneFix(text)} />
                    </View>
                    <Text>Téléphone Mobile</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Téléphone Mobile"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPhoneMobile(text)} />
                    </View>
                    <Text>Email</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={[styles.title_info,styles.txt_underline,styles.paddingBottom10]}>Les coordonnées du décideur</Text>
                    </View>
                    <View style={styles.inputView} >
                        <Picker
                            selectedValue={0}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setCivilité(itemValue)}>
                            <Picker.Item key={1} value={0} label={"Monsieur"} />
                            <Picker.Item key={2} value={1} label={"Madamme"} />
                            <Picker.Item key={3} value={2} label={"Mademoiselle"} />
                        </Picker>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Nom responsable *"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setNomResponsable(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Prénom responsable *"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPrenomResponsable(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Fonction responsable *"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setFonctionResponsable(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Téléphone direct *"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setTelResponsable(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email *"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setEmailResponsable(text)} />
                    </View>
                    <View>
                        <Text style={[styles.title_info,styles.txt_underline,styles.paddingBottom10]}>Votre identifiant et mot de passe</Text>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            
                            style={styles.inputText}
                            placeholder="Login"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setLogin(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Mots de passe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Confirmer le mot de passe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPasswordConfirm(text)} />
                    </View>
                    <TouchableOpacity onPress={()=>signUpUser()} style={styles.bouton_rose_contact}>
                    {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                        <Text style={styles.text_bouton}>Je confirme mon inscription</Text>
                    )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>requestProAccount()} style={styles.bouton_rose_contact}>
                        <Text style={styles.text_bouton}>Demander un compte Professionnel</Text>
                    </TouchableOpacity>
                </View>
    )

}