import { useState , useRef , useContext} from 'react';
import {AuthContext} from '../../store/auth-context'
import classes from './AuthForm.module.css';
import { useHistory  } from 'react-router';
const AuthForm = () => {
  const history = useHistory();
  const authctx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading , setIsLoading] = useState(false);
  const email = useRef();
  const password = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredpassword = password.current.value;
    setIsLoading(true);
    let url;
    if(isLogin){
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoP7qmDs5MSlgXdG2hA3-STzyUgGB4XG0";
    }
    else{
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoP7qmDs5MSlgXdG2hA3-STzyUgGB4XG0";
      };
      
      fetch(url,
        {
          method : "POST",
          body : JSON.stringify({
            email	:enteredEmail,
            password : enteredpassword,
            returnSecureToken : true
          }),
          headers : {
             'Content-Type' : 'application/json'
          }
        }
        ).then((res) => {
          setIsLoading(false);
          if(res.ok)
          {
            return res.json(); 
          }
          else
          {
            return res.json().then((data) => {
              const errormessage = data.error.message;
              throw new Error(errormessage);
            });
          }
        }).then((data) => {
          authctx.logIn(data.idToken);
          history.replace("/");
        }).catch((error) => {
          alert(error);
        });
      };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' ref = {email} id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref = {password} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            { isLogin ? 'Create new account' : 'Login with existing account'}
          
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
