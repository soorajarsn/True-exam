import { LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    SIGNUP_REQUEST, 
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR,
    LOGOUT_SUCCESS} from "./authConsts";

const initialState = {
    token:localStorage.getItem('token'),
    userLoggedIn:!!localStorage.getItem('token'),
    userLoggingIn:false,
    userName:'',
    userId:'',
    recoverMsg:'',
    loginError:'',
    signupError:'',
    recoverError:'',
    isInstructor:localStorage.getItem('isInstructor')
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return {...state,userLoggingIn:true,loginError:'',signupError:'',recoverError:''};
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('isInstructor',action.payload.isInstructor || "false");
            console.log('userLoggedIn');
            return {
                ...state,
                token:action.payload.token,
                isInstructor:action.payload.isInstructor,
                userLoggedIn:true,
                userLoggingIn:false,
                loginError:'',
                signupError:'',
                recoverError:''
            }
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('isInstructor');
            return {
                ...state,
                token:null,
                userLoggingIn:false,
                loginError:action.payload,
                recoverError:'',
                signupError:''
            }
        case SIGNUP_ERROR:
            localStorage.removeItem('token');
            localStorage.removeItem('isInstructor');
            return {
                ...state,
                token:null,
                userLoggingIn:false,
                loginError: '',
                recoverError: '',
                signupError: action.payload
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            localStorage.removeItem('isInstructor');
            return {
                ...state,
                token:null,
                userLoggingIn:false,
                userLoggedIn:false
            }
        default:
            return state;
    }
} 
export {authReducer,initialState as initialAuthState};