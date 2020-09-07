import React,{ useState } from 'react';
import { AsyncStorage,Alert ,ToastAndroid,Text, View,Button,StyleSheet,TouchableOpacity,ScrollView,ActivityIndicator,Linking,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../includes/Header';
export default function Dashboard({ route,props }) {

    const Email = route.params.Email;
    const userInfo = route.params.UserInfo;
    const [is_loaded, setLoading] = useState(false);
    const [is_loaded2, setLoading2] = useState(false);
    const [is_loaded3, setLoading3] = useState(false);
    const [is_loaded4, setLoading4] = useState(false);

    const navigation = useNavigation();

    function onBackPressed(){
        navigation.goBack()
    }
    
    function MyDataPage(){
        setLoading(true);
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
            setLoading(false);
            navigation.navigate("MyData",{
                Email:Email,
                UserInfo:responseData,
            });
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        });
        
    }
    function MyCardPage(){
        navigation.navigate("MyCard",{
            Email:Email,
            UserInfo:userInfo,
        });
    }
    function MyFidelityPage(){
        setLoading2(true);
        fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_fidelity_user',
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
            setLoading2(false);
            if(responseData.fiche_tampon ==[] && responseData.fiche_tampon == [] && responseData.fiche_remise == []){
                // navigation.navigate("Empty");
                alert("Liste vide");
            }else{
                navigation.navigate("MyFidelity",{
                    Email:Email,
                    UserInfo:userInfo,
                    fidelity:responseData
                });
            }
            
        })
        .catch((error) => {
            setLoading2(false);
            console.log(error);
        });

    }
    function logout(){
        navigation.navigate("Home"); 
    }
    function MyCommandPage(){
        setLoading4(true);
            fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_command_user',
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
                    console.log(responseData);
                    setLoading4(false);
                    if(responseData.commande  == "null"){
                        alert("Liste vide");
                    }else{
                        navigation.navigate("MyCommande",{
                            Email:Email,
                            UserInfo:userInfo,
                            commande:responseData
                        }); 
                    }
                })
                .catch((error) => {
                    setLoading4(false);
                    console.log(error);
                });
    }

    function MyBonplanpage(){
        setLoading3(true);
        fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_bonplan_user',
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
            setLoading3(false);
            navigation.navigate("MyBonplan",{
                Email:Email,
                UserInfo:userInfo,
                bonplan:responseData
            }); 
        })
        .catch((error) => {
            setLoading3(false);
            console.log(error);
        });
    }
    function go_to_soutenons(phone_number){
        Linking.openURL("https://www.soutenonslecommercelocal.fr");
    }
    function go_to_sortez(phone_number){
        Linking.openURL("https://www.magazine-sortez.org");
    }
    function showToast (text) {
        ToastAndroid.showWithGravity(text, ToastAndroid.LONG,ToastAndroid.CENTER);
      };
    async function logOutYes(){
        await AsyncStorage.removeItem('id_user');
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('Nom');
        await AsyncStorage.removeItem('Prenom');
        showToast("Vous êtes déconnecté");
        navigation.navigate("Home",{
          rubrique: "DealsFidelity",
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
    return (    
        <View style={{height:'100%'}}>
        <View style={styles.headerHeight}>
            <Header />
        </View>
            <ScrollView showsVerticalScrollIndicator={false}>  
                <View style={styles.topTitle}>
                    <Text style={styles.titleText}>Menu général</Text>
                    <Text style={styles.subtitleText}>Bienvenue {userInfo.user.Nom} {userInfo.user.Prenom} </Text>
                </View>
                <View style={styles.container}>
                <TouchableOpacity onPress={() => MyDataPage()} style={styles.loginBtn}>
                        {is_loaded ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Mes données</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => MyCardPage()}  style={styles.loginBtn}>
                        <Text style={styles.btnText}>Ma carte sur mon mobile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => MyFidelityPage()} style={styles.loginBtn}>
                        {is_loaded2 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Ma fidelité en cours</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => MyBonplanpage()} style={styles.loginBtn}>
                        {is_loaded3 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Mes bonplans en cours</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => MyCommandPage()} style={styles.loginBtn}>
                        {is_loaded4 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Mes commandes en cours</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>go_to_soutenons()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>www.soutenonslecommercelocal.fr</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>go_to_sortez()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>www.magazine-sortez-org</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>logOut()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>Déconnexion</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>  
        </View>
    );
}
const styles = StyleSheet.create({
    titleText:{
        fontSize:30,
        textAlign:"center",
        marginTop:20,
        fontWeight:'bold',
        fontFamily:"futuraMd"
    },
    topTitle:{
        backgroundColor:"white",
        fontFamily:"futuraMd"
    },
    btnText:{
        color:"white",
        fontSize:20,
        fontFamily:"futuraMd"
    },
    subtitleText:{
        fontSize:25,
        textAlign:"center",
        marginTop:10,
        marginBottom:20,
        fontFamily:"futuraMd"
    },
    loginBtn: {
        width: "100%",
        color:"white",
        backgroundColor: "#ff0793",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        fontFamily:"futuraMd"
    },
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        paddingLeft:15,
        paddingRight:15
    },
    ViewOneStyle:{
        height:50,
        width:'50%',
      },
      ViewTwoStyle:{
        height:50,
        width:'50%',
        alignItems:'flex-end'
      },
      ViewstyleHead:{
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 15 },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 15,
            height: 80,
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'#ff0793'
      },
      logoImg:{
        width:70,
        height:50,
        marginRight:10,
        marginBottom:10,
        marginTop:20
      },
      headerHeight:{
        height:164
      }
})