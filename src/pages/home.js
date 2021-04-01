import React from 'react';
import BigDiv from '../components/bigDiv'

class Home extends React.Component {
  render() {
    return (
      <BigDiv>
        <div className="home">
          <div className="home-banner"></div>
          <div className="roadmap"></div>
          <div className="leadership"></div>
        </div>
      </BigDiv>
    );
  }
}

export default Home