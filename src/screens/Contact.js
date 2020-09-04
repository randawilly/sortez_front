import React,{useEffect,useState} from 'react';
import {AsyncStorage, Text,Image, View, Button,ScrollView,Dimensions,ActivityIndicator,ImageBackground,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import{filstreStyle} from '../style/FiltreStyle';
import {styles} from '../style/Style';
import Header from '../includes/Header';
import Filtre from '../includes/Filtre';
import ListeArtAg from '../includes/ListeArtAg';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Contact({route}) {
    const navigation = useNavigation();
    const txt_rubrique = route.params.txt_rubrique;

    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(null);
    function goBack(){
        navigation.goBack();
    }
    useEffect(() => {
        setTimeout(function(){ 
          getSession();
        }, 200);
      }, []);  
    async function getSession(){
        var username = await AsyncStorage.getItem('username');
        setIsLogged(username);
    }
    function contact_us(){
        setLoading(true);
        var url_contact = "https://www.sortez.org/sortez_pro/Api_front_global/contact_us";
        fetch(url_contact, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: Email,
                Message: Message,
            })
            })
            .then((response) => response.json())
            .then((json) => alert(json.sent))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    return (
        <View style={{flex: 1,}}>
        <View style={styles.headerHeight}>
        <Header />
        </View>
            <ScrollView>
                <View style={[styles.container]}>
                    <Text style={[styles.title_rubrique,styles.paddingBottom10,styles.txt_underline]}>{txt_rubrique}</Text>
                    <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                        <ImageBackground source={require('../../assets/imgs/bg_contact_home.jpg')} style={[styles.contact_bg,filstreStyle.w_100]}>
                            <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/contact_logo.png')} />
                            <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Votre Email"
                                placeholderTextColor="#003f5c"
                                value={isLogged}
                                onChangeText={(text) => { setEmail(text);}} />
                        </View>
                        <View style={styles.inputViewText} >
                            <TextInput
                                secureTextEntry
                                style={styles.inputTextArea}
                                placeholder="Votre Message"
                                multiline = {true}
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setMessage(text)} />
                        </View>
                        <View style={[styles.w_80]}>
                        <TouchableOpacity onPress={()=>contact_us()} style={[styles.bouton_rose_back]}>
                            {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                                <Text style={styles.text_bouton}>Envoyer</Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>goBack()} style={[styles.bouton_rose_back]}>
                                    <Text style={styles.text_bouton}>Retour</Text>
                        </TouchableOpacity>
                        </View>
                        </ImageBackground>
                </View>
                </View>
            </ScrollView>
        </View>
    );
    
}