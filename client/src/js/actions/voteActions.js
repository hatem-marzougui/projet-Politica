import axios from "axios";
import {GET_PRES_QUESTIONS,GET_LEGIS_QUESTIONS,VOTE_ERROR, GET_POLITICIANS,GET_PARTIES,VOTE_POLITICIAN,VOTE_PARTY,} from "../const/actionTypes";



// get presidential question

export const getPresQuestions = () => async (dispatch) => {
    
  
    try {
      const options = {headers: {authorization: localStorage.getItem("token"),},};
      
       const res = await axios.get("/api/questions/pres",options);
     
       console.log('res.data: ',res.data)
      dispatch({ type: GET_PRES_QUESTIONS,payload: res.data,  //{questions:}
      });
      
    } catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
  };



  // get legislative question

export const getLegisQuestions = () => async (dispatch) => {
    
  
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.get("/api/questions/legis",options);
   
     console.log('res.data: ',res.data)
    dispatch({ type: GET_LEGIS_QUESTIONS,payload: res.data,  //{questions:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};
  



 // get politicians

 export const getPoliticians = () => async (dispatch) => {
    
  
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.get("/api/politicians/all",options);
   
     console.log('res.data: ',res.data)
    dispatch({ type: GET_POLITICIANS,payload: res.data,  //{politicians:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};
  



// get parties

 export const getParties = () => async (dispatch) => {
    
  
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.get("/api/parties/all",options);
   
     console.log('res.data: ',res.data)
    dispatch({ type: GET_PARTIES,payload: res.data,  //{parties:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};
  


//VOTE for politician
export const votePolitician = (politician) => async (dispatch) => {
    console.log('politician=',politician);
  try {
    const options = {headers: {authorization: localStorage.getItem("token"),},};
    
     const res = await axios.put("/api/politicians/vote",{'name':politician},options);
    
     console.log('res.data: ',res.data);
     
    dispatch({ type: VOTE_POLITICIAN,payload: res.data,  //{polticianVotedFor:}
    });
    
  } catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};



//VOTE for party
export const voteParty = (party) => async (dispatch) => {
  console.log('party=',party);
try {
  const options = {headers: {authorization: localStorage.getItem("token"),},};
  
   const res = await axios.put("/api/parties/vote",{'name':party},options);
 
   console.log('res.data: ',res.data)
  dispatch({ type: VOTE_PARTY,payload: res.data,  //{partyVotedFor:}
  });
  
} catch (error) { console.log(error); dispatch({ type: VOTE_ERROR,});}
};



 
