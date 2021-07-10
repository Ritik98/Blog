import { useRef , useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router';
const ProfileForm = () => {
  const history = useHistory();
  const authctx = useContext(AuthContext);
  const password = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const changedPassword = password.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBoP7qmDs5MSlgXdG2hA3-STzyUgGB4XG0",{
      method : "POST",
      body : JSON.stringify({
        idToken	: authctx.token,
        password : changedPassword,
        returnSecureToken : false
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(data => {
      console.log(data);
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} >
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref = {password} />
      </div>
      <div className={classes.action}>
        <button onClick = {submitHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
