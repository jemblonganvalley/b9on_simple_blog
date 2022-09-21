import './style.css';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import NotFound from './src/pages/404';

const page = window.location.pathname;

switch(page){
  case "/":
    Home()
    break

  case "/login":
    Login()
    break

  case "/register":
    Register()
    break

  default:
    NotFound()
}
