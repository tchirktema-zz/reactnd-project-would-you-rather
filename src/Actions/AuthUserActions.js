export const SET_AUTHED_USER = "SET_AUTH_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export function setAuthUser(id) {
 
  return {
    type: SET_AUTHED_USER,
    id,
  };
}


export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}


export function logOut() {
  return (dispatch) => {
    dispatch(signOutUser());
  };
}