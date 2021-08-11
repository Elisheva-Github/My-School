const initialState = {
  user: null,
}

export const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "save_user":
      return { ...state, user: action.payload };
    case "save_teacher":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}