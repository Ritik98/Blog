import { Switch, Route  , Redirect} from 'react-router-dom';
import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import ViewArticle from './components/Article/ViewArticle';
import WriteArticle from './components/Article/WriteArticle';
import ViewDescription from './pages/ViewDescription';
function App() {
  const authctx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
        {!authctx.isLoggedIn && <Redirect to = "/auth"/>}

          {authctx.isLoggedIn && <HomePage />}
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/view' exact>
        {authctx.isLoggedIn &&  <ViewArticle />}
          {!authctx.isLoggedIn &&  <Redirect to = "/auth"/>}
        </Route>
        <Route path='/write'>
          
          {authctx.isLoggedIn &&  <WriteArticle />}
          {!authctx.isLoggedIn &&  <Redirect to = "/auth"/>}
        </Route>
        <Route path='/profile'>
          {authctx.isLoggedIn &&  <UserProfile />}
          {!authctx.isLoggedIn &&  <Redirect to = "/auth"/>}
        </Route>
        <Route path = '/view/:viewId'>
          <ViewDescription />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
