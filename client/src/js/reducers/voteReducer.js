import {
    GET_PRES_QUESTIONS,
    GET_LEGIS_QUESTIONS,
    VOTE_ERROR,
    GET_POLITICIANS,
    GET_PARTIES,
    VOTE_POLITICIAN,
    VOTE_PARTY,
    

} from "../const/actionTypes"

const initState={
   
    pres_description:null,
    legis_description:null,
    politicians:null,
    parties:null,
    politicianVotedFor:null,
    partyVotedFor:null,
    

}



export default function (state=initState,{type,payload}){
    switch (type){
        case GET_PRES_QUESTIONS:  return    {...state,...payload}
        case GET_LEGIS_QUESTIONS: return    {...state,...payload}

        case GET_POLITICIANS:     return    {...state,...payload}
        case GET_PARTIES:         return    {...state,...payload}

        case VOTE_POLITICIAN:     return    {...state,...payload}
        case VOTE_PARTY:          return    {...state,...payload}
        
        

        case VOTE_ERROR:          return    {...state,...payload}

        default:return state
    }
}