import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_loaded, setLoading] = useState(false);

    const navigation = useNavigation();
    function loginUser() {
        console.log('---------------------------------------------------');
        let login = email;
        let passwords = password;
        setLoading(true);
        fetch('https://www.sortez.org/auth/login_sortez_pro',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    identity: login,
                    password: passwords,
                })
            }).then((response) => response.json())
            .then((responseData) => {
                if(responseData.status =="logged in particular"){
                    fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_user_info_by_username',
                        {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                login: email
                            })
                        }).then((response) => response.json())
                        .then((responseData) => {
                            console.log(responseData);
                            setLoading(false);
                            navigateToDashboard(responseData);
                        })
                        .catch((error) => {
                            setLoading(false);
                            console.log(error);
                        });
                }else{
                    alert('Login ou mot de passe invalide');
                    setLoading(false);
                }
            })
            .catch((error) => {
                alert('Login ou mot de passe invalide');
                setLoading(false);
            });
    }
    function navigateToDashboard(responseData) {
        navigation.navigate("Dashboard",{
            Email:email,
            UserInfo:responseData,
          });
    }
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logoImg}
                    source={require("../../../assets/img/logo.png")}
                />
            </View>
            <Text style={styles.logo}>Côté consommateurs</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Votre identifiant"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => { setEmail(text);}} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Votre mot de passe"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)} />
            </View>
            <TouchableOpacity onPress={() => loginUser()} style={styles.loginBtn}>
            {is_loaded ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.loginText}>Valider</Text>}
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Mot de passe oublié</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        width: 300,
        height: 200,
        marginBottom: 20
    },
    logo: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 0,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#DC1A95",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginTop:40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});
export default Home;