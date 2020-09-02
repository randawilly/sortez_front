import React, { useEffect,Component,useState } from 'react';
import {Alert,Modal,View,Platform,TextInput,Text,Picker,TouchableOpacity,Image,FlatList,ActivityIndicator,AsyncStorage} from 'react-native';
import{filstreStyle} from '../style/FiltreStyle';
import{ListeStyle} from '../style/ListeStyle';
import{styles} from '../style/Style';
import { useNavigation } from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';
import DatePicker from 'react-native-datepicker';
// import { Icon } from 'react-native-elements'
export default function DetailsContentDealsFidelity(props) {const [selectedValue, setSelectedValue] = useState("java");
    const dealsF = props.agenda.details;
    const typeDeals = props.typeDeals;
    const navigation = useNavigation();
    const [isLogged, setIsLogged] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [dateNow, setDateNow] = useState(new Date());
    const [nbPlace, setNbPlace] = useState("1");
    async function getSession(){
        var username = await AsyncStorage.getItem('username');
        setIsLogged(username);
    }
    function onChangeDate(date){
        setDateNow(date);
    }
    function validateRes(id){
        alert(isLogged);
    }
    useEffect(() => {
        getSession();
    }, []);
    // alert(isLogged)
    if(typeof(dealsF) != "undefined"){
        if(typeDeals == "bonplan"){
            var array_picker = [];
            for(let a = 1;a<=parseInt(dealsF.nbMax);a++){
                array_picker.push(a);
            }
            var bouclenbVisit = array_picker.map( (s, i) => {
                return <Picker.Item key={i} value={s} label={""+s} />
            });
            var img = dealsF.bonplan_photo1;
            var id = dealsF.bonplan_id;
            var titre = dealsF.bonplan_titre;
            var description = <Text style={[styles.colorBlack,styles.textCenter,styles.paddingTop_10]}>{dealsF.bonplan_texte}</Text>;
            var txt_prix =  <View>
                                <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Prix: {dealsF.prix_normbp}</Text>
                                <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Valeur: {dealsF.prix_remisebp}</Text>
                                <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>Economie: {parseInt(dealsF.prix_remisebp)-parseInt(dealsF.prix_normbp)}</Text>
                            </View>
        }else{
            var img = dealsF.image;
            var titre = dealsF.titre;
            var id = dealsF.id;
            var txt_prix = <Text style={[styles.title_info,styles.textCenter]}>Valeur: {dealsF.prix}</Text>
            var description = <View>
                <Text style={styles.txt_fidelity1}>
                Avant de bénéficier de cette offre de fidélisation
                le consommateur doit posséder
                la carte privilège Sortez ©.
                </Text>
                <Text style={styles.txt_fidelity2}>
                Notre établissement est partenaire de la carte
                de fidélité multi-commerce Sortez©.
                Un concept fédérateur pour la dynamisation
                et la fidélisation du commerce et de l'artisanat
                </Text>
            </View>;
        }

        var details = 
        <View style={styles.w_100}>
            <TouchableOpacity style={[styles.btnBack]} onPress={()=>goBack()}>
                <Text style={[styles.btnBackTxt]}>Retour Liste</Text>
            </TouchableOpacity>
            <Image style={{height: 250, width: "100%"}} source={{uri:img}} />
            <Text style={[styles.title_info,styles.textCenter,styles.paddingTop_10]}>{titre}</Text>
            {description}
            <Text style={[styles.textCenter]}>{txt_prix}</Text>
            <Text style={ListeStyle.label_date}>Il reste:</Text>
            <CountDown
                size={20}
                until={new Number((Math.round(new Date(dealsF.date_fin).getTime()/ 1000)) - (Math.round(new Date().getTime()/ 1000)))}
                onFinish={() => reinit_filter()}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#DC1A95'}}
                digitTxtStyle={{color: '#DC1A95'}}
                timeLabelStyle={{color: '#DC1A95', fontWeight: 'bold'}}
                separatorStyle={{color: '#DC1A95'}}
                timeToShow={['D','H', 'M', 'S']}
                timeLabels={{d:"Jours",h:"Heures",m: "Minutes", s: "secondes"}}

            />
            
            {isLogged != null && typeof(isLogged) != "undefined" && isLogged !="" && typeDeals =="bonplan" ? <View>
                <TouchableOpacity onPress={() => {
                    setModalVisible(true);
                    }} style={[styles.bouton_vert]}>
                    <Text style={[styles.text_bouton]}>Reserver cet offre</Text>
                </TouchableOpacity>
            </View>
            : (
            <TouchableOpacity></TouchableOpacity>
            )}

            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={[styles.title_info,styles.paddingBottom10]}>Je reserve</Text>
          <Text style={[styles.labelInput]}>Nombre de Place:</Text>
            <View style={[styles.inputView,styles.w_100]} >
                <Picker
                    style={filstreStyle.selectTextWhite}
                    onValueChange={(itemValue, itemIndex) => setNbPlace(itemValue)}
                    >
                    {bouclenbVisit}
                </Picker>
            </View>
            <Text style={[styles.labelInput]}>Nombre de Place:</Text>
            <View style={styles.inputView} >
            <DatePicker
                style={{width:"100%"}}
                date={dateNow}
                mode="date"
                placeholder="Date début"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2050-06-01"
                confirmBtnText="Valider"
                cancelBtnText="Annuler"
                customStyles={{
                dateInput: {
                    borderWidth: 0
                }
                }}
                onDateChange={(date) => {onChangeDate(date)}}
                        />
                    </View>
            <TouchableOpacity
              style={[styles.bouton_vert,styles.w_80]}
              onPress={() => {
                validateRes(id);
              }}
            >
              <Text style={styles.text_bouton}>Valider</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bouton_red,styles.w_80]}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.text_bouton}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
            </View>
    }else{
        var details = 
        <View>
            <ActivityIndicator style={{paddingTop:11}} size="large" color="#DC1A95" />
        </View>
    }
    function goBack(){
        navigation.goBack();
    }
    return(
        <View style={[filstreStyle.sub_container,styles.paddingTop]}>
            <View style={filstreStyle.row}>
                <View style={[filstreStyle.w_100,filstreStyle.padding_5]}>
                    {details}
                </View>
            </View>
        </View>
    )
}