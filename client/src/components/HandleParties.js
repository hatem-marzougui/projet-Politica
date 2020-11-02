import React,{useState} from 'react'
import { useSelector,useDispatch  } from "react-redux";
import { Spinner } from "reactstrap";
import './HandleUsers.css';
import Modal from 'react-modal' ;
import Swal from 'sweetalert2';
import {  updateParty } from "../js/actions/adminActions";
Modal.setAppElement('#root');

function HandleParties() {
   const [modalIsOpen, setmodalIsOpen] = useState(false);
   const [element, setElement] = useState({});
    const  allParties= useSelector(state => state.adminReducer.parties);
    const dispatch = useDispatch();   
    const Swal = require('sweetalert2');
    
    const [formData, setFormData] = useState({name: "",photo_adress: "",});
    const handleFormChange = (e) =>setFormData({ ...formData, [e.target.name]: e.target.value });


    const handleConfirm=(el)=>{
      setmodalIsOpen(false);
      console.log("element à updater: ",el.firstname);
      console.log('formData',formData);
     dispatch( updateParty(el._id,formData) );
         Swal.fire({
           target: document.getElementsByClassName('sidebar-content'),
           background:'rgb(178, 234, 238)',
           icon:'Deleted!',
           title:'Party was been updated successfully',
          icon: 'success',
           display:'unset',
         });  
        }


    if (!allParties) { return(
        <>
          <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
          <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
        </>
      )}

    return (
        <div>
            
        
      <div className='results' style={{left:'450px',}} >
             {allParties.map(el=>(
              <div style={{display:'flex',flexDirection:'row', marginBottom:'-5px'}} >
                  <button className='button_update_question' style={{top:'13px',left:'600px',height:'50px',width:'85px'}} onClick={()=>{ setmodalIsOpen(true);setElement(el);console.log(element)}}> Update</button>
                  <div className='result'> 
                    <label  style={{position:'absolute',left:'200px'}}>{el.name}</label>
                    <img className='image_politician'  src={el.photo_adress} style={{width:'70px',borderRadius:'60%',position:'relative',left:'10px',backgroundColor:'red'}}alt="image_party"/>
                   </div>


                   <Modal  isOpen={modalIsOpen}  style={{
              overlay: {
                position: 'fixed',
                left: '305px', 
                top:'75px',

              },
    
    content: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      padding:'0px',
      background: 'white',
      
      outline: 'none',
      border:'none',
      
    }
  }}>
             <div className='div_for_modal'> 
             <i class="fas fa-wrench" style={{margin:'10px 0 10px 0'}}></i>
             <h1>update party</h1>
             
             <label>party name</label>
             <input type='text' name='name' onChange={handleFormChange}/>
             <label>photo adress </label>
             <input type='url' name='photo_adress' onChange={handleFormChange}/>
            
            
             <div className='btns' style={{margin:'30px 0 0 0'}}>
                   <button className="btn1" onClick={()=> {setmodalIsOpen(false)}}>cancel</button>
                   <button className="btn2" onClick={()=>{handleConfirm(element)}}>confirm</button>
               </div>
             
                
               
             </div>
         </Modal> 

                   
               </div>
                  ))} 
       </div>
         
 </div>
    )
}

export default HandleParties
