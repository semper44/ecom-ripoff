import { useState, useContext, useRef } from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import styles from "./ratings.module.css"
import { ThemeData } from "../../App";
import { AuthContext } from "../profiles/login/LoginFetch";
import jwt_decode from "jwt-decode"
import Modals from "./Modals";



function Ratings(props) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const textarea= useRef()
  const {theme}= useContext(ThemeData)

  // const token= JSON.parse(window.localStorage.getItem("authToken"))|| null


  const users= useContext(AuthContext)
  let userDetails;
  if(users.user){
    userDetails=jwt_decode(users?.user?.access)
  }

  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  function cancel(){
    props.later(false)
    props.followandrate(false)
  }
  
  let formData= new FormData()
  function submit(e){
    e.preventDefault()
    formData.append("text", textarea.current.value)
    formData.append("value", currentValue)
    formData.append("receiver", props.id)
    formData.append("sender", userDetails?.user_id)
    createReview()
  }

  let requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  const createReview= async ()=>{
    let response=await fetch('http://127.0.0.1:8000/profile/createreview',requestOptions
    )   
    console.log(response)
  }


  return (
    <Modals>
      <div className={styles.container}>
        <div className={styles.rate}>
          <p> can you please rate this account, if you love its services?</p>
        </div>
        <div className={styles.stars}>
          {stars.map((_, index) => {
            return (
              <StarOutlinedIcon
                key={index}
                size={15}
                onClick={() => {handleClick(index + 1)}}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                sx={{color: (hoverValue || currentValue) > index ? "orange" :theme?"gray":"black", mb:"20px"}}
                />
                )
              })}
        </div>
        {currentValue>0 && <div className={styles["input-review"]}>
          <textarea 
          name="rating" 
          rows="17" 
          cols="60" 
          placeholder="Write your reviews please"
          ref={textarea} />
        </div> }
        <div className={currentValue>0?styles.rated:styles.later} onClick={cancel}>
          {currentValue>0?<p onClick={submit}>
            Rate
          </p>:<p>Rate later</p>}
        </div>
      </div>
    </Modals>
  );
};






export default Ratings;
 