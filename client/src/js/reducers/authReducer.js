import {
    LOGIN_USER,
    REGISTER_USER,
    GET_AUTH_USER,
    LOGOUT,
    AUTH_ERROR,
    SET_LOADING, CLEAR_MSG,VOTED,LEGISVOTED,
} from "../const/actionTypes"


const initState={
    token:localStorage.getItem("token"),
    user:null,
    isAuth:false,
    isLoading:false,
    msg:null,
    
}


export default function (state=initState,{type,payload}){
    switch (type){
        case SET_LOADING: return {...state,isLoading:true}
        case LOGOUT:
        localStorage.removeItem("token");    
        return {...state,user:null,token:null,isAuth:false,msg:null}
        case LOGIN_USER:
            case REGISTER_USER:
                localStorage.setItem("token",payload.token);
            return {...state,isLoading:false,isAuth:true,...payload};
       
        case GET_AUTH_USER:
            return {...state,isLoading:false,isAuth:true,...payload};

            case AUTH_ERROR:return{...initState,...payload,};
            case CLEAR_MSG:return{...state,msg:null};

            case VOTED:                return    {...state,...payload}
            case LEGISVOTED:                return    {...state,...payload}



        default:return state
    }
}