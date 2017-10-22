/**
 * set token
 * 
 * @export
 * @param {any} { access_token, expires_in } 
 */
export function setToken({ access_token, expires_in }) {
  localStorage.setItem('token', access_token);
  localStorage.setItem('expiration', Date.now() + expires_in);
}

/**
 * set user
 * 
 * @export
 * @param {any} { name, email } 
 * @returns 
 */
export function setUser({ name, email, id }) {
  localStorage.setItem('id', id);
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);

  return dispatch => dispatch({
    type: 'LOGIN',
    name: name,
    email: email,
    id: id,
  });
}

/**
 * get access token
 * 
 * @export
 * @returns 
 */
export function getToken() {
  const token = localStorage.getItem('token');
  const expiration = localStorage.getItem('expiration');
  if (!token || !expiration)
    return null;
  if (Date.now() > expiration) {
    destroyToken();
    return null;
  } else {
    return token;
  }
}

/**
 * logout user and destroy localstorage
 * 
 * @export
 * @returns 
 */
export function destroyToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  localStorage.removeItem('name');
  localStorage.removeItem('id');
  localStorage.removeItem('email');

  return dispatch => dispatch({ type: 'LOGOUT' });
}

/**
 * get laravel header
 */
export const getHeader = () => {
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  }

  return headers;
}