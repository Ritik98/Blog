import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './CopyWriteArticle.module.css';

const CopyWriteArticle = () => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

   console.log({ author: enteredAuthor, text: enteredText });
  }

  

  return (
    <Fragment>
      
      <Card>
        <form
      
          className={classes.form}
        >
          

          <div className={classes.control}>
            <label htmlFor='Title'>Title</label>
            <input type='text' id='Title' ref={authorInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Description</label>
            <textarea id='text' rows='15' ref={textInputRef} required></textarea>
          </div>
         
        </form>
      </Card>
    </Fragment>
  );
};

export default CopyWriteArticle;