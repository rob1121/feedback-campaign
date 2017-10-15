const settingReducer = (state = {
  title: "setting",
  creator: "rob"
}, action) => {
  switch (action.type) {

    case "SET_SETTING_TITLE":
      state = {
        ...state,
        title: action.payload
      };
      break;

    case "SET_SETTING_CREATOR":
      console.log(action);
      state = {
        ...state,
        creator: action.payload
      };
      break;
  }
  console.log(state);
  return state;
};

export default settingReducer;