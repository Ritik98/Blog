import './StartingPageContent.css';
import './StartingPageContent.css'
import React from "react";
import ViewBody from './ViewBody';
import Card from '../UI/Card'
import { useEffect , useState } from 'react';
import {AuthContext} from '../../store/auth-context';
import { useContext } from 'react';
//  import StarIcon from "@material-ui/icons/Star";
//  import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
//  import moment from "moment";
const DUMMY_DATA = [
  {
    title : "Learn React JS in 5 minutes — A tutorial for beginners",
    description :"Get you started with the popular JavaScript library in just a few minutes.",
    url : "https://miro.medium.com/max/1400/1*IfwvdXdue_6unCX5eCnnqg.png"
  },
  {
    title : "ReactJS Introduction -",
    description : "Why and How to Use it",
    url : "https://miro.medium.com/max/3000/1*rn7lpiGJdXHu5n4THENrTA.png"
  },
  {
    title : "React Redux",
    description : "Redux is a predictable state container for JavaScript apps.",
    url : "https://miro.medium.com/max/1400/1*Bp9Q7jczQkZP2981NAA_EA.png" 
  },
  {
    title : "React Basic",
    description : "Display JSX",
    url : "https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
  },
]

const StartingPageContent = () => {
 
  return (
  <div >
    
    <div className = "right">
      <hr></hr>
      <h2>TOP ARTICLES</h2>
      <hr></hr>
      <div className="MediumPosts_Text">
        <div>
        <h2>
         {DUMMY_DATA[0].title}
        </h2>
        <p>{DUMMY_DATA[0].description}</p>
        </div>
      <img
       className="MediumPosts_image"
       src = {DUMMY_DATA[0].url}
      /> 
      </div>
      <div className="MediumPosts_Text">
        <div>
        <h2>
         {DUMMY_DATA[1].title}
        </h2>
        <p>{DUMMY_DATA[1].description}</p>
        </div>
      <img
       className="MediumPosts_image"
       src = {DUMMY_DATA[1].url}
      /> 
      </div>
      <div className="MediumPosts_Text">
        <div>
        <h2>
         {DUMMY_DATA[2].title}
        </h2>
        <p>{DUMMY_DATA[2].description}</p>
        </div>
      <img
       className="MediumPosts_image"
       src = {DUMMY_DATA[2].url}
      /> 
      </div>
      <div className="MediumPosts_Text">
        <div>
        <h2>
         {DUMMY_DATA[3].title}
        </h2>
        <p>{DUMMY_DATA[3].description}</p>
        </div>
      <img
       className="MediumPosts_image"
       src = {DUMMY_DATA[3].url}
      /> 
      </div>
     </div>    
  </div>


 

  



  );
};

export default StartingPageContent;

