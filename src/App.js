
import './App.css';
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import Footer from "./Footer";
import { Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
