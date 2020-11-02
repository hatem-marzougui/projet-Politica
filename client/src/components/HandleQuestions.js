import React,{useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import './HandleQuestions.css';
import Modal from 'react-modal' ;
import {  updateQuestion } from "../js/actions/adminActions";
import Swal from 'sweetalert2';
Modal.setAppElement('#root');

function HandleQuestions() {
    
    const [modalIsOpen, setmodalIsOpen] = useState(false);
     const [element, setElement] = useState({});

     const dispatch = useDispatch();   
    const pres_question= useSelector(state => state.voteReducer.pres_description);
    const legis_question= useSelector(state => state.voteReducer.legis_description);
    const Swal = require('sweetalert2');
    let tab=[pres_question,legis_question];
    const [formData, setFormData] = useState({description: ""});
    const handleFormChange = (e) =>setFormData({ ...formData, [e.target.name]: e.target.value });
   
    const handleConfirm=(el)=>{
        setmodalIsOpen(false);
        console.log("element à updater: ",el);
        console.log('formData',formData);
       dispatch( updateQuestion(el,formData) );
           Swal.fire({
             target: document.getElementsByClassName('sidebar-content'),
             background:'rgb(178, 234, 238)',
             icon:'Deleted!',
             title:'question was been updated successfully',
            icon: 'success',
             display:'unset',
           });  
          }

          if (!tab) { return(
            <>
              <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
              <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
            </>
          )}


    return (
         <div >
           
          {tab.map(el=>(
              <>
              <button className='button_update_question' style={{top:'165px',left:'1180px'}} 
              onClick={()=>{(el===legis_question)? setElement('5f7e576d5f97e113d0ec5b8e'):setElement('5f7e578c5f97e113d0ec5b8f');
                 setmodalIsOpen(true);;console.log(element)}}> Update</button>
              <div className='div_question'>
              <input type='text' className='pres_question_admin' value={el} disabled/>
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
             <i className="fas fa-pen-alt" style={{margin:'5px 0 5px 0'}}></i>
             <h1>update question</h1>
             
             <label>question description</label>
             <input id='input_questions' type='text' name='description' onChange={handleFormChange}/>
             
            
            
             <div className='btns' style={{margin:'30px 0 0 0'}}>
                   <button className="btn1"
                    onClick={()=> {setmodalIsOpen(false)}}>cancel</button>
                   <button className="btn2"
                    onClick={()=>handleConfirm(element)}>confirm</button>
               </div>
             
                
               
             </div>
         </Modal> 

              </>
          ))} 
        
       
        
        

        </div>
    )
}

export default HandleQuestions
