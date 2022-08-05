import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'place',
  initialState: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922 * 1.5,
    longitudeDelta: 0.0421 * 1.5,
    title: '',
    description: ''
  },
  reducers: {
    placeDetailSuccess: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});
export default slice.reducer

const { placeDetailSuccess } = slice.actions;

export const setPlaceDetail = (place) => dispatch => {
  return dispatch(placeDetailSuccess(place));
}