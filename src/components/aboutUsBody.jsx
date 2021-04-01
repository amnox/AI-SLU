import React, { Component } from "react";
import SideNavigation from "./sideNavigation";
import AboutUsContent from "./aboutUsContent";
import "../style/aboutUsStyles.css";

class AboutUsBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div
            className="column left"
            style={{ border: "thick solid #0000FF" }}
          >
            <SideNavigation />
          </div>
          <div className="column right">
            <AboutUsContent />

            <div /*style={{ border: "thick solid #FF0000" }}*/>
              <h1 style={{ fontSize: 50, fontFamily: "oswald", margin: 10 }}>
                2019 BIG IDEAS PLANNING GRANT WINNER
              </h1>
              <div
                style={{ fontSize: 16, fontFamily: "open sans", margin: 10 }}
              >
                A group of SLU faculty and researchers from various disciplines
                and with a mutual research interest in artificial intelligence
                came together in February-March 2019, to discuss whether
                coordinated growth in Artificial Intelligence (AI) is both a
                strength that SLU can build upon as well as an area of need that
                can help expand research efforts in a variety of disciplines.
                The group recognizes that the ubiquity of AI and the remarkable
                advances that it has brought and will continue to bring to such
                a variety of domains makes it a critical focal point for further
                research. Also, the rapid growth of AI raises an enormous number
                of ethical, economical, policy, and legal questions that must be
                addressed. For both of these reasons, the group envision
                creating a interdisciplinary entity for developing, testing and
                implementing Artificial Intelligence at Saint Louis University
                as a compelling strategic initiative, allowing both for the
                advancement of research across a wide swath of domains, and
                leveraging our strengths in computer science, engineering,
                humanities, ethics, health, business, law and policy, and our
                Jesuit mission. The discussion led to two Big Idea proposals:
                Artificial Intelligence at Saint Louis University and Smart
                Echocardiography. The two proposals were combined into AI@SLU to
                strengthen SLU's capability for artificial intelligence in
                various disciplines.
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 50,
              }}
            >
              <a
                href="https://www.slu.edu/news/announcements/2019/may/big-ideas-grant-winners.php"
                alt="Announcements"
              >
                ANNOUNCEMENTS
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUsBody;
