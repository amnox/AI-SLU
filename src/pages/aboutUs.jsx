import React, { Component } from "react";
import Header from "../components/header";
import AboutUsBody from "../components/aboutUsBody";
import Footer from "../components/footer";
import "../style/aboutUsStyles.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <AboutUsBody />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
