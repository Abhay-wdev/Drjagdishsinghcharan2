import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clicks: 0,
  lastPhone: null,
  lastMessage: null,
};

const whatsappSlice = createSlice({
  name: 'whatsapp',
  initialState,
  reducers: {
    triggerWhatsApp: (state, action) => {
      const { phoneNumber, message } = action.payload;
      state.clicks += 1;
      state.lastPhone = phoneNumber;
      state.lastMessage = message;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    },
  },
});

export const { triggerWhatsApp } = whatsappSlice.actions;
export default whatsappSlice.reducer;
