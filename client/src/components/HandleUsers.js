import React,{useState} from 'react'
import { useSelector,useDispatch  } from "react-redux";
import { Spinner } from "reactstrap";
import Modal from 'react-modal' ;
import './HandleUsers.css';
import { deleteUser } from "../js/actions/adminActions";
import Swal from 'sweetalert2';
Modal.setAppElement('#root')


function HandleUsers() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [element, setElement] = useState({});
    const dispatch = useDispatch();   
    const  allUsers= useSelector(state => state.adminReducer.allUsers);
    const Swal = require('sweetalert2');
    
    const handleConfirm=(el)=>{
      setmodalIsOpen(false);
      console.log("element à supprimer: ",el.firstname);
      dispatch(deleteUser(el._id));
    
      
        Swal.fire({
          target: document.getElementsByClassName('sidebar-content'),
          background:'rgb(178, 234, 238)',
          icon:'Deleted!',
          title:'user has been deleted successfully',
          icon: 'success',
          display:'unset',
        });  
        }
    
   
    if (!allUsers) { return (
        <>
         <Spinner animation="grow"  style={{position:'absolute',left:'750px',top:'220px',color:'lightblue',width:'40px',height:'40px'}} />
    <h3 style={{position:'absolute',left:'720px',top:'280px',color:'lightblue',}}>loading</h3>
    </>
    )}

    
   

    return (
        <div>
            
        
        <div className='results' style={{left:'450px',position:'relative',top:'30px'}}>
               {allUsers.map(el=>(
                   
                <div style={{display:'flex',flexDirection:'row', marginBottom:'-5px',}} key={Math.random()}>
                   
                    <button className='button_update_question' style={{top:'13px',left:'600px',height:'50px',width:'85px'}} onClick={()=>{ setmodalIsOpen(true);setElement(el);console.log(element)}} > Delete</button>
                    <div className='result' > 
                      <label style={{position:'absolute',left:'200px'}}>{el.firstname} {el.lastname}</label>
                     
                      <img className='image_politician'  src='https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Personal.png' style={{width:'70px',borderRadius:'60%',position:'relative',left:'10px',backgroundColor:'#FFA500'}}/>
                     </div>

                     
         <Modal  isOpen={modalIsOpen}  style={{
              overlay: {position: 'fixed', left: '305px', top:'75px',},
              content: {position: 'absolute',top: '0px',left: '0px',right: '0px',bottom: '0px',padding:'0px',background: 'white',outline: 'none',border:'none',}
                                            }}>
             <div className='div_for_modal'>
             <i class="fas fa-exclamation"></i>
               <h1>this user will be deleted permanently !</h1>
               <label>Are you sure to proceed ?</label>
               <div className='btns'>
                   <button className="btn1" onClick={()=> {setmodalIsOpen(false)}}>cancel</button>
                   <button className="btn2" onClick={()=>{console.log(element);handleConfirm(element)}}>confirm</button>
               </div>
            </div>
         </Modal> 

                     
                 </div> 
                    ))} 
         </div>
           
   </div>






      
    )
}

export default HandleUsers
