import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer"; 
import Home from "../home/Home";
import About from "../about/About";
import { Pricing } from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SignIn from "../signin/Signin";
import Admindashboard from "../admindashboard/Admindashboard";
import Signup from "../signin/Signup";



const Pages = () => {
  return (
    <>
      <Router>
        
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/admindashboard" component={Admindashboard} />
        </Switch>
        <Footer /> 
      </Router>
    </>
  );
};

export default Pages;
