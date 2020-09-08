import React,{ useState } from 'react';
import { ToastAndroid,AsyncStorage,Picker,Text, View,ScrollView,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import {styles} from '../../style/Style';
import{filstreStyle} from '../../style/FiltreStyle';

export default function signUp() {
    
    const navigation = useNavigation();
    const [Email, setEmail] = useState("");
    const [Message, setPassword] = useState("");
    const [selectedValueCommercant, setSelectedValueCommercant] = useState("0");
    const [isLoading, setLoading] = useState(false);
    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.sub_container,styles.paddingBottom,styles.paddingTop,styles.alignCenter]}>
                    <Text style={[styles.title_info,styles.paddingBottom10]}>Créer votre compte particulier</Text>
                        <TouchableOpacity onPress={()=>goBack()} style={styles.bouton_rose_contact}>
                            <Text style={styles.text_bouton}>Retour</Text>
                        </TouchableOpacity>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Nom"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) => { setEmail(text);}} />
                        </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Prénom"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                    <DatePicker
                        style={{width:"100%"}}
                        mode="date"
                        placeholder="Date de Naissance"
                        format="YYYY-MM-DD"
                        confirmBtnText="Valider"
                        cancelBtnText="Annuler"
                        customStyles={{
                        dateInput: {
                            borderWidth: 0
                        }
                        }}
                        onDateChange={(date) => {onChangeDebut(date)}}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <Picker
                            selectedValue={selectedValueCommercant}
                            style={filstreStyle.selectText}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueCommercant(itemValue)}>
                            <Picker.Item key={1} value={0} label={"Monsieur"} />
                            <Picker.Item key={2} value={1} label={"Madamme"} />
                            <Picker.Item key={3} value={2} label={"Mademoiselle"} />
                        </Picker>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Code Postal"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Téléphone fixe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Téléphone Mobile"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Login"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Mots de passe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Confirmer le mot de passe"
                            multiline = {true}
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <TouchableOpacity onPress={()=>login()} style={styles.bouton_rose_contact}>
                    {isLoading ? <ActivityIndicator size="small" color="white" /> : (
                        <Text style={styles.text_bouton}>Je confirme mon inscription</Text>
                    )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>ForgotPasswordPage()} style={styles.bouton_rose_contact}>
                        <Text style={styles.text_bouton}>Demander un compte Professionnel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    
    );
}