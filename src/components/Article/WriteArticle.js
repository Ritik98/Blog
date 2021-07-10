import { Link } from "react-router-dom";
import classes from "./WriteArticle.module.css";
import { useRef , useContext} from "react";
import Card from '../UI/Card'
import {AuthContext} from '../../store/auth-context';
import { useHistory } from 'react-router';

import ReactFirebaseFileUpload from "../Upload/ReactFirebaseUpload";
import CopyWriteArticle from "./CopyWriteArticle";
const WriteArticle = () => {
  const history = useHistory();
  const authctx = useContext(AuthContext);
  
  let url;
  const enteredTitle = useRef();
  const enteredDescription = useRef();
  const data = (url1) => {
    url = url1;
  }
  const sendDetails = () => {
    
    const title = enteredTitle.current.value;
    const description = enteredDescription.current.value;
    if(title.trim() === '' || description.trim() === '' || url=== undefined )
  {  alert("Fill all the Details");
     return;
  }
    const blogData = [{
      title : title,
      description : description,
      url : url
    }];
    console.log(blogData);
    fetch("https://auth-4ec00-default-rtdb.firebaseio.com/BlogDetails.json" , {
      method: "POST",
      body : JSON.stringify({
        blogData
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(() => {
      history.replace("/");
    }).catch((error) => {
      alert(error);
    });
  };
  
 return (
   <div className = "center" >
     
        
     <Card>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor='Title'>Title</label>
            <input type='text' id='Title' ref = {enteredTitle} required />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Description</label>
            <textarea style={{ whiteSpace: 'pre-wrap' }}  id='text' rows='15' ref = {enteredDescription} required></textarea>
          </div>
          </form>
        <ReactFirebaseFileUpload onAdd = {data} />
        <div className={classes.actions}>
          <button onClick = {sendDetails}>Publish</button>
        </div>
     
      </Card>
          
   </div>
  );  
  
};
export default WriteArticle;
