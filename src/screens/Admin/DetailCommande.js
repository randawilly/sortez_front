import React from 'react';
import { Text, View, Button,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import  MenuHeader from './../components/MenuHeader';


export default function DetailCommande({route}) {
    
    const navigation = useNavigation();
    const detail_com = route.params.commande;
    const commande_one = route.params.commande_one;
    const UserInfo = route.params.UserInfo.user;
    console.log("____5555555555_______")
    console.log(detail_com);
    console.log("____555555555_______")
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
    {/* <MenuHeader/> */}
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.Title}>Client: {UserInfo.Nom} {UserInfo.Prenom}</Text>
                <View style={styles.cont_txt}>
                    <Text style={styles.second_title}>Détail de la commande du</Text>
                </View>
                <View style={styles.cont_txt}>
                    <Text style={styles.second_title}>{commande_one.created_at}</Text>
                </View>
            </View>
                <View style={styles.second_container}>
                    <View>
                        <Text style={styles.txt_norm}>{commande_one.type_livraison}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt_norm}>Jour de livraison souhaitée : {commande_one.jour_enlev}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt_norm}>Heure de livraison souhaitée : {commande_one.heure_enleve}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt_norm}>Paiement : {commande_one.type_payement}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt_norm}>Prix total : {commande_one.total_price}€</Text>
                    </View>
                    <View>
                        <Text style={styles.txt_norm}>Question/ Commentaires : </Text>
                    </View>
                    <View>
                        <Text style={styles.txt_norm}>{commande_one.comment}</Text>
                    </View>
                </View> 
                <View style={styles.third_container}>
                {detail_com.map((commands, i) =>
                    <View style={styles.row} key={i}>
                    <Text style={styles.float_left}>{commands.true_title}</Text>
                    <Text style={styles.float_right}>{commands.nbre}</Text>
                    </View>
                )} 
                </View>
                <View style={styles.container_btn}>
                    <View style={{width:"100%",alignItems:"center"}}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => onBackPressed()} >
                            <Text style={styles.btnText}>Retour</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingBottom:20,
        width:"100%",
        paddingLeft:15,
        paddingRight:15,
    },
    container_btn: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:20,
        paddingTop:20,
        width:"100%",
        paddingLeft:15,
        paddingRight:15,
    },
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:20
    },
    row:{
        flex: 0,
        flexDirection: 'row',
        marginTop:15,
        width:'100%',
    },
    txt_norm:{
        fontSize:20,
        fontFamily:"futuraMd"
    },
    float_left:{
        fontSize:20,
        textAlign:"left",
        width:"50%"
    },
    float_right:{
        fontSize:20,
        textAlign:"right",
        width:"50%"
    },
    third_container:{
        paddingTop:20,
        borderTopWidth:1,
        padding:15,
        backgroundColor:"white",
        width:"100%",
    },
    second_container:{
        paddingTop:20,
        borderTopWidth:1,
        padding:15,
        backgroundColor:"white",
        width:"100%",
    },
    cont_txt:{
        textAlign:"center",
        fontFamily:"futuraMd"
    },
    second_title:{
        fontSize:25,
        alignItems: 'center',
        color:"#ff0793",
        fontFamily:"futuraMd"
    },
    Title:{
        fontSize:30,
        marginTop:20,
        marginBottom:20,
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