import { LOGIN_SUCCESS, 
         LOGIN_ERROR, 
         LOGIN_REQUEST, 
         SIGNUP_REQUEST, 
         SIGNUP_SUCCESS,
         SIGNUP_ERROR,
         LOGOUT_SUCCESS} from './authConsts';



export const loginRequest = () => ({type:LOGIN_REQUEST});
export const loginError = (err) => ({type:LOGIN_ERROR,payload:err});
export const loginSuccess = (userData) => ({type:LOGIN_SUCCESS,payload:userData});

export const signupRequest = () => ({type:SIGNUP_REQUEST});
export const signupError = (err) => ({type:SIGNUP_ERROR,payload:err});
export const signupSuccess = (userData) => ({type:SIGNUP_SUCCESS,payload:userData});

export const logOut = () => ({type:LOGOUT_SUCCESS});

export const loginUser = (dispatch,body) => {
        dispatch(loginRequest());
        dispatch(loginSuccess({token:'sfk23492jsdlfwr',isInstructor:!!localStorage.getItem('isInstructor')}));
}

export const signupUser = (dispatch, body) => {
        dispatch(signupRequest());
        dispatch(signupSuccess({token:'sfk23492jsdlfwr',isInstructor:body.instructor}))
}