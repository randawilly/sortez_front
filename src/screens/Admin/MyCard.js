import React from 'react';
import { Image,Text, View, Button,TouchableOpacity,StyleSheet,TextInput,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  MenuHeader from './../components/MenuHeader';

export default function MyCard({ route }) {

    const Email = route.params.Email;
    const userInfo = route.params.UserInfo;

    const navigation = useNavigation();

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    function onBackPressed(){
        navigation.goBack()
    }
    return (
        <View style={{height:'100%'}}>
            {/* <MenuHeader /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image
                        style={styles.logoImg}
                        source={require("../../../assets/img/logo.png")}
                    />
                    <Text style={styles.num_card}>Carte numéro {userInfo.user.num_id_card_physical}</Text>
                    <View style={styles.border_card}>
                        <Image
                            style={styles.qr_image}
                            source={{
                            uri: 'https://www.sortez.org/application/resources/front/images/cards/qrcode_'+userInfo.user.virtual_card_img,
                            }}
                        />
                    </View>
                    <View style={{width:"100%",alignItems:"center"}} >
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
        width:"100%",
        paddingLeft:15,
        paddingRight:15,
    },
    loginBtn: {
        width: "100%",
        backgroundColor: "#DC1A95",
        borderRadius: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        marginBottom: 20
    },
    border_card:{
        borderStyle:"solid",
        borderColor:"#DC1A95",
        borderWidth:10,
        marginTop: 20,
        width:"100%",
        alignItems:'center'
    },
    qr_image:{
        width: "70%",
        height: 250,
        marginTop: 20,
        marginBottom:20
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
})