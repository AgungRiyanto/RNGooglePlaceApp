import React from "react";
import { View, StyleSheet } from "react-native";
import { AppBar } from "@react-native-material/core";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Places = ({

}) => {
  return (
    <View style={styles.container}>
      <AppBar title="Google Place App" />
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDTfcknlZY-Rdq4S28Mk5rAcyO79ds5Q9E',
          language: 'en',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Places;