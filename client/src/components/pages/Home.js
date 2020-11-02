import React from "react"; 
import { Link,NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import "./Home.css"
import { getPoliticians, getPresQuestions } from '../../js/actions/voteActions';
import { getParties,getLegisQuestions } from '../../js/actions/voteActions';

const Home = () => {
  const dispatch = useDispatch();
   
  
    const getR_inf =()=> {
       dispatch(getPoliticians());dispatch(getParties());
       dispatch(getPresQuestions());dispatch(getLegisQuestions());
      };
        
    

  return (
    <div className='hero-container'>

      <video src="/videos/video-2.mp4" autoPlay loop muted />
      
      <h1>Politica</h1>
      <h2>the political barometer in one click</h2>

      <div >
        <button className='actual_result_button'  style={{outline: "none" ,fontSize: "20px"}} >
        <Link   to="/result" className="Link" style={{color: "white",}}  onClick={getR_inf}> Actual Result</Link>
        </button>
       

      </div>


    </div>
  );
};
export default Home;