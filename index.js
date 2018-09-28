//import librarries
import React from "react";
import { View, AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList/AlbumList";

//create component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

//render compoenent
AppRegistry.registerComponent(appName, () => App);
