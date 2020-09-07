import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const menuData = [
  { icon: "home", name: "Home", screenName: "Dashboard", key: 1 },
  { icon: "id-card",name: "Mes données",screenName: "MyData",key: 2},
  { icon: "qrcode",name: "Mon Carte",screenName: "MyCard",key: 3},
  { icon: "facebook",name: "Mes fidelités",screenName: "MyFidelity",key: 4},
  { icon: "handshake-o",name: "Mes commandes",screenName: "MyCommande",key: 5},
  { icon: "bold",name: "Mes bons plans",screenName: "MyBonplan",key: 6},
];

class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}
            />
          )}
        />
      </View>
    );
  }
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
    }
  >
    <Icon name={icon} size={25} color="#333" style={{ margin: 15 }} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.43)",
    paddingTop: 70
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15
  }
});

export default DrawerMenu;