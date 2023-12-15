import { createSlice } from "@reduxjs/toolkit";
import products from "../products";

const initialState = {
  productsOffered: products,
  isNavOpen: false,
  beefJerkySelected: false,
  turkeyJerkySelected: false,
  baconJerkySelected: false,

  searchQuery: [...products],
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    updateIsNavOpen(state) {
      state.isNavOpen = state.isNavOpen ? false : true;
    },
    onCloseNav(state) {
      state.isNavOpen = false;
    },
    updateBeefJerkySelected(state) {
      state.beefJerkySelected = state.beefJerkySelected ? false : true;
    },
    updateTurkeyJerkySelected(state) {
      state.turkeyJerkySelected = state.turkeyJerkySelected ? false : true;
    },
    updateBaconJerkySelected(state) {
      state.baconJerkySelected = state.baconJerkySelected ? false : true;
    },
    updateSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});
export const {
  updateIsNavOpen,
  updateBaconJerkySelected,
  updateTurkeyJerkySelected,
  updateBeefJerkySelected,
  updateSearchQuery,
  onCloseNav,
} = uiSlice.actions;
export default uiSlice.reducer;
