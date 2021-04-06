import React, { Component } from "react";
import AboutUsContent from "../components/aboutUsContent";
import "../style/aboutUsStyles.css";
import BigDiv from "../components/bigDiv";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <BigDiv>
        <AboutUsContent />
      </BigDiv>
    );
  }
}

export default AboutUs;
