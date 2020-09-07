import React from 'react';
import { Text, View,Button,StyleSheet,TouchableOpacity,ScrollView,Image,Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  MenuHeader from './../components/MenuHeader';


export default function MyCommande({route}) {
    
    const navigation = useNavigation();
    const Email = route.params.Email;
    const UserInfo = route.params.UserInfo;
    const commande = route.params.commande.commande;

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function onBackPressed(){
        navigation.goBack();
    }
    function go_to_commercant_detail(){
        navigation.navigate("DetailCommercant",{
            infocom: commande,
        });
    }
    function mail_commercant(email_adress){
        Linking.openURL('mailto:'+email_adress);
    }
    function call_commercant(phone_number){
        Linking.openURL('tel:'+phone_number);
    }
    function go_to_details(id_commande,commande_one){
        fetch('https://www.sortez.org/sortez_pro/Api_particulier/get_detail_command',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id_commande: id_commande
                    })
                }).then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData);
                    if(responseData.commande  == "null"){
                        alert("Liste vide");
                    }else{
                        navigation.navigate("DetailCommande",{
                            commande: responseData.commande,
                            commande_one:commande_one,
                            UserInfo:UserInfo,
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        
    }
    return (
        <View style={{height:'100%'}}>
            {/* <MenuHeader /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>Mes commandes en cours</Text>
                    <View style={{width:"100%",alignItems:"center"}}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => onBackPressed()} >
                            <Text style={styles.btnText}>Retour</Text>
                        </TouchableOpacity>
                    </View>

                    {commande.map((command, i) =>
                    <View style={styles.container_loop} key={i}>
                        <View style={styles.row}>
                            <View style={styles.col_70}>
                                <Text style={styles.nom_fidelity}>{command.NomSociete}</Text>
                                <Text style={styles.nom_ville}>{command.Nom}</Text>
                            </View>  
                            <View style={styles.col_10}>
                                <TouchableOpacity onPress={() => go_to_commercant_detail()} >
                                    <Image style={styles.image_icon} source={require("../../../assets/img/new_profile.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.col_10}>
                                <TouchableOpacity onPress={() => mail_commercant(command.Email)} >
                                    <Image style={styles.image_icon} source={require("../../../assets/img/new_message.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.col_10}>
                                <TouchableOpacity onPress={() => call_commercant(command.TelMobile)} >
                                    <Image style={styles.image_icon} source={require("../../../assets/img/new_phone.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.row_gen}>
                            <View style={styles.col_80}>
                                <View style={styles.row}>
                                    <Text style={styles.description_fidelity}>{command.type_command} du {command.created_at}</Text>
                                </View>
                                <View style={styles.row_next}>
                                    <Text style={styles.description_fidelity}>Date et heure souhaité: {command.jour_enlev} à {command.heure_enleve}</Text>
                                </View>
                            </View>
                            <View style={styles.col_20}>
                                <TouchableOpacity onPress={() => go_to_details(command.id,command)} >
                                    <Image style={styles.image_icon} source={require("../../../assets/img/new_validate.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )} 

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    title:{
        fontSize:30,
        marginTop:20,
        marginBottom:0,
        textAlign:"center",
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:"futuraMd"
    },
    loginBtn: {
        width: "100%",
        backgroundColor: "#DC1A95",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop:10,
        marginBottom: 20,
    },
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        width:"100%",
        paddingLeft:15,
        paddingRight:15,
    },
    btnText:{
        color:"white",
        fontSize:20,
        fontFamily:"futuraMd"
    },
    row:{
        flex: 0,
        flexDirection: 'row',
        // paddingLeft:15,
        // paddingRight:15,
        marginTop:15,
        width:'100%',
    },
    row_gen:{
        flex: 0,
        flexDirection: 'row',
        // paddingLeft:15,
        // paddingRight:15,
        // marginTop:15,
        width:'100%',
    },
    row_next:{
        flex: 0,
        flexDirection: 'row',
        // paddingLeft:15,
        // paddingRight:15,
        width:'100%',
    },
    col_70:{
        // flex: 1,
        // flexDirection: 'column',
        width:'55%',
    },
    col_80:{
        // flex: 1,
        // flexDirection: 'column',
        width:'80%',
    },
    col_20:{
        // flex: 1,
        // flexDirection: 'column',
        paddingTop:20,
        width:'20%',
    },
    col_50:{
        width:"50%"
    },
    col_10:{
        // flex: 1,
        // flexDirection: 'column',
        width:'15%'
    },
    image_icon:{
        width:40,
        height:40
    },
    container_loop:{
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingBottom :12,
        marginLeft: 15,
        marginRight:15,
        width:"100%",
    },
    nom_fidelity:{
        fontSize:25,
        fontFamily:"futuraMd"
    },
    nom_ville:{
        fontSize:20,
        fontFamily:"futuraMd"
    },
    image_icon:{
        width:40,
        height:40
    },
    description_fidelity:{
        fontFamily:"futuraMd"
    }
})