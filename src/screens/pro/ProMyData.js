import React,{ useState } from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet,TextInput,ScrollView,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Headerpro from '../../includes/Headerpro';

export default function ProMyData({ route }) {

    const Email = route.params.Email;
    const infoCom = route.params.infoCom;
    const navigation = useNavigation();
    const [nom, setNom] = useState(infoCom.json.Nom);
    const [prenom, setPrenom] = useState(infoCom.json.Prenom);
    const [date, setDate] = useState(infoCom.json.DateNaissance);
    const [adresse, setAdresse] = useState(infoCom.json.Adresse);
    const [postal, setPostal] = useState(infoCom.json.CodePostal);
    const [tel, setTel] = useState(infoCom.json.Portable);
    const [email, setEmail] = useState(infoCom.json.Email);
    const [is_loaded, setLoading] = useState(false);

    
    function update_commercant_info(){
        setLoading(true);
        fetch('https://www.sortez.org/sortez_pro/sortez_pro_mobile/ModifAccount',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nom: nom,
                Prenom: prenom,
                DateNaissance: date,
                Adresse: adresse,
                CodePostal: postal,
                Portable: tel,
                Email: email,
                IdCommercant:infoCom.json.IdCommercant,
            })
        }).then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            setLoading(false);
            alert('enregistré')
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function onBackPressed(){
        navigation.goBack()
    }
    return (
        <View style={{flex: 1,}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerHeight}>
                <Headerpro />
            </View>
                <View style={styles.container}>
                    <Text style={styles.Title}>Mes données Pro</Text>
                    <TouchableOpacity onPress={() => onBackPressed()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>Retour</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.inputView} >
                            <TextInput
                                defaultValue={nom}
                                style={styles.inputText}
                                placeholder="Nom"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setNom(text);}} />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                defaultValue={prenom}
                                style={styles.inputText}
                                placeholder="Prénom"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setPrenom(text);}} />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                defaultValue={date}
                                style={styles.inputText}
                                placeholder="Date de naissance"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setDate(text);}} />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                defaultValue={adresse}
                                style={styles.inputText}
                                placeholder="Adresse 1"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setAdresse(text);}} />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                
                                defaultValue={postal}
                                style={styles.inputText}
                                placeholder="Code postal"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setPostal(text);}} />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                editable={false}
                                selectTextOnFocus={false}
                                defaultValue={infoCom.json.ville_nom}
                                style={styles.inputText}
                                placeholder="Ville"
                                placeholderTextColor="#003f5c"
                                />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                defaultValue={tel}
                                style={styles.inputText}
                                placeholder="Télephone mobile"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setTel(text);}} />
                    </View>
                    <View style={styles.inputView} >
                            <TextInput
                                
                                defaultValue={email}
                                style={styles.inputText}
                                placeholder="Courriel"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setEmail(text);}} />
                    </View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => update_commercant_info()} style={styles.loginBtn}>
                    {is_loaded ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Valider</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        paddingLeft:15,
        paddingRight:15,
    },
    Title:{
        fontSize:30,
        marginTop:20,
        marginBottom:20,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:"futuraMd"
    },
    inputView: {
        width: "100%",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 0,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        alignItems: 'center',
        
    },
    inputText: {
        height: 50,
        color: "black",
        fontFamily:"futuraMd"
    },
    btnText:{
        color:"white",
        fontSize:20,
        fontFamily:"futuraMd"
    },
    loginBtn: {
        width: "100%",
        backgroundColor: "#DC1A95",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginTop:40,
        marginBottom: 20
    },
})