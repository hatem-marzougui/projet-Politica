import React,{useState} from 'react'
import { useSelector ,useDispatch } from "react-redux";
import { Spinner,Alert  } from "reactstrap";
import './LegisVote.css'
import { voteParty } from '../js/actions/voteActions';
import { update_legis_hasVoted ,} from '../js/actions/authActions';
function LegisVote() {
  const dispatch = useDispatch();
  const [radio,setRadio]=useState("");
  const [legisvote,setlegisVote]=useState(false);

  const legis_has_voted= useSelector(state => state.authReducer.user.has_lvoted);
    const question= useSelector(state => state.voteReducer.legis_description);
    const parties= useSelector(state => state.voteReducer.parties); 
    const legis_msg= useSelector(state => state.voteReducer.legis_msg);   
    const user= useSelector(state => state.authReducer.user);
  if (!parties) { return (
     <>
    <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
    <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
  </>
  )}
  const handleVote =()=> { dispatch(voteParty(radio));
    setlegisVote(true);
     dispatch(update_legis_hasVoted(user._id));
   };
    return (
      <div>
      {(legis_has_voted && !legisvote)  ? <Alert id="alert" color='danger' style={{width:'500px',height:'100px',left:'515px',top:'180px',fontSize:'25px',textAlign:'center',justifyContent:'center'}}> you had already voted for this month !   you can just view actual results </Alert>:  
      
      <div> 
      {( legis_msg)  ? <Alert id="alert" color='danger' style={{width:'500px',height:'100px',left:'515px',top:'180px',fontSize:'25px',textAlign:'center',justifyContent:'center'}}>{legis_msg}</Alert>:   

      <div>     
        <div className='question'>{question}</div>
        
       <div className='choix-politicians'>
              {parties.map(el=>(
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

        <button className='button_vote' onClick={()=>handleVote()}>Vote</button>
        
        </div>
} </div>
} </div>

    )
}

export default LegisVote
