import React,{ useState } from 'react';
import { Text, View,Button,StyleSheet,TouchableOpacity,ScrollView,ActivityIndicator,Linking,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import Header from '../../includes/Header';

export default function ProDashboard({ route,props }) {

    const Email = route.params.Email;
    const infoCom = route.params.infoCom;
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
        fetch('https://www.sortez.org/sortez_pro/sortez_pro_mobile/get_login_by_id',
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
            navigation.navigate("ProMyData",{
                Email:Email,
                infoCom:responseData,
            });
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        });
        
    }
    function ValidVisitPage(){
        navigation.navigate("ValidVisit",{
            Email:Email,
            infoCom:infoCom,
        });
    }
    function bonplanProPage(){
        setLoading2(true);
        fetch('https://www.sortez.org/sortez_pro/sortez_pro_mobile/liste_reservationionic',
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
            if(responseData.infoclient != null){
                navigation.navigate("ReservationBonplan",{
                    Email:Email,
                    infoCom:infoCom,
                    bonpaln:responseData
                });
            }else{
                alert('liste vide');
                // navigation.navigate("MyFidelity",{
                //     Email:Email,
                //     infoCom:infoCom,
                //     fidelity:responseData
                // });
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
    function reservationhebergement(){
        navigation.navigate("Reservationhebergenment"); 
    }
    function reservationrestauration(){
        navigation.navigate("Reservationrestauration"); 
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
                            infoCom:infoCom,
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
        alert('okok')
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
                infoCom:infoCom,
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
    return (    
        <View style={{height:'100%'}}>
        <View style={styles.headerHeight}>
            <Header />
        </View>
            <ScrollView showsVerticalScrollIndicator={false}>  
                <View style={styles.topTitle}>
                    <Text style={styles.titleText}>Menu général</Text>
                    <Text style={styles.subtitleText}>Bienvenue {infoCom.json.Nom} {infoCom.json.Prenom} </Text>
                </View>
                <View style={styles.container}>
                <TouchableOpacity onPress={() => MyDataPage()} style={styles.loginBtn}>
                        {is_loaded ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Mon compte</Text>}
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => ValidVisitPage()}  style={styles.loginBtn}>
                        <Text style={styles.btnText}>Valider une visite</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => bonplanProPage()} style={styles.loginBtn}>
                        {is_loaded2 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Les bonplans en cours</Text>}
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => MyBonplanpage()} style={styles.loginBtn}>
                        {is_loaded3 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Reservation plat du jours</Text>}
                </TouchableOpacity>*/}
                <TouchableOpacity onPress={() => reservationhebergement()} style={styles.loginBtn}>
                        {is_loaded4 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Reservation hebergement</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => reservationrestauration()} style={styles.loginBtn}>
                        {is_loaded3 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Reservation restauration</Text>}
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={() => MyCommandPage()} style={styles.loginBtn}>
                        {is_loaded4 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Liste de mes clients</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => MyCommandPage()} style={styles.loginBtn}>
                        {is_loaded4 ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.btnText}>Mes paramètres</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>go_to_soutenons()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>www.soutenonslecommercelocal.fr</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>go_to_sortez()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>www.magazine-sortez-org</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={()=>logOut()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>Déconnexion</Text>
                </TouchableOpacity> */}
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
        fontWeight:'bold'
    },
    topTitle:{
        backgroundColor:"white",
    },
    btnText:{
        color:"white",
        fontSize:20
    },
    subtitleText:{
        fontSize:25,
        textAlign:"center",
        marginTop:10,
        marginBottom:20,
    },
    loginBtn: {
        width: "100%",
        color:"white",
        backgroundColor: "#DC1A95",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
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
            backgroundColor:'#DC1A95'
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