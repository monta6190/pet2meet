import React from "react";
import { View,Text,StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./app/screens/SignUp";
import { SafeAreaView } from "react-native-safe-area-context";
import Petchoose from "./app/screens/Petchoose";
import Catscreen from "./app/screens/Catscreen";
import Dogscreen from "./app/screens/Dogscreen";
import PetScreen from "./app/screens/PetScreen";
import HomeScreen from "./app/screens/HomeScreen";
const  App= () => {

  const Stack = createNativeStackNavigator();

  return( 
    
  <View style={styles.container}> 

 //comment
 
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: '' }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PetScreen" component={PetScreen} />
        <Stack.Screen name="Petchoose" component={Petchoose} />
        <Stack.Screen name="Catscreen" component={Catscreen} />
        <Stack.Screen name="Dogscreen" component={Dogscreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  </View>  ); 
  




};
const styles = StyleSheet.create({
container: {
paddingTop:30,
  flex:1,
  
}

});

export default App;
