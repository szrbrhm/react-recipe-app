import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
