import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import petl from "../../assets/images/pet2logo.png";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import upload from "../../assets/images/upload.png";
import AnimalInput from "./AnimalInput";
import Petchoose from "./Petchoose";
import UploadImage from "./UploadImage";
const PetScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Text>{route.params.type}</Text>
        <View>
          <ImageBackground
            style={{}}
            resizeMode="stretch"
            source={
              route.params.type == "dog"
                ? {
                    uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
                  }
                : {
                    uri: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg+",
                  }
            }
          >
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Pet's name"
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Race "
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  Age "
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="  sex "
              placeholderTextColor="#36C6C0"
              autoCapitalize="none"
            />
            {route.params.type == "dog" ? (
              <Text>hetha kalb</Text>
            ) : (
              <Text>hetha cat</Text>
            )}
          </ImageBackground>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.submitButtonText}> Next </Text>
        </TouchableOpacity>
        <UploadImage />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#36C6C0",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 50,
    width: 80,
  },
  submitButtonText: {
    color: "white",
    borderRadius: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#36C6C0",
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  upload: {
    width: 80,
    height: 80,
  },
});

export default PetScreen;
