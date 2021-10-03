import "../assets/css/Style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AuthProvider from "../context/AuthContext";
import PrivateRoute from "../context/PrivateRoute";
import PublicRoute from "../context/PublicRoute";

import LoginStack from "../stacks/LoginStack";
import RegisterStack from "../stacks/RegisterStack";

import HomeStack from "../stacks/HomeStack";
import ElementsStack from "../stacks/ElementsStack";
import GraphicsStack from "../stacks/GraphicsStack";
import AboutStack from "../stacks/AboutStack";
import NotFound from "../stacks/NotFound"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={HomeStack} />
          <PrivateRoute exact path="/elements" component={ElementsStack} />
          <PrivateRoute exact path="/graphics" component={GraphicsStack} />
          <PrivateRoute exact path="/about" component={AboutStack} />
          <PublicRoute exact path="/login" component={LoginStack} />
          <PublicRoute exact path="/register" component={RegisterStack} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AuthProvider>
    </ BrowserRouter>
  );
}

export default App;
