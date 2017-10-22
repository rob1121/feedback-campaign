const userReducer = (state = {
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
  id: localStorage.getItem('id'),
  isLoggedIn: localStorage.getItem('name') ? true : false,
}, action) => {
  switch (action.type) {

    case 'LOGIN':
      state = {
        ...state,
        name: action.name,
        email: action.email,
        id: action.id,
        isLoggedIn: true,
      };

      break;
    case 'LOGOUT':
      state = {
        ...state,
        name: null,
        email: null,
        isLoggedIn: false,
      };

      break;
  };
  return state;
}

export default userReducer;
