import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Agenda from './src/screens/Agenda';
import Annuaire from './src/screens/Annuaire';
import Boutique from './src/screens/Boutique';
import DealsFidelity from './src/screens/DealsFidelity';
import DetailsArtAg from './src/screens/DetailsArtAg';
import DetailsBoutique from './src/screens/DetailsBoutique';
import DetailsDealsFidelite from './src/screens/DetailsDealsFidelite';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Card from './src/screens/Card';
import Favoris from './src/screens/Favoris';
import Contact from './src/screens/Contact';

import MyData from './src/screens/Admin/MyData';
import MyCard from './src/screens/Admin/MyCard';
import MyFidelity from './src/screens/Admin/MyFidelity';
import MyBonplan from './src/screens/Admin/MyBonplan';
import DetailCommande from './src/screens/Admin/DetailCommande';
import DetailCommercant from './src/screens/Admin/DetailCommercant';
import MyCommande from './src/screens/Admin/MyCommande';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="Annuaire" component={Annuaire} />
      <Stack.Screen name="Boutique" component={Boutique} />
      <Stack.Screen name="DealsFidelity" component={DealsFidelity} />
      <Stack.Screen name="DetailsArtAg" component={DetailsArtAg} />
      <Stack.Screen name="DetailsBoutique" component={DetailsBoutique} />
      <Stack.Screen name="DetailsDealsFidelite" component={DetailsDealsFidelite} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="Favoris" component={Favoris} />
      <Stack.Screen name="Contact" component={Contact} />

      <Stack.Screen name="MyData" component={MyData} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="MyFidelity" component={MyFidelity} />
      <Stack.Screen name="MyBonplan" component={MyBonplan} />
      <Stack.Screen name="DetailCommande" component={DetailCommande} />
      <Stack.Screen name="DetailCommercant" component={DetailCommercant} />
      <Stack.Screen name="MyCommande" component={MyCommande} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}
