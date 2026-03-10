import { configureStore, createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { data: null, loading: false },
  reducers: {
    setLoading: (state) => { state.loading = true; },
    setWeather: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    }
  }
});

export const { setLoading, setWeather } = weatherSlice.actions;

export const store = configureStore({
  reducer: { weather: weatherSlice.reducer }
});
