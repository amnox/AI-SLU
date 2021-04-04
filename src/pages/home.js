import React from 'react';
import BigDiv from '../components/bigDiv'

class Home extends React.Component {
  render() {
    return (
      <BigDiv>
        <div className="home">
          <div className="home-banner">Banner</div>
          <div className="roadmap">Roadmap</div>
          <div className="leadership">Leader</div>
        </div>
      </BigDiv>
    );
  }
}

export default Home