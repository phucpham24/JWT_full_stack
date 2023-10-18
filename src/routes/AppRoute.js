import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUser/Users";
import PrivateRoute from "./PrivateRoute";
const AppRoutes = (props) => {
  const Project = () => {
    return (
      <>
        <span>project</span>
      </>
    );
  };

  return (
    <>
      <Switch>
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/project" component={Project} />

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/" exact>
          Home
        </Route>
        <Route path="*">404 not found</Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
