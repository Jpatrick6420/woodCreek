import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.username = action.payload;
    },
  },
});

export default userSlice.reducer;
