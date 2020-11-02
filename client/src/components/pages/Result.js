import React from 'react'
import './Result.css'
import PresidResult from "../PresidResult";
import LegisResult from "../LegisResult";
import { Spinner } from "reactstrap";
import { useDispatch ,useSelector} from "react-redux";
import { getPoliticians,  getParties } from '../../js/actions/voteActions';

function Result() {
    const dispatch = useDispatch();
    dispatch(getPoliticians()); dispatch(getParties()); 
    
     const politicians= useSelector(state => state.voteReducer.politicians); 
     const parties= useSelector(state => state.voteReducer.parties); 
      if(!politicians || !parties)return(     
        <div className='result_content' >
          <Spinner animation="grow"  style={{position:'absolute',left:'660px',top:'270px',color:'lightblue',width:'40px',height:'40px'}} />
          <h3 style={{position:'absolute',left:'630px',top:'300px',color:'lightblue',}}>loading</h3>
        </div>)

    return (
   
        <div className='result_content'   style={{display:'flex',flexDirection:'column'}}>
            
         
            <div style={{position:"fixed",top:'70px',left:'-460px'}}> <PresidResult/> </div>
            <div style={{position:"fixed",top:'70px',left:'233px'}}> <LegisResult /></div> 
            
        </div>





        
    )
}

export default Result
