const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: "jaffar",
      };
    default:
      return state;
  }
}
