import React from 'react';
import './styles/sidenav.css'

function NavItem(props){
  var isParent= props.isParent,
      children = props.children,
      value = props.value,
      url = props.url
  return(
    <div className="item-container">
      <div></div>
      <div></div>
    </div>
  )
}
// Simple Layouts Are The besT
class SideNavigation extends React.Component {
  
  render() {
    return (
      <div className="side-navigation">Side SideNavigation</div>
    );
  }
}

export default SideNavigation