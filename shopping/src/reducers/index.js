let initialState = {
  name: "World!"
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      console.log("action", action.payload);
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
