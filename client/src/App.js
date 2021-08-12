import TopBar from "./components/topbar/topbar.component";
import HomePage from "./pages/home/home-page";
import LoginPage from "./pages/login/login-page.component";
import Register from "./pages/register/register-page.component";
import SettingsPage from "./pages/settings/settings-page.component";
import Single from "./pages/single/single-page";
import WritePage from "./pages/write/write-page.component";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Context } from "./context/context";
import { useContext } from 'react';


function App() {
  const { user } = useContext(Context);

  return (
    <Router>
       <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register">{user ? <HomePage/> : <Register/>}</Route>
          <Route path="/login">{user ? <HomePage/> : <LoginPage/>}</Route>
          <Route path="/settings">{user ? <SettingsPage/> : <Register/>}</Route>
          <Route path="/write">{user ? <WritePage/> : <Register/>}</Route>
          <Route path="/post/:postId" component={Single} />
        </Switch>
    </Router>
  );
}

export default App;
