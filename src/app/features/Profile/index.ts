import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProfile } from "@/Interfaces";

interface ProfileState {
  profileData: IProfile;
}

const initialState: ProfileState = {
  profileData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<IProfile>) => {
      state.profileData = action.payload;
    },
  },
});

export const { setProfileData } = profileSlice.actions;

export default profileSlice.reducer;
