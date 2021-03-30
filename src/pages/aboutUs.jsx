import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SideNavigation from "../components/sideNavigation";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
        <SideNavigation />
      </React.Fragment>
    );
  }
}

export default AboutUs;
