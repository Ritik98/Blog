import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logOutHandler = () => {
    authCtx.logOut();
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>FATMUG </div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/view'>ViewArticle</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/write'>WriteArticle</Link>
          </li>}
          {isLoggedIn && <li>
            <button onClick = {logOutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
