import React from 'react';
import { Text, View, Button,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  MenuHeader from './../components/MenuHeader';


export default function DetailCommercant({ route }) {
    
    const navigation = useNavigation();
    const infocom = route.params.infocom[0];
    console.log(infocom);
    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function onBackPressed(){
        navigation.goBack();
    }
    
    return (
        <View style={{height:'100%'}}> 
        {/* <MenuHeader /> */}
        <View>
        <View style={styles.container}>
            <Text style={styles.Title}>A propos</Text>
             <TouchableOpacity onPress={() => onBackPressed()} style={styles.loginBtn}>
                <Text style={styles.btnText}>Retour</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <View style={styles.inputView} >
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={infocom.NomSociete}
                        style={styles.inputText}
                        placeholder="Nom"
                        placeholderTextColor="#003f5c"
                         />
            </View>
            <View style={styles.inputView} >
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={infocom.adresse1}
                        style={styles.inputText}
                        placeholder="Adresse 1"
                        placeholderTextColor="#003f5c"
                         />
            </View>
            <View style={styles.inputView} >
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={infocom.CodePostal}
                        style={styles.inputText}
                        placeholder="Code postal"
                        placeholderTextColor="#003f5c"
                         />
            </View>
            <View style={styles.inputView} >
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={infocom.ville_nom}
                        style={styles.inputText}
                        placeholder="Ville"
                        placeholderTextColor="#003f5c"
                         />
            </View>
            <View style={styles.inputView} >
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={infocom.TelMobile}
                        style={styles.inputText}
                        placeholder="Télephone mobile"
                        placeholderTextColor="#003f5c"
                         />
            </View>
            <View style={styles.inputView} >
                    <TextInput
                        editable={false}
                        selectTextOnFocus={false}
                        defaultValue={infocom.Email}
                        style={styles.inputText}
                        placeholder="Courriel"
                        placeholderTextColor="#003f5c"
                         />
            </View>
        </View>
    </View>
    </View>
    
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        paddingRight:15,
        paddingLeft:15
    },
    Title:{
        fontSize:30,
        marginTop:20,
        marginBottom:20,
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
        paddingTop: 15,
        paddingBottom:15,
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
        backgroundColor: "#ff0793",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginTop:40,
        marginBottom: 20
    },
})