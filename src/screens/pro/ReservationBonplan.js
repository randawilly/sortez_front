import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ReservationBonplan() {
    
    const navigation = useNavigation();

    function navigateToDashboard() {
        navigation.navigate("Dashboard",{
            itemId: 86,
            message: 'anything you want here',
          });
    }
    
    return (
            
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>List Screen</Text>
    <Button title="Open Dashboard"
    onPress= {()=>navigateToDashboard()}
    />
    
    </View>
    
    );
}