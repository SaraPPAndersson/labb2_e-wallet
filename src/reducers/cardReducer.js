import { createSlice } from "@reduxjs/toolkit";
/*
Jag sparar hela kortlistan i Redux eftersom både E-wallet-sidan som är home och
formuläret på add card sidan behöver samma data trots att de ligger på separata sidor.
vilket kort som är aktivt har inget eget state fält, det är alltid det första 
kortet i listan. Att klicka på ett kort (setActiveCard) flyttar bara det till första 
platsen i  arrayen. 
*/
const initialState = {
  items: [],
};

const cardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      state.items.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },

    removeCard: (state, action) => {
      state.items = state.items.filter((card) => card.id !== action.payload);
    },

    setActiveCard: (state, action) => {
      const clickedCard = state.items.find(
        (card) => card.id === action.payload,
      );

      if (clickedCard) {
        const otherCards = state.items.filter(
          (card) => card.id !== action.payload,
        );
        state.items = [clickedCard, ...otherCards];
      }
    },
  },
});

export const { addNewCard, removeCard, setActiveCard } = cardsSlice.actions;
export default cardsSlice.reducer;
