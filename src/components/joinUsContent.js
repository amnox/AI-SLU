import React, { Component } from "react";
import "../style/aboutUsStyles.css";

class JoinUsContent extends Component {
    render() {
        return (
            <div>
                <h1 className= "fonts" style={{ paddingTop:50, paddingBottom: 20, fontSize: 40}}>
                    Join Us
                </h1>
                <div style={{ textAlign: "center"}}>
                    <h1 className="fonts" style={{paddingBottom: 10}}>
                        If you would like to get more involved with these efforts, please fill the following form:
                    </h1>
                    <h1 className="fonts" style={{paddingBottom: 10, fontSize: 30}}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYcHU21yVQjNjHZ5rGuw8V1Pi35t_0nh_3OezvCQ2axlhROw/viewform">CONTACT US</a>
                    </h1>
                </div>
            </div>
        );
    }
}

export default JoinUsContent;