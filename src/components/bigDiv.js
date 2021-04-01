import React from 'react';
import Header from './header'
import Footer from './footer'
import SideNavigation from './sideNavigation'
import './styles/bigdiv.css'
class BigDiv extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="outer-wrapper">
        <Header />
        <div className="content-wrapper">
          <SideNavigation />
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default BigDiv