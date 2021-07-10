import React from 'react'
import ViewCard from './ViewCard';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useState  , useEffect} from 'react';
import {AuthContext} from '../../store/auth-context';
import { useContext } from 'react';
const ViewArticle = () => {
    const authctx = useContext(AuthContext);
    const [details,setDetails] = useState([]);
    const [loading , setLoading] = useState(false);
   useEffect(() => {
       setLoading(true);
    fetch("https://auth-4ec00-default-rtdb.firebaseio.com/BlogDetails.json").then((res) => {
        return res.json();
    }).then((data)=>{
        setLoading(false);
        let loadedDetails = [];
        
        for(const key in data)
        {
             loadedDetails.push(
                data[key].blogData
            );
        
        }
        authctx.dataHandler(loadedDetails);
        setDetails(loadedDetails);
    }).catch((error)=>{
        console.log(error);
    });
      
   }, []) 
  
    
    return (
       <div>
        {loading && <LoadingSpinner />}
        {
        details.map((data)=>(
        <ViewCard key = {data[0].title} url = {data[0].url} title = {data[0].title} description = {data[0].description}/>))
         }
        </div>
    )
};

export default ViewArticle
