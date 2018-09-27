//import librarries
import React from 'react'
import { Text, AppRegistry } from 'react-native'
import { name as appName } from './app.json';

//create component
const App = () => (
    <Text style={{paddingTop: '20px'}}>text</Text>
)


//render compoenent
AppRegistry.registerComponent(appName, () => App);