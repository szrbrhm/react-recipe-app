import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../Details/Details";
import Login from "../pages/login/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/details" exact component={Details} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
