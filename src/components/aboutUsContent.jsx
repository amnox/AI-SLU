import React, { Component } from "react";
import "../style/aboutUsStyles.css";

class AboutUsContent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          className="fonts"
          style={{ paddingTop: 50, paddingBottom: 20, fontSize: 40 }}
        >
          About
        </h1>

        <h6 className="fonts" style={{ paddingBottom: 35 }}>
          The mission of AI@SLU is to leverage SLU strength and competencies to
          provide superior education, research, and services to the community on
          knowledge related to Artificial Intelligence.
        </h6>

        <h1 className="fonts" style={{ paddingBottom: 10 }}>
          2019 BIG IDEAS PLANNING GRANT WINNER
        </h1>
        <p className="fonts" style={{ paddingBottom: 40 }}>
          A group of SLU faculty and researchers from various disciplines and
          with a mutual research interest in artificial intelligence came
          together in February-March 2019, to discuss whether coordinated growth
          in Artificial Intelligence (AI) is both a strength that SLU can build
          upon as well as an area of need that can help expand research efforts
          in a variety of disciplines. The group recognizes that the ubiquity of
          AI and the remarkable advances that it has brought and will continue
          to bring to such a variety of domains makes it a critical focal point
          for further research. Also, the rapid growth of AI raises an enormous
          number of ethical, economical, policy, and legal questions that must
          be addressed. For both of these reasons, the group envision creating a
          interdisciplinary entity for developing, testing and implementing
          Artificial Intelligence at Saint Louis University as a compelling
          strategic initiative, allowing both for the advancement of research
          across a wide swath of domains, and leveraging our strengths in
          computer science, engineering, humanities, ethics, health, business,
          law and policy, and our Jesuit mission. The discussion led to two Big
          Idea proposals: Artificial Intelligence at Saint Louis University and
          Smart Echocardiography. The two proposals were combined into AI@SLU to
          strengthen SLU's capability for artificial intelligence in various
          disciplines.
        </p>
        <div style={{ textAlign: "center" }}>
          <a
            className="fonts"
            href="https://www.slu.edu/news/announcements/2019/may/big-ideas-grant-winners.php"
            target="blank"
            style={{
              fontSize: 50,
              textDecoration: "underline",
            }}
          >
            ANNOUNCEMENT
          </a>
        </div>
      </div>
    );
  }
}

export default AboutUsContent;
