import { useParams } from "react-router";
import {AuthContext} from '../../store/auth-context';
import { useContext } from 'react';
import React, { useEffect, useState } from "react";
import './ViewBody.css'
const ViewBody = (props) => {
  const authctx = useContext(AuthContext);
  console.log(props.details);
  return (
    <div className="postBody">
     {/* <img src = {authctx.data[0][0].url}/> */}
    </div>
  

  );
};

export default ViewBody;
   
     

