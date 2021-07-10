import { useParams } from "react-router";
import {AuthContext} from '../store/auth-context';
import { useContext } from 'react';
import React, { useEffect, useState } from "react";
import './ViewDescription.css'
const ViewDescription = () => {

  const param = useParams();
  const title = param.viewId;
  const authctx = useContext(AuthContext);
  const p = authctx.data.filter((data) => data[0].title === title);
  const url1 = p[0][0].url;
  const description = p[0][0].description;
  function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
  }
  return (
    <div className="postBody">
       
       
        <div className="postBody_container postContainer">
          <h1>{p[0][0].title}</h1>

          <img
            className="postBody_image"
            src = {url1}
          />

          <NewlineText  classname = "wrap" text={description}>{description}</NewlineText>

          

            
         
        </div>
      
    </div>
  

  );
};

export default ViewDescription;
   
     

