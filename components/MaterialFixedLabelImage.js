import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

function MaterialFixedLabelImage(props) {
  const openPicker = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        props.setValue(response.assets[0].uri);
      }
    });
  };

  function renderFileUri() {
    if (props.imageUri) {
      return <Image source={{ uri: props.imageUri }} style={styles.images} />;
    } else {
      return (
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
          }}
          style={styles.images}
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      {renderFileUri()}
      <TouchableOpacity style={styles.button} onPress={() => openPicker()}>
        <Text style={styles.pickImage}>Select Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  button: {
    marginBottom: 0,
    marginTop: 10,
  },
  images: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 3,
  },
  pickImage: {
    fontSize: 15,
  },
});

export default MaterialFixedLabelImage;