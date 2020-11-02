import React, { useState } from "react";
import './Login.css'
import {Button, Modal,Alert,Spinner} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory ,Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import { login,clearMsg } from "../../js/actions/authActions";


const LoginModal = (props) => {
  
  const dispatch = useDispatch();
  let history = useHistory();
  history.push('/');
  const msg= useSelector(state => state.authReducer.msg);
  let user= useSelector(state => state.authReducer.user);
  let token= useSelector(state => state.authReducer.token);

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({email: "",password: "",});

   const handleFormChange = (e) =>setFormData({ ...formData, [e.target.name]: e.target.value });
    
  const  handleConfirm =async()=> {
   await dispatch(login(formData));
    //while(!token){history.push('/')};
    history.push('/dashboard/profil');
    
    };

  const toggle = () => {setModal(!modal);dispatch(clearMsg());}
  
  return (
    
    <div>
      <Button  color='primary' onClick={toggle}>Login</Button>

       <Modal id="M" isOpen={modal} toggle={toggle}>
      
       
     <div>
           
    <div className="wrapper" >
      <div className="title">Login</div>
      {msg? <Alert id="alert" color='danger'>{msg}</Alert>:null}
<form >
        <div className="field">
          <input
             onChange={handleFormChange}
             type="email"  name="email"
             id="exampleEmail" placeholder="Enter your Email..."
             />
             
        </div>
       
<div className="field">
          <input
               onChange={handleFormChange}
               type="password" name="password"
               id="password"  placeholder="Enter your password..."/>
        </div>
<div className="content">
          
<div className="pass-link">
<a href="#">Forgot password?</a></div>
</div>
<div className="field">
<Button id='login-btn' onClick={handleConfirm }>  Sign in  </Button>   
        </div>
<div className="signup-link">
Not a member? <a href="#">Signup now</a></div>
</form>
</div>
        </div>
        
   {/* <LoginForm/> */}
          {/* <Form>
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
          </Form>*/}
        {/*</ModalBody> */}
        {/* <ModalFooter>
          <Button color="primary" onClick={handleConfim}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>  
    </div>
  );
};

export default LoginModal;