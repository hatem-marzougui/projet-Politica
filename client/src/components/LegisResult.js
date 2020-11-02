import React from 'react'
import { useSelector  } from "react-redux";
import { Spinner } from "reactstrap";
function LegisResult() {
  let total=0;

    const parties= useSelector(state => state.voteReducer.parties); 
    if (!parties) { return(
        <>
        <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
        <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
      </>
    )}

    parties.map(el=>{
      console.log("el_voters is :",el.voters_nb);
      total+=el.voters_nb;
      console.log("totalVOTERS: ",total)
    
    });

    return (

        <div>
            
        
        <div className='results'>
               {parties.map(el=>(
 
          <div className='result' key={Math.random()}> 
           <label  style={{position:'absolute',left:'200px'}}>{el.name}</label>
           <span style={{position:'absolute',right:'10px',color:'darkblue'}}>{ Number.parseFloat(el.voters_nb*100/total).toFixed(1)}%</span>
           <div style={{width:`${el.voters_nb*100/total}%`, backgroundColor: 'red',height:'64px' }}>
<img className='image_politician'  src={el.photo_adress} style={{width:'85px',borderRadius:'60%',position:'relative',left:'-88px',backgroundColor:'red'}}alt="image_party"/>                  
                     </div>    
                     </div> 
                             ))} 
         </div>
 
         
         </div>
    )
}

export default LegisResult
