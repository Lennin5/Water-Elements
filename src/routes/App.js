import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import Home from "../containers/Home";
import Elements from "../containers/Elements";
import Grahpics from "../containers/Grahpics";
import NotFound from "../containers/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/elements" component={Elements} />
          <Route exact path="/graphics" component={Grahpics} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
