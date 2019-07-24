import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  render() {
    return (
      <Router>
        <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route  exact path="/About" component={About} />
        <Route exact path="/Blog" component={Blog} />
        <Route  path="/Contact" component={Contact} />
      </div>
      </Router>
      
    );
  }
}

export default PortfolioContainer;
