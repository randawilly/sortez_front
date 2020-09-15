import React,{ useState } from 'react';
import { Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';

export default function signUp() {
    
    const navigation = useNavigation();
    
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateNaissance, setDateNaissance] = useState(new Date());
    const [civilite, setCivilité] = useState("0");
    const [adresse, SetAdresse] = useState("");
    const [PostalCode, SetPostalCode] = useState("0");
    const [phoneFix, setPhoneFix] = useState("0");
    const [phoneMobile, setPhoneMobile] = useState("0");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");


    const [isLoading, setLoading] = useState(false);
    function requestProAccount() {
        navigation.navigate("ProSignIn",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function goBack(){
        navigation.goBack();
    }
    function signUpUser(){
        setLoading(true);
        if(password ==passwordConfirm){
            if(nom !="" && prenom !="" && adresse !="" && PostalCode !="0" && login != "" ){
        fetch('https://www.sortez.org/sortez_pro/Sortez_pro_mobile/ajouterParticulier',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Email: login,
                    Nom: nom,
                    Prenom: prenom,
                    DateNaissance: dateNaissance,
                    Civilite: civilite,
                    Adresse: adresse,
                    CodePostal: PostalCode,
                    Telephone: phoneFix,
                    Portable: phoneMobile,
                    Login: login,
                    Password: password,
                })
            }).then((response) => response.json())
            .then((responseData) => {
                if(responseData.status =="ok"){
                    Alert.alert(
                        "Merci pour votre inscription",
                        "Votre inscription s'est terminé avec succèss, Un mail est envoyé à "+login+" pour activer votre compte",
                        [
                          {
                            text: "OK",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                        ],
                        { cancelable: false }
                    );
                }else if(responseData.status =="ko1"){
                    Alert.alert(
                        "Erreur",
                        "L'adresse "+login+" n'est plus disponible, veuillez inserer une autre",
                        [
                          {
                            text: "OK",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                        ],
                        { cancelable: false }
                    );
                }
                setLoading(false);
                // goBack();
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
        }else{
            alert("Veuillez remplir le formulaire correctement !!!");
            setLoading(false);
        }
        }else{
            alert('Les mots de passe ne sont pas identiques !!! ');
            setLoading(false);
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                    <Text style={[styles.title_info,styles.paddingBottom10]}>Créer votre compte particulier</Text>
                        <TouchableOpacity onPress={()=>goBack()} style={styles.bouton_rose_contact}>
                            <Text style={styles.text_bouton}>Retour</Text>
                        </TouchableOpacity>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Nom"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setNom(text);}} />
                        </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Prénom"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPrenom(text)} />
                    </View>
                    <View style={styles.inputView} >
                    <DatePicker
                        date={dateNaissance}
                        style={{width:"100%"}}
                        mode="date"
                        placeholder="Date de Naissance"
                        format="YYYY-MM-DD"
                        confirmBtnText="Valider"
                        cancelBtnText="Annuler"
                        customStyles={{
                        dateInput: {
                            borderWidth: 0
                        }
                        }}
                        onDateChange={(date) => {setDateNaissance(date)}}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <Picker
                            selectedValue={civilite}
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
                            placeholder="Adresse"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => SetAdresse(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            
                            style={styles.inputText}
                            placeholder="Code Postal"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => SetPostalCode(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            
                            style={styles.inputText}
                            placeholder="Téléphone fixe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPhoneFix(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            
                            style={styles.inputText}
                            placeholder="Téléphone Mobile"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPhoneMobile(text)} />
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
                    {/* <TouchableOpacity onPress={()=>requestProAccount()} style={styles.bouton_rose_contact}>
                        <Text style={styles.text_bouton}>Demander un compte Professionnel</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </ScrollView>
    );
}