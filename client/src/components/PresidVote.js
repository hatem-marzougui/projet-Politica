import React,{useState} from 'react'
import { useSelector ,useDispatch } from "react-redux";
import { Spinner,Alert } from "reactstrap";
import axios from "axios";
import './PresidVote.css'
import { votePolitician,} from '../js/actions/voteActions';
import { update_hasVoted ,} from '../js/actions/authActions';
function PresidVote() {
    const dispatch = useDispatch();
    const [radio,setRadio]=useState("");
    const [vote,setVote]=useState(false);

    const has_voted= useSelector(state => state.authReducer.user.has_voted);
const question= useSelector(state => state.voteReducer.pres_description);
  const politicians= useSelector(state => state.voteReducer.politicians); 
  const msg= useSelector(state => state.voteReducer.msg); 
  const user= useSelector(state => state.authReducer.user);
  if (!politicians) { return(
    <>
      <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
      <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
    </>
  )}

  
  const handleVote =()=> { 
    dispatch(votePolitician(radio));
     setVote(true);
     dispatch(update_hasVoted(user._id));
    
  };
  
    return (
      <div>
        {(has_voted && !vote)  ? <Alert id="alert" color='danger' style={{width:'500px',height:'100px',left:'515px',top:'180px',fontSize:'25px',textAlign:'center'}}>You had already voted for this month !   You can just view actual results </Alert>:  
      
        <div> 
            {( msg)  ? <Alert id="alert" color='danger' style={{width:'500px',height:'100px',left:'515px',top:'180px',fontSize:'25px',textAlign:'center',display:'flex',flexDirection:'column',marginTop:'25px',justifyContent:'center'}}> {msg}  </Alert>:  
         <div>  
        <div className='question'>{question}</div>
        
       <div className='choix-politicians'>
              {politicians.map(el=>(
<div style={{display:'flex',flexDirection:'row',alignItems:'baseline'}} key={Math.random()}>
                <input  
                    checked={radio ===el.name}
                    onChange={(e)=>{setRadio(e.target.value)}}
                    className='checkbox'
                    type="radio"
                    name='radio'
                    value={el.name}
                    style={{marginBottom:'20px' }} 
                    /> 


                   <div className='div_politician'>
                 
                <img className='image_politician'  src={el.photo_adress} style={{width:'100px',borderRadius:'60%'}}/>
                 <label >{el.name}</label> 
                 
                    </div> 
                   
                    </div> 
                     
                            ))} 
        </div>

        <button  className='button_vote' onClick={handleVote}>
           
          Vote 
          </button>
          </div>
      
    } 

        </div>
}
</div>

    )
}

export default PresidVote


