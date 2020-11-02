import axios from "axios";
import {
  LOGIN_USER,LOGOUT,GET_AUTH_USER,REGISTER_USER,AUTH_ERROR,SET_LOADING, CLEAR_MSG,VOTED,LEGISVOTED} from "../const/actionTypes";

// register user
export const register = (formData) => async (dispatch) => { dispatch(setLoading());
  try {
    const res = await axios.post("/api/auth/register", formData);
    dispatch({type: REGISTER_USER,payload:res.data,});//{ msg:'register success',user,token}        
  } 
  catch (error) { console.log("error.response.data",error.response.data); 
 
  
  dispatch(  { type: AUTH_ERROR,payload:error.response.data.errors? error.response.data.errors[0]:error.response.data});
}
};






// login user
export const login = (formData) => async (dispatch) => {dispatch(setLoading());
  try {
    const res = await axios.post("/api/auth/login", formData);
    dispatch({type:LOGIN_USER,payload:res.data,}); //  { msg, user, token }

  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(error.response.data.errors);
    dispatch( { type: AUTH_ERROR,payload:error.response.data.errors? error.response.data.errors[0]:error.response.data});
  }
};




// get auth user

export const getAuthUser = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const res = await axios.get("/api/auth/me", options);

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};


export const clearMsg=()=>(dispatch)=>{dispatch({type: CLEAR_MSG,})}

export const logout = () => (dispatch) => {dispatch({type: LOGOUT,});};

export const setLoading = () => (dispatch) => {dispatch({type: SET_LOADING,}); }



//presidentielle :after vote update user has_voted:true
export const update_hasVoted = (id) => async (dispatch) => {
   
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
   
     const res = await axios.put(`/api/users/hasVoted/${id}`,options);
  
     console.log('res.data: ',res.data)
    dispatch({ type: VOTED,payload: res.data,  //{has_voted:true}
    });
   
  } catch (error) { console.log(error); dispatch({ type: AUTH_ERROR,});}
  };


  //legislative: after lvote update user has_lvoted:true
export const update_legis_hasVoted = (id) => async (dispatch) => {
   
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
   
     const res = await axios.put(`/api/users/legis_hasVoted/${id}`,options);
  
     console.log('res.data: ',res.data)
    dispatch({ type: LEGISVOTED,payload: res.data,  //{has_lvoted:true}
    });
   
  } catch (error) { console.log(error); dispatch({ type: AUTH_ERROR,});}
  };