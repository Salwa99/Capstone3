import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharactersAction = createAsyncThunk('FETCH_CHARACTERS', async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const result = await response.json();
  return result;
});

const initialState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters-slice',
  initialState,
  reducers: {
    addCharacter(state, { payload }) {
      const updatedState = { ...state, characters: [...state.characters, payload] };
      return updatedState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCharactersAction.fulfilled, (state, { payload }) => {
      const updatedState = { ...state, characters: [...payload] };
      return updatedState;
    });
  },
});

export const charactersActions = charactersSlice.actions;

export default charactersSlice.reducer;
