export const initialState = {
  basket: [],
};

export const totalPrice = (basket) => 
  basket.reduce((total, item) => total + item.price
  , 0);


const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    default:
      return state;
  }
}

export default reducer;