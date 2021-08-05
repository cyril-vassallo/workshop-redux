const initialState = {
  result: 1,
  lastValues: [],
};

export const mathReducer = (
  state = initialState, 
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload.result,
        lastValues: [...state.lastValues, action.payload.result],
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload.result,
        lastValues: [...state.lastValues, action.payload.result],
      };
      break;
    default :
  }
  return state;
};
