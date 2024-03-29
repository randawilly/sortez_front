import React, { Component,useState,useEffect } from 'react';
import {
  View,
  Platform,
  TextInput,
  Text,
  Image,
  AsyncStorage,
  Alert ,
  ToastAndroid
} from 'react-native';
import {styles} from '../style/Style';
import{filstreStyle} from '../style/FiltreStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function Header(props) {
  const navigation = useNavigation();
  const [isLogged, setIsLogged] = useState(null);
  const [nomUser, setUserName] = useState("null");
  const [prenomUser, setUserFName] = useState("null");
  const [type, setType] = useState("null");

    useEffect(() => {
      setTimeout(function(){ 
        getSession();
      }, 200);
    }, []);  
  function showToast (text) {
    ToastAndroid.showWithGravity(text, ToastAndroid.LONG,ToastAndroid.CENTER);
  };
  function goMenu() {
    navigation.navigate("Home",{
        rubrique: "agenda",
        txt_rubrique: "L'Agenda événementiel",
    });
  }
  async function getSession(){
    var username = await AsyncStorage.getItem('username');
    var nom = await AsyncStorage.getItem('Nom');
    var prenom = await AsyncStorage.getItem('Prenom');
    var type = await AsyncStorage.getItem('type');
    setUserName(nom);
    setUserFName(prenom);
    setIsLogged(username);
    setType(type);
}
async function logOutYes(){
  await AsyncStorage.removeItem('id_user');
  await AsyncStorage.removeItem('username');
  await AsyncStorage.removeItem('Nom');
  await AsyncStorage.removeItem('Prenom');
  await AsyncStorage.removeItem('type');
  setIsLogged(null);
  showToast("Vous êtes déconnecté");
  navigation.navigate("Home",{
    rubrique: "DealsFidelity",
});
}
  function goCard(data){
    navigation.navigate("Card",{
        txt_rubrique: "Ma Carte",
        UserInfo: data,
    });
  }
  function goFavorisPage(data){
    navigation.navigate("Favoris",{
        txt_rubrique: "Mes Favoris",
        Favoris: data,
    });
  }
  function login(data){
    navigation.navigate("Login",{
        rubrique: "DealsFidelity",
    });
  }
  function goContact(){
    navigation.navigate("Contact",{
      txt_rubrique: "Contacter nous",
    });
  }
  const logOut = () =>
  Alert.alert(
    "Se déconnecter",
    "Voulez-vous vraiment vous déconnecter ?",
    [
      {
        text: "Non",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Oui", onPress: () => logOutYes() }
    ],
    { cancelable: false }
  );
  async function setSession (id_user,username,nom,prenom){
    await AsyncStorage.setItem('id_user', id_user);
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('Nom', nom);
    await AsyncStorage.setItem('Prenom', prenom);
  }

  function goDashboard(data,Email){
    if(type =="particulier"){
    navigation.navigate("Dashboard",{
      UserInfo: data,
      Email:Email,
    });
  }else if(type == "commercant"){
    navigation.navigate("ProDashboard",{
      infoCom: data,
      Email:Email,
    });
  }
    
  }
  function goProDashboard(data,Email){
    navigation.navigate("ProDashboard",{
        infoCom: data,
        Email:Email,
    });
}
  async function goAccount(){
    const username = await AsyncStorage.getItem('username');
    if (username != null) {
      if(type =="particulier"){
        fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_user_info_by_username',
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            login: username
                        })
                    }).then((response) => response.json())
                    .then((responseData) => {
                        setSession(responseData.user.IdUser,responseData.user.Login,responseData.user.Nom,responseData.user.Prenom,"particulier");
                        // setLoading(false);
                        goDashboard(responseData,responseData.user.Login);
                    })
                    .catch((error) => {
                        // setLoading(false);
                        console.log(error);
                    });
      }else if(type == "commercant"){
        fetch('https://www.sortez.org/sortez_pro/sortez_pro_mobile/get_login_by_id',
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            login: username
                        })
                    }).then((response) => response.json())
                    .then((responseData) => {
                        setSession(responseData.json.IdCommercant,responseData.json.Login,responseData.json.Nom,responseData.json.Prenom,responseData.json.user_ionauth_id,"commercant");
                        goProDashboard(responseData,responseData.json.Login);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        }
    }else{
      navigation.navigate("Login",{
        rubrique: "agenda",
        txt_rubrique: "L'Agenda événementiel",
      });
    }
  }
  async function goMaCarte(){
    const id_user = await AsyncStorage.getItem('id_user');
    if (id_user != null) {
        fetch('https://www.sortez.org/sortez_pro/Api_front_global/getcardinfo',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id_user: id_user
            })
        }).then((response) => response.json())
        .then((responseData) => {
            goCard(responseData);
        })
        .catch((error) => {
            // setLoading(false);
            console.log(error);
        });
        // num_id_card_virtual
    }else{
      
      navigation.navigate("Login",{
        rubrique: "agenda",
        txt_rubrique: "L'Agenda événementiel",
      });

    }

  }

  async function goFavoris(){
    const id_user = await AsyncStorage.getItem('id_user');
    if (id_user != null) {
      fetch("https://www.sortez.org/sortez_pro/Api_front_global/getFavoris", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_user: id_user,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          goFavorisPage(responseData);
        })
        .catch((error) => {
          // setLoading(false);
          console.log(error);
        });
      // num_id_card_virtual
    }else{
      navigation.navigate("Login",{
        rubrique: "agenda",
        txt_rubrique: "L'Agenda événementiel",
      });
    }
  }
  
  return (
        <View style={[styles.containerNopadding]}>
        <View style={{width:"100%",paddingBottom:0,height:110}}>
          <Image resizeMode={'contain'} style={styles.logo_home} source={require('../../assets/imgs/header_rapide.png')} />
        </View>
          <View style={[styles.btnHomeMenu]}>
            <TouchableOpacity onPress={()=>goMenu()} style={[filstreStyle.w_100,filstreStyle.heighted]}></TouchableOpacity>
          </View>
          <View style={[styles.btnAccountMenu]}>
            <TouchableOpacity onPress={()=>goAccount()} style={[filstreStyle.w_100,filstreStyle.heighted]}></TouchableOpacity>
          </View>
          <View style={[styles.btnMaCarteMenu]}>
            <TouchableOpacity onPress={()=>goMaCarte()} style={[filstreStyle.w_100,filstreStyle.heighted]}></TouchableOpacity>
          </View>
          <View style={[styles.btnfavorisMenu]}>
            <TouchableOpacity onPress={()=>goFavoris()} style={[filstreStyle.w_100,filstreStyle.heighted]}></TouchableOpacity>
          </View>
          <View style={[styles.btnContactMenu]}>
            <TouchableOpacity onPress={()=>goContact()} style={[filstreStyle.w_100,filstreStyle.heighted]}></TouchableOpacity>
          </View>
          <View style={[styles.container_login]}>
          {isLogged != null ?
          <View style={[styles.blockLoggedin,styles.row,filstreStyle.w_100]}>
            <Text style={[styles.usernames,styles.textCenter,styles.paddingTop_5,styles.w_70]}>
              Bienvenue: {nomUser} {prenomUser}
            </Text>
            <TouchableOpacity style={[styles.btnLogout,filstreStyle.w_100]} onPress={()=>logOut()}>
                <Text style={[styles.btnLogoutAllTxt]}>Déconnecter</Text>
            </TouchableOpacity>
          </View> :(
          <View style={[styles.w_100,styles.blockLoggedin]}>
            <TouchableOpacity style={[styles.btnLogin]} onPress={()=>login()}>
                <Text style={[styles.btnLoginAllTxt]}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          )}
          </View>
        </View>
      )
}