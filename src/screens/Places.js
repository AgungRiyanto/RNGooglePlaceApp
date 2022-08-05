import React, { useState, useCallback } from "react";
import { View, StyleSheet, Dimensions, } from "react-native";
import { AppBar } from "@react-native-material/core";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from "react-redux";
import { setPlaceDetail } from "../redux/place";

const Places = ({ }) => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);

  const onRegionChange = useCallback((regionD) => {
    // console.log(regionD, 'lll')
  }, []);

  return (
    <View style={styles.container}>
      <AppBar title="Google Place App" />
      <GooglePlacesAutocomplete
        placeholder='Search Location'
        minLength={2}
        autoFocus={false}
        fetchDetails
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          const regDetail = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.00922 * 1.5,
            longitudeDelta: 0.00421 * 1.5,
            title: details?.name,
            description: data?.description
          };
          dispatch(setPlaceDetail(regDetail));

        }}
        query={{
          key: 'AIzaSyDSKsr1WK1DcCmD49tsJ1nZMgKT8RJC9EE',
          language: 'id',
          type: 'geocode'
        }}
        listViewDisplayed="auto"
        styles={{
          container: {
            flex: 0
          },

        }}
      />
      <MapView
        region={place}
        onRegionChange={onRegionChange}
        style={{ flex: 1, width: Dimensions.get('window').width }}
      >
        <Marker
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude
          }}
          title={place.title}
          description={place.description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Places;