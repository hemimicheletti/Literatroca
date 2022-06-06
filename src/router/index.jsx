import { Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import Admin from "../pages/Admin";
import AboutUs from "../pages/AboutUs";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/admin" component={Admin} />
    </Switch>
  );
};

export default Router;
