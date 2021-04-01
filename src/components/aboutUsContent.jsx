import React, { Component } from "react";
import "../style/aboutUsStyles.css";

class AboutUsContent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="float-container">
          <div
            className="float-child"
            style={{
              fontFamily: "oswald",
              fontSize: 50,
              textAlign: "center",
              color: "white",
            }}
          >
            ABOUT
            <br />
            AI@SLU
          </div>
          <div
            className="float-child"
            style={{ color: "white", fontFamily: "Open Sans" }}
          >
            <i>
              <b>
                THE MISSION OF AI@SLU IS TO LEVERAGE <br /> SLU STRENGTH AND
                COMPETENCIES TO
                <br /> PROVIDE SUPERIOR EDUCATION,
                <br /> RESEARCH, AND SERVICES TO THE <br />
                COMMUNITY ON KNOWLEDGE RELATED <br />
                TO ARTIFICIAL INTELLIGENCE
              </b>
            </i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUsContent;
