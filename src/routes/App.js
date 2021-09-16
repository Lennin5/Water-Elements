import "../assets/css/Style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Index from "../stacks/Index";
import LoginStack from "../stacks/LoginStack";
import RegisterStack from "../stacks/RegisterStack";

import HomeStack from "../stacks/HomeStack";
import ElementsStack from "../stacks/ElementsStack";
import GraphicsStack from "../stacks/GraphicsStack";
import AboutStack from "../stacks/AboutStack";
import NotFound from "../stacks/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>  
        <Navbar />   
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={LoginStack} />
          <Route exact path="/register" component={RegisterStack} />
          <Route exact path="/home" component={HomeStack} />
          <Route exact path="/elements" component={ElementsStack} />
          <Route exact path="/graphics" component={GraphicsStack} />
          <Route exact path="/about" component={AboutStack} />
          <Route component={NotFound} />   
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
