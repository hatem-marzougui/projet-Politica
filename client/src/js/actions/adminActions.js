import axios from "axios";
import {GET_PRES_QUESTIONS,GET_LEGIS_QUESTIONS,VOTE_ERROR, GET_POLITICIANS,GET_PARTIES,GET_USERS,ADMIN_ERROR,DELETE_USER,UPDATE_POLITICIAN,UPDATE_PARTY,UPDATE_QUESTION} from "../const/actionTypes";



 // get all users

 export const getUsers = () => async (dispatch) => {
    
  
    try {
      const options = {headers: {authorization: localStorage.getItem("token"),},};
      
       const res = await axios.get("/api/users/all",options);
     
       console.log('res.data: ',res.data)
      dispatch({ type: GET_USERS,payload: res.data,  //{users:}
      });
      
    } catch (error) { console.log(error); dispatch({ type: ADMIN_ERROR,});}
  };
    

   // get all politicians

 export const getPoliticians = () => async (dispatch) => {
    
  
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.get("/api/politicians/all",options);
   
     console.log('res.data: ',res.data)
    dispatch({ type: GET_POLITICIANS,payload: res.data,  //{politiicans:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: ADMIN_ERROR,});}
};
  


 // get all parties

 export const getParties = () => async (dispatch) => {
    
  
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.get("/api/Parties/all",options);
   
     console.log('res.data: ',res.data)
    dispatch({ type: GET_PARTIES,payload: res.data,  //{parties:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: ADMIN_ERROR,});}
};



 // delete one user

 export const deleteUser = (id) => async (dispatch) => {
    
  console.log(id);
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.delete(`api/users/delete/${id}`,options);
   
     console.log('res.data: ',res.data)
    dispatch({ type: DELETE_USER,payload: res.data,  //{msg:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: ADMIN_ERROR,});}
};




//update politician
export const updatePolitician = (id,data) => async (dispatch) => {
  console.log('id from back=',id);
try {
  const options = {headers: {authorization: localStorage.getItem("token"),},};
  
   const res = await axios.put(`api/politicians/update/${id}`,data,options);
  
   console.log('res.data: ',res.data);
   
  dispatch({ type: UPDATE_POLITICIAN,payload: res.data,  //{polticianVotedFor:}
  });
  
} catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};




//update party
export const updateParty = (id,data) => async (dispatch) => {
  console.log('id from back =',id);
try {
  const options = {headers: {authorization: localStorage.getItem("token"),},};
  
   const res = await axios.put(`api/parties/update/${id}`,data,options);
  
   console.log('res.data: ',res.data);
   
  dispatch({ type: UPDATE_PARTY,payload: res.data,  //{polticianVotedFor:}
  });
  
} catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};




//update question
export const updateQuestion = (description,data) => async (dispatch) => {
  console.log('description from back =',description);
try {
  const options = {headers: {authorization: localStorage.getItem("token"),},};
  
   const res = await axios.put(`api/questions/update/${description}`,data,options);
  
   console.log('res.data: ',res.data);
   
  dispatch({ type: UPDATE_QUESTION,payload: res.data,  //{polticianVotedFor:}
  });
  
} catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};