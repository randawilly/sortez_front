import React from 'react';
import { FlatList,Image,Text, View, Button,TouchableOpacity,StyleSheet,TextInput,Linking,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  MenuHeader from './../components/MenuHeader';


export default function MyFidelity({ route }) {

    const Email = route.params.Email;
    const userInfo = route.params.UserInfo;
    const fidelity = route.params.fidelity;

    const navigation = useNavigation();

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
        });
    }
    function getleftstyle(left_val,total_val){
        var style_val = (left_val*100)/total_val;
        return style_val+"%";
    }
    function getrightstyle(left_val,total_val){
        var style_val = (left_val*100)/total_val;
        var diffs = 100-style_val;
        return diffs+"%";
    }
    function onBackPressed(){
        navigation.goBack();
    }
    function go_to_commercant_detail(){
        navigation.navigate("DetailCommercant",{
            infocom: to_show,
        });
    }
    function mail_commercant(email_adress){
        Linking.openURL('mailto:'+email_adress);
    }
    function call_commercant(phone_number){
        Linking.openURL('tel:'+phone_number);
    }
    console.log("(------------------------)");
    console.log(fidelity.fiche_tampon);
    console.log("(------------------------)");
    if(fidelity.fiche_tampon !=[]){
        var to_show = fidelity.fiche_tampon;
    }else if(fidelity.fiche_tampon != []){
        var to_show = fidelity.fiche_tampon;
    }else if(fidelity.fiche_remise != []){
        var to_show = fidelity.user.fiche_remise;
    }
    return (
        <View style={{height:'100%'}}>
            {/* <MenuHeader /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.Title}>La fidélisation en cours</Text>
                    <View style={styles.return_cont}>
                    <TouchableOpacity onPress={() => onBackPressed()} style={styles.loginBtn}>
                        <Text style={styles.btnText}>Retour</Text>
                    </TouchableOpacity>
                    </View>
                    {to_show.map((fidelities, i) =>
                        <View style={styles.container_loop} key={i}>
                            <View style={styles.row}>
                                <View style={styles.col_70}>
                                    <Text style={styles.nom_fidelity}>{fidelities.NomSociete}</Text>
                                    <Text style={styles.nom_ville}>{fidelities.ville_nom}</Text>
                                </View>  
                                <View style={styles.col_10}>
                                    <TouchableOpacity onPress={() => go_to_commercant_detail()} >
                                        <Image style={styles.image_icon} source={require("../../../assets/img/new_profile.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.col_10}>
                                    <TouchableOpacity onPress={() => mail_commercant(fidelities.Email)} >
                                        <Image style={styles.image_icon} source={require("../../../assets/img/new_message.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.col_10}>
                                    <TouchableOpacity onPress={() => call_commercant(fidelities.TelMobile)} >
                                        <Image style={styles.image_icon} source={require("../../../assets/img/new_phone.png")} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.description_fidelity}>{fidelities.description}</Text>
                            </View>
                            <View style={styles.row}>
                                <View style={{width:getleftstyle(fidelities.solde_tampon,fidelities.tampon_value),backgroundColor:"red",height:40,justifyContent: "center"}}><Text style={styles.txt_progress}>{fidelities.solde_tampon}</Text></View>
                                <View style={{width:getrightstyle(fidelities.solde_tampon,fidelities.tampon_value),backgroundColor:"blue",height:40,justifyContent: "center"}}><Text style={styles.txt_progress}>{fidelities.tampon_value}</Text></View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.col_50}><Text style={styles.txt_standard}>Date de validation : {fidelities.date_dernier_validation}</Text></View>
                                <View style={styles.col_50}><Text style={styles.txt_standard}>Nombre : {fidelities.dernier_value_added}</Text></View>
                            </View>
                        </View>
                    )} 
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
        flexDirection:'column',
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
    },
    left_progress:{
        width:'50%',
        textAlign:"center",
        backgroundColor:"red",
    },
    txt_progress:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        fontFamily:"futuraMd"
    },
    right_progress:{
        width:'50%',
        textAlign:"center",
        backgroundColor:"blue",
       
    },
    description_fidelity:{
        color:"black",
        fontSize:20,
        fontFamily:"futuraMd"
    },
    txt_standard:{
        fontSize:16,
        fontFamily:"futuraMd"
    },
    nom_ville:{
        fontSize:20,
        fontFamily:"futuraMd"
    },
    nom_fidelity:{
        fontSize:25,
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
    col_70:{
        // flex: 1,
        // flexDirection: 'column',
        width:'55%',
    },
    col_50:{
        width:"50%"
    },
    col_10:{
        // flex: 1,
        // flexDirection: 'column',
        width:'15%'
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
    return_cont:{
        width: "100%",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop:10,
        marginBottom: 20,
        paddingLeft:15,
        paddingRight:15
    },
    border_card:{
        borderStyle:"solid",
        borderColor:"#DC1A95",
        borderWidth:10,
        marginTop: 20
    },
    qr_image:{
        width: 300,
        height: 280,
        
    },
    logoImg:{
        width: 300,
        height: 200,
        marginTop: 20
    },
    num_card:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:20,
        textAlign:"center",
        fontFamily:"futuraMd"
    },
    Title:{
        fontSize:30,
        marginTop:20,
        marginBottom:0,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:"futuraMd"
    },
    inputView: {
        width: "80%",
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
})