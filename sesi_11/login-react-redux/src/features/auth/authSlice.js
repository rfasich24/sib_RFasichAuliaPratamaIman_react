import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: "",
  user: {},
};

const callLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@login.com" && password === "admin") {
        resolve({ email });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};

export const authLoginApi = createAsyncThunk("auth/login", async ({ email, password }) => {
  try {
    const response = await callLoginApi(email, password);
    return response.email;
  } catch (err) {
    throw err;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginApi.pending, (state, action) => {
        state.isLoginPending = true;
        state.isLoginSuccess = false;
        state.errorMessage = "";
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log(action);
        const { email } = action.payload;
        console.log(action.payload, "action payload");
        state.isLoginPending = false;
        state.isLoginSuccess = true;
        state.user = { email };
        state.errorMessage = "";
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        console.log(action, "rejected");
        state.isLoginPending = false;
        state.isLoginSuccess = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default authSlice.reducer;