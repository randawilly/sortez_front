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


import ProDashboard from './src/screens/pro/ProDashboard';
import ProMyData from './src/screens/pro/ProMyData';
import ValidVisit from './src/screens/pro/ValidVisit';
import ReservationBonplan from './src/screens/pro/ReservationBonplan';
import Plat from './src/screens/pro/Plat';
import ListeClient from './src/screens/pro/ListeClient';


import signUp from './src/screens/Admin/signUp';
import forgotPasswordPage from './src/screens/Admin/forgotPasswordPage';
import ProSignIn from './src/screens/Admin/ProSignIn';

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
      {/* particulier */}
      <Stack.Screen name="MyData" component={MyData} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="MyFidelity" component={MyFidelity} />
      <Stack.Screen name="MyBonplan" component={MyBonplan} />
      <Stack.Screen name="DetailCommande" component={DetailCommande} />
      <Stack.Screen name="DetailCommercant" component={DetailCommercant} />
      <Stack.Screen name="MyCommande" component={MyCommande} />
      
      {/* particulier */}

      {/* pro */}
      <Stack.Screen name="ProDashboard" component={ProDashboard} />
      <Stack.Screen name="ProMyData" component={ProMyData} />
      <Stack.Screen name="ValidVisit" component={ValidVisit} />

      <Stack.Screen name="signUp" component={signUp} />
      <Stack.Screen name="forgotPasswordPage" component={forgotPasswordPage} />
      <Stack.Screen name="ProSignIn" component={ProSignIn} />
      <Stack.Screen name="ReservationBonplan" component={ReservationBonplan} />
      <Stack.Screen name="Plat" component={Plat} />
      <Stack.Screen name="ListeClient" component={ListeClient} />

      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
