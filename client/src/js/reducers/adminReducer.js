import {
    LOGIN_USER,
    REGISTER_USER,
    GET_AUTH_USER,
    LOGOUT,
    AUTH_ERROR,
    SET_LOADING, CLEAR_MSG, GET_USERS,ADMIN_ERROR, GET_POLITICIANS,GET_PARTIES,DELETE_USER,UPDATE_POLITICIAN,UPDATE_PARTY,UPDATE_QUESTION
} from "../const/actionTypes"


const initState={
    msg:null,
    allUsers:null,
    politicians:null,
    parties:null,
    deletedUser:null,
    updatedUser:null,
    updatedParty:null,
    updatedQuestion:null,

}


export default function (state=initState,{type,payload}){
    switch (type){
       
       
       
        case GET_USERS:
            return {...state,...payload};

            case GET_POLITICIANS:
            return {...state,...payload};

            case GET_PARTIES:
            return {...state,...payload};

            case DELETE_USER:
            return {...state,...payload};


            case UPDATE_POLITICIAN:
            case UPDATE_PARTY:
            case UPDATE_QUESTION:    
            return {...state,...payload};


            
            case ADMIN_ERROR:return{...state,msg:null}



        default:return state
    }
}