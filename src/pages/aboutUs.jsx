import React, { Component } from "react";
import AboutUsBody from "../components/aboutUsBody";
import "../style/aboutUsStyles.css";
import BigDiv from "../components/bigDiv";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <BigDiv>
        <AboutUsBody />
      </BigDiv>
    );
  }
}

export default AboutUs;
