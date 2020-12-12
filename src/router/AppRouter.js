import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/landing/Home";
import Promotions from "../pages/landing/Promotions";
import About from "../pages/landing/About";
import Product from "../pages/landing/Product";
import Pricing from "../pages/landing/Pricing";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pricing" component={Pricing} />
        <Route path="/promotions" component={Promotions} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/*" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
