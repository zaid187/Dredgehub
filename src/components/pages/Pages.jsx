import React from "react";
import Header from "../common/header/Header"; // Correct path
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Use Switch for v5
import Home from "../home/Home"; // Correct path
import Footer from "../common/footer/Footer"; // Correct path
import About from "../about/About"; // Correct path
import { Pricing } from "../pricing/Pricing"; // Correct path
import Blog from "../blog/Blog"; // Correct path
import Services from "../services/Services"; // Correct path
import Contact from "../contact/Contact"; // Correct path
import SignIn from "../signin/Signin"; // Correct path
import AdminDashboard from "../admindashboard/Admindashboard"; // Correct path

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch> {/* Switch for v5 */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} /> {/* Use component prop */}
          <Route exact path="/admin-dashboard" component={AdminDashboard} /> {/* Use component prop */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
