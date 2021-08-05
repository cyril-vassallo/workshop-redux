const initialState = {
  name: 'Cyril',
  age: 37,
};

export const userReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload.name,
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload.age
      };
      break;
      default :
  }
  return state;
};