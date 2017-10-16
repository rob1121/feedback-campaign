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
      state = {
        ...state,
        creator: action.payload
      };
      break;
  }
  return state;
};

export default settingReducer;