import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import headerPicture from '../images/impression-header.png';

class JoinUs extends Component {
    render() {
        var headerFooterStyle = {
            float: "clear",
            textAlign: "center"
        }
        var sideNavStyle = {
            float: "left",
            backgroundColor: "#003da5",
            width: "25%",
            height: "100%",
            color: "white",
            textAlign: "center"
        }
        var otherStyle = {
            float: "right",
            backgroundColor: "white",
            verticalAlign: "middle",
            width: "75%",
            textAlign: "center"
        }
        var subheaderStyle = {
            backgroundImage: `url(${headerPicture})`,
            backgroundSize: "cover",
            verticalAlign: "center",
            width:"90%",
            height:"200px",
            color: "white",
            fontSize: "35px",
            textAlign: "center",
            justtifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
        }
        var underlineStyle = {
            backgroundColor: "#003da5",
            color: "#003da5",
            horizontalAlign: "center",
            height: "10px",
            width: "50%"
        }
        var textStyle = {
            fontSize: "20px",
            textAlign: "center"
        }
        return (
            <>
                <div style={headerFooterStyle}>
                    <p> SLU Header</p>
                </div>
                <div style={sideNavStyle}>
                    <h1>Side Navigation</h1>
                    <p><a href="https://sites.google.com/slu.edu/ai-slu/home?authuser=0">Welcome to AI @ SLU</a></p>
                </div>
                <div style={otherStyle}>
                    <div style={subheaderStyle}>
                        <h1>Join Us</h1>
                        <div style={underlineStyle}></div>
                    </div>
                    <div style={textStyle}>
                        <p>If you would like to get more involved with these efforts, please fill the following form:</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYcHU21yVQjNjHZ5rGuw8V1Pi35t_0nh_3OezvCQ2axlhROw/viewform">CONTACT US</a>
                    </div>
                    <div style={textStyle}>
                        <button>{"\<"}</button>
                        <button>{"\>"}</button>
                    </div>
                </div>
                <div style={headerFooterStyle}>
                    <p> SLU Footer</p>
                </div>
            </>

        );
    }
}

export default JoinUs;