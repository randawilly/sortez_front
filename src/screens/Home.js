import React,{ Component,useState } from 'react';
import { Text,Modal, View,Image, ScrollView,TouchableOpacity,ImageBackground,TextInput,Linking,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../style/Style';
export default function Home() {
    
    const navigation = useNavigation();
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [txtVisit, setTxtVisit] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [loading, setsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    function agendaPage() {
        navigation.navigate("Agenda",{
            rubrique: "agenda",
            txt_rubrique: "L'Agenda événementiel",
          });
    }
    function goLink(link){
        setTxtVisit(link)
        setModalVisible(true)
        }
    function visitLink(){
        Linking.openURL(txtVisit).catch((err) => console.error('An error occurred', err));
        setModalVisible(false);
    }
    function articlePage() {
        navigation.navigate("Agenda",{
            rubrique: "article",
            txt_rubrique: 'L\'actualité & la revue de presse',
        });
    }
    function annuaire_page(){
        navigation.navigate("Annuaire",{
            rubrique: "annuaire",
            txt_rubrique: 'Les bonnes adresses',
        });
    }
    function DealsFidelity(){
        navigation.navigate("DealsFidelity",{
            rubrique: "DealsFidelity",
            txt_rubrique: 'Les deals & Fidélité',
        });
    }
    function boutiquePage() {
        navigation.navigate("Boutique",{
            rubrique: "boutique",
            txt_rubrique: 'Les boutiques en ligne',
          });
    }

    function editioMois(){
        var url = "http://online.fliphtml5.com/ugbv/uguz/";
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
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
        <ScrollView>
    <View style={styles.container,styles.paddingmargin_0}>
        <View style={styles.sub_container,styles.marginTop_50}>
            <Image resizeMode={'contain'} style={styles.logo_home} source={require('../../assets/imgs/logo_home.png')} />
            <Text style={styles.slogan}>DÉCOUVREZ L’ESSENTIEL DES SORTIES ET DES LOISIRS DE FRÉJUS À MENTON ET BIEN PLUS ENCORE !…</Text>
        </View>
        <View style={[styles.sub_container]}>
            <Image resizeMode={'contain'} style={styles.img_nb_lecteur} source={require('../../assets/imgs/nb_lecteur.png')} />
        </View>
        <View style={[styles.sub_container,styles.paddingBottom,styles.back_pink]}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>editioMois()} style={[styles.w_50,styles.paddingLeft_20,styles.paddingRight_10]} >
                    <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/imgs/edition_mois.jpg')} />
                    <Text style={[styles.menu_title,styles.textCenter]}>édition du mois</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>articlePage()} style={[styles.w_50,styles.paddingRight_20,styles.paddingLeft_10]} >
                    <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/imgs/article_btn.jpg')} />
                    <Text style={[styles.menu_title,styles.textCenter]}>actualité</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>agendaPage()} style={[styles.w_50,styles.paddingLeft_20,styles.paddingRight_10]} >
                    <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/imgs/agenda_btn.jpg')} />
                    <Text style={[styles.menu_title,styles.textCenter]}>agenda</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>annuaire_page()} style={[styles.w_50,styles.paddingRight_20,styles.paddingLeft_10]} >
                    <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/imgs/annuaire_btn.jpg')} />
                    <Text style={[styles.menu_title,styles.textCenter]}>annuaire</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>boutiquePage()} style={[styles.w_50,styles.paddingLeft_20,styles.paddingRight_10]} >
                    <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/imgs/boutiques_btn.jpg')} />
                    <Text style={[styles.menu_title,styles.textCenter]}>boutiques</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>DealsFidelity()} style={[styles.w_50,styles.paddingRight_20,styles.paddingLeft_10]} >
                    <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/imgs/deals_btn.jpg')} />
                    <Text style={[styles.menu_title,styles.textCenter]}>deals & fidelité</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter,styles.padding_10]}>
            <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/magazine_img.png')} />
            <Text style={[styles.title_info,styles.textCenter]}>le magazine sortez</Text>
            <Text style={[styles.subtitle_info,styles.textCenter]}>Présentation, diffusion, audience, lectorat, archives</Text>
            <TouchableOpacity onPress={()=>goLink('https://www.sortez.org')} style={styles.bouton_vert}>
                <Text style={styles.text_bouton}>plus d'informations</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter,styles.padding_10]}>
            <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/img_home_avantage.png')} />
            <Text style={[styles.title_info,styles.textCenter]}>les avantages des consommateurs</Text>
            <Text style={[styles.subtitle_info,styles.textCenter]}>les bons plans, la fidélisation, la carte privilège, newsletter, alertes, tirages au sort ...</Text>
            <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/newsletter_home.png')} />
            <TouchableOpacity onPress={()=>goLink('https://www.soutenonslecommercelocal.fr/avantages-particuliers')} style={styles.bouton_vert}>
                <Text style={styles.text_bouton}>plus d'informations</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter,styles.padding_10]}>
            <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/avantage_home.png')} />
            <Text style={[styles.title_info,styles.textCenter]}>les avantages des professionnels</Text>
            <Text style={[styles.subtitle_info,styles.textCenter]}>Référencez et boostez immédiatement
                        vos données en souscrivant gratuitement
                        un abonnement Premium !…
                        Landing page, actualités, événements,
                        boutique en ligne...</Text>
            <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/event_flash_home.png')} />
            <TouchableOpacity onPress={()=>goLink('https://www.soutenonslecommercelocal.fr/abonnement-premium')} style={styles.bouton_vert}>
                <Text style={styles.text_bouton}>plus d'informations</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter,styles.padding_10]}>
            <View style={[styles.row]}>
                <Image resizeMode={'contain'} style={styles.icon_home} source={require('../../assets/imgs/fb_icon_home.png')} />
                <Image resizeMode={'contain'} style={styles.icon_home} source={require('../../assets/imgs/twitter_home.png')} />
            </View>
            <Text style={[styles.footer_adress]}>PRIVICONCEPT SAS - Le Magazine Sortez
            535 Route des Lucioles, 06560 Sophia Antipolis
            WWW.SORTEZ.ORG - TÉL. 04 22 32 70 80</Text>
            <Text style={[styles.contact_footer]}>RCS Nice  : 820 043 693 - Siret : 820 043 693 00010 - Code NAF : 6201Z</Text>
        </View>
        <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
            <ImageBackground source={require('../../assets/imgs/bg_contact_home.jpg')} style={styles.contact_bg}>
                <Image resizeMode={'contain'} style={styles.img_home} source={require('../../assets/imgs/contact_logo.png')} />
                <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Votre Email"
                    placeholderTextColor="#003f5c"
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
            <TouchableOpacity onPress={()=>contact_us()} style={styles.bouton_rose_contact}>
            {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                <Text style={styles.text_bouton}>Envoyer</Text>
            )}
            </TouchableOpacity>
            </ImageBackground>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={[styles.title_info,styles.paddingBottom10]}>Ouvrir le site ? (Sortez.org)</Text>
            <TouchableOpacity
              style={[styles.bouton_vert,styles.w_80]}
              onPress={() => {
                visitLink();
              }}
            >
            {loading ? <ActivityIndicator style={{paddingTop:0}} size="large" color="white" /> :(
                <Text style={styles.text_bouton}>Visiter</Text>
            )}
              
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bouton_red,styles.w_80]}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.text_bouton}>Plus tard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </ScrollView>

    );
}