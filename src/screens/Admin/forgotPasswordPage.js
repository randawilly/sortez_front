import React,{ useState } from 'react';
import { Alert,ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';

export default function forgotPasswordPage() {
    
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    
    const [isLoading, setLoading] = useState(false);
    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function goBack(){
        navigation.goBack();
    }
    function signUpUser(){
        setLoading(true);
        if(email !=""){
            fetch('https://www.sortez.org/sortez_pro/Sortez_pro_mobile/forgot_password',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                    })
                }).then((response) => response.json())
                .then((responseData) => {
                    if(responseData.status =="ok"){
                        Alert.alert(
                            "Info",
                            "Mail de réinitialisation du mot de passe envoyé, ",
                            [
                            {
                                text: "OK",
                                onPress: () => goBack(),
                                style: "cancel"
                            },
                            ],
                            { cancelable: false }
                        );
                    }else if(responseData.status =="ko"){
                        Alert.alert(
                            "Erreur",
                            "Une erreur s'est produit, veuillez réessayer plus tard !",
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
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                    <Text style={[styles.title_info,styles.paddingBottom10]}>Recuperer votre mot de passe</Text>
                        <TouchableOpacity onPress={()=>goBack()} style={styles.bouton_rose_contact}>
                            <Text style={styles.text_bouton}>Retour</Text>
                        </TouchableOpacity>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Email"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setEmail(text);}} />
                        </View>
                    <TouchableOpacity onPress={()=>signUpUser()} style={styles.bouton_rose_contact}>
                    {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                        <Text style={styles.text_bouton}>Obtenir un nouveau mot de passe</Text>
                    )}
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}