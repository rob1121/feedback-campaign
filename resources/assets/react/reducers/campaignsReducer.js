const settingReducer = (state = {}, action) => {
  switch (action.type) {

    case "SET_SETTING_TITLE":
      state = action.payload;
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