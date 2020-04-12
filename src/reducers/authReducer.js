const initialState = {
  name: "haider",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: "jaffar",
      };
    default:
      return state;
  }
}
