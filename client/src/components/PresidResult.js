import React from 'react'
import { useSelector  } from "react-redux";
import { Spinner } from "reactstrap";
function PresidResult() {
 
  let total=0;
    const politicians= useSelector(state => state.voteReducer.politicians); 
    if (!politicians) { return  (
         <>
        <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
        <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
      </>
      )};
       politicians.map(el=>{
      console.log("el_voters is :",el.voters_nb);
      total+=el.voters_nb;
      console.log("totalVOTERS: ",total)
    
    });
      
    
    return (
        <div>
            
    
       <div className='results'>
            
              {politicians.map(el=>(
                 
                   <div className='result' key={Math.random()}> 
                     <label  style={{position:'absolute',left:'200px'}}>{el.name}</label>
              <span style={{position:'absolute',right:'10px',color:'darkblue'}}>{ Number.parseFloat(el.voters_nb*100/total).toFixed(1)}%</span>
                     <div id='myBar' style={{width:`${el.voters_nb*100/total}%`, backgroundColor: 'rgb(255,0,0)',height:'64px' }}>
                <img className='image_politician'  src={el.photo_adress} style={{width:'85px',borderRadius:'60%',position:'relative',left:'-88px',}} alt="image_politicien"/>
                 
                     </div> 

                    </div>     
              ))} 
        </div>

        
        </div>
    )
}

export default PresidResult
