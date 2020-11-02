import React, { useState} from "react";
import { Alert,Button,Modal,}from "reactstrap";
import { useDispatch,useSelector  } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearMsg, register } from "../../js/actions/authActions";



const RegisterModal = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
 let msg= useSelector(state => state.authReducer.msg);
 let token= useSelector(state => state.authReducer.token);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ firstname: "",lastname: "", email: "", password: "",});

  const handleFormChange = (e) =>setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfirm =async()=> {
    await dispatch(register(formData));
    history.push("/dashboard");}

  const toggle = () => {setModal(!modal);dispatch(clearMsg());}

  return (



    <div>
      <Button color='primary' onClick={toggle}> Register </Button>

      <Modal id="M" isOpen={modal} toggle={toggle} >
      
      <div>
           
           <div className="wrapper">
             <div className="title">Sign up</div>
             
             {(msg ) ? <Alert id="alert" color='danger'>{msg}</Alert>:null}
  
       <form >
               <div className="field">
                 <input 
                    onChange={handleFormChange}
                    type="text" name="firstname"
                    id="firstname" placeholder="Enter your firstname ...."             
                    />   
               </div>

               <div className="field">
                 <input 
                    onChange={handleFormChange}
                    type="text" name="lastname"
                    id="lastname" placeholder="Enter your lastname ...."             
                    />   
               </div>

               <div className="field">
                 <input
                    onChange={handleFormChange}
                    type="email" name="email"
                    id="exampleEmail" placeholder="Enter your Email..."  
                    />
               </div>
       <div className="field">
                 <input
                      onChange={handleFormChange}
                      type="password" name="password" 
                      id="password" placeholder="Enter your password..."
                      />
                 
               </div>
      
       <div className="field">
       <Button id='login-btn'   onClick={() => {handleConfirm()}}> Register </Button>

               </div>
       <div className="signup-link">
      You are a member? <a href="#">Sign in now</a></div>
       </form>
       </div>
               </div>


      {/*  <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>*
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ...."
              />
            </FormGroup>
           
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              toggle();
            }}
          >
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          </ModalFooter>*/}
      </Modal>
    </div>
  );
};

export default RegisterModal;