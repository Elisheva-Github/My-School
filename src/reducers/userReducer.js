const initialState = {
  user: null,
}

export const userReducer = (state = initialState, action) => {
debugger
  switch (action.type) {
      case "save_user":
          return { ...state, user: action.payload };
      default:
          return state;
  }
}