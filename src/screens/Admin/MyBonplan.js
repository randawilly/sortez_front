import React from 'react';
import { FlatList,Image,Text, View, Button,TouchableOpacity,StyleSheet,TextInput,Linking,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  MenuHeader from './../components/MenuHeader';


export default function MyBonplan({ route }) {

    const Email = route.params.Email;
    const userInfo = route.params.UserInfo;
    const bonplan = route.params.bonplan;

    const navigation = useNavigation();

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
            infocom: to_show,
        });
    }
    function mail_commercant(email_adress){
        Linking.openURL('mailto:'+email_adress);
    }
    function call_commercant(phone_number){
        Linking.openURL('tel:'+phone_number);
    }

    if(bonplan.bonplan !=[]){
        var to_show = bonplan.bonplan;
    }else if(bonplan.archives != []){
        var to_show = bonplan.archives;
    }
    console.log("(------------------------)");
    console.log(bonplan.archives);
    console.log(bonplan.archives);
    console.log("(------------------------)");

    return (
        <View style={{height:'100%'}}>
            {/* <MenuHeader /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.Title}>Mes bons plans en cours</Text>
                    <View style={{width:"100%",alignItems:"center"}}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => onBackPressed()} >
                            <Text style={styles.btnText}>Retour</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.alerttext,styles.alerttexte2]}><Text style={styles.alerttxt}>En attent de validation</Text></View>
                    </View>
                    {bonplan.bonplan.map((bonplans, i) =>
                        <View style={styles.container_loop} key={i}>
                            <View style={styles.row}>
                                <View style={styles.col_70}>
                                    <Text style={styles.nom_societe}>{bonplans.NomSociete}</Text>
                                    <Text style={styles.nom_simple}>{bonplans.Nom}</Text>
                                </View>  
                                <View style={styles.col_10}>
                                    <TouchableOpacity onPress={() => go_to_commercant_detail()} >
                                        <Image style={styles.image_icon} source={require("../../../assets/img/new_profile.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.col_10}>
                                    <TouchableOpacity onPress={() => mail_commercant(bonplans.Email)} >
                                        <Image style={styles.image_icon} source={require("../../../assets/img/new_message.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.col_10}>
                                    <TouchableOpacity onPress={() => call_commercant(bonplans.TelMobile)} >
                                        <Image style={styles.image_icon} source={require("../../../assets/img/new_phone.png")} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.description_bonplan}>Condition: {bonplans.bonplan_titre}</Text>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.alerttext}>
                                    <Text style={styles.alerttxt}>Offre à utiliser avant le {bonplans.date_validation}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.col_100}>
                                    <Text style={styles.txt_standard}>Date de visite : {bonplans.date_visit}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.col_100}>
                                    <Text style={styles.txt_standard}>Nombre de pace(s) reservée(s) : {bonplans.nb_place}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    
                    <View style={styles.row}>
                        <View style={[styles.container_loop_arch]}><Text style={styles.titre_block}>Les archives</Text></View>
                    </View>

                    {bonplan.archives.map((bonplanse, j) =>
                        <View style={styles.container_loop} key={j}>
                            <View style={styles.row}>
                                <View style={styles.col_70}>
                                    <Text style={styles.nom_societe}>{bonplanse.NomSociete}</Text>
                                    <Text style={styles.nom_simple}>{bonplanse.Nom}</Text>
                                </View>
                                <View style={styles.col_10}>
                                    <Image style={styles.image_icon} source={require("../../../assets/img/icon1.png")} />
                                </View>  
                            </View>
                            <View style={styles.row}>
                                <View style={styles.col_100}>
                                    <Text style={styles.txt_standard}>Date de validation : {bonplanse.date_validation}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.col_100}>
                                    <Text style={styles.txt_standard}>{bonplanse.bonplan_titre}</Text>
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
    titre_block: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
        fontFamily:"futuraMd"
    },
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        width:"100%",
        paddingLeft:15,
        paddingRight:15,
        fontFamily:"futuraMd"
    },
    image_icon:{
        width:40,
        height:40
    },
    container_loop_arch:{
        borderBottomWidth:1,
        width:'100%',
        alignItems:'center',
        paddingBottom :15,
    },
    container_loop:{
        borderBottomWidth:1,
        paddingBottom :12,
        marginLeft: 15,
        marginRight:15,
    },
    left_progress:{
        width:'50%',
        textAlign:"center",
        backgroundColor:"red",
    },txt_progress:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        fontFamily:"futuraMd"
    },
    right_progress:{
        width:'50%',
        textAlign:"center",
        backgroundColor:"blue",
        fontFamily:"futuraMd"
       
    },
    description_bonplan:{
        color:"black",
        fontSize:16,
        fontFamily:"futuraMd"
    },
    txt_standard:{
        fontSize:16,
        fontFamily:"futuraMd"
    },
    nom_simple:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:"futuraMd"
    },
    nom_societe:{
        fontSize:20,
        fontWeight:'bold',
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
    col_100:{
        // flex: 1,
        // flexDirection: 'column',
        width:'100%',
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
        marginBottom: 20
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
    alerttext: {
        width: "100%",
        backgroundColor: "#FF0000",
        borderRadius: 0,
        height: 50,
        justifyContent: "center",
        marginTop:10,
        marginBottom: 20,
        paddingLeft:10,
        fontFamily:"futuraMd"
    },
    alerttexte2:{
        // marginLeft:15,
        // marginRight:15,
        width: "100%",
        fontFamily:"futuraMd"
    },
    alerttxt:{
        color:'#fff',
        fontSize:15,
        textAlign:'left',
        fontFamily:"futuraMd"
    }
})