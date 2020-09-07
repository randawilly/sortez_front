import React,{ useState } from 'react';
import { ToastAndroid,AsyncStorage ,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
export default function Login() {
    
    const navigation = useNavigation();
    const [Email, setEmail] = useState("");
    const [Message, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    function showToast (text) {
        ToastAndroid.showWithGravity(text, ToastAndroid.LONG,ToastAndroid.CENTER);
      };
    function goBack(){
        navigation.goBack();
    }
    function goDashboard(data,Email){
        navigation.navigate("Dashboard",{
            UserInfo: data,
            Email:Email,
        });
    }
    function DealsFidelity(){
        navigation.navigate("DealsFidelity",{
            rubrique: "DealsFidelity",
            txt_rubrique: 'Les deals & Fidélité',
        });
    }

   async function setSession (id_user,username,nom,prenom,ion_auth_id){
        await AsyncStorage.setItem('id_user', id_user);
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('Nom', nom);
        await AsyncStorage.setItem('Prenom', prenom);
        await AsyncStorage.setItem('ion_auth_id', ion_auth_id);
        showToast("Vous êtes connecté");
    }

    function login(){
        
        setLoading(true);
        var url_contact = "https://www.sortez.org/auth/login_sortez_pro";
        fetch(url_contact, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identity: Email,
                password: Message,
            })
            })
            .then((response) => response.json())
            .then((json) => {
                if(json.status == "logged in particular"){
                    fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_user_info_by_username',
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            login: Email
                        })
                    }).then((response) => response.json())
                    .then((responseData) => {
                        setSession(responseData.user.IdUser,responseData.user.Login,responseData.user.Nom,responseData.user.Prenom,responseData.user.user_ionauth_id);
                        setLoading(false);
                        // goBack();
                        goDashboard(responseData,responseData.user.Login);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log(error);
                    });
                }else{
                    alert('Login ou mots de passe incorrecte !!!')
                }
            })
            .catch((error) => alert('Login ou mots de passe incorrecte !!!'))
            .finally(() => setLoading(false));
    }
    
    return (    
    <ScrollView>
        <View style={styles.container}>
            <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                <Text style={[styles.title_info,styles.paddingBottom10]}>Se connecter</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Identifiant"
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => { setEmail(text);}} />
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
                <TouchableOpacity onPress={()=>login()} style={styles.bouton_rose_contact}>
                {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                    <Text style={styles.text_bouton}>Valider</Text>
                )}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>goBack()} style={styles.bouton_rose_contact}>
                    <Text style={styles.text_bouton}>Retour</Text>
                </TouchableOpacity>
            </View>
        </View>
</ScrollView>

    );
}