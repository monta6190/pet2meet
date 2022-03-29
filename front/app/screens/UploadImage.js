import { View, Text,TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import React from 'react'
import axios from 'axios';

const UploadImage = () => {

    const handleUploadOne = (image) => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "pet2meet");
        data.append("cloud_name", "montatik");
        data.append("api_key", "187621334949921");
        data.append("timestamp", (Date.now() / 1000) | 0);
        axios
          .post("https://api.cloudinary.com/v1_1/montatik/image/upload", data)
          .then((response) => {
            console.log(response.data);
            
          })
          .catch((err) => {
            console.log(err);
            alert("Erreur de téléchargement");
          });
      };

      let openImagePickerAsyncOne = async () => {

        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (granted) {
          let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
          });
          if (!data.cancelled) {
            let newfile = {
              uri: data.uri,
              type: `test/${data.uri.split(".")[1]}`,
              name: `test.${data.uri.split(".")[1]}`,
            };
            handleUploadOne(newfile);
          }
        } else {
          Alert.alert("Il faut donner la permission");
        }
      };


  return (
    <View>
      <TouchableOpacity onPress={()=>openImagePickerAsyncOne()}><Text>Click me</Text></TouchableOpacity>
    </View>
  )
}

export default UploadImage