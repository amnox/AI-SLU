import React, { useState } from 'react';
import './styles/sidenav.css'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function NavItem(props){
  const [expand, expandIt] = useState(false);
  var isParent= props.isParent, children = props.children, value = props.value, url = props.url;
  let subnav = []
  if (isParent){
    for(const child in children){
      subnav.push(
        <div className="sub-item-container" key={children[child].value}>
          <Link to={children[child].url}>{children[child].value}</Link>
        </div>
      )
    }
    
  }
  return(
    <div>
    <div className="item-container" key={value}>
      
      <Link to={url}>{value}</Link>
      { isParent &&
        <div className="sidenav-dropdown-icon" onClick={() => expandIt(!expand)}>
        <FontAwesomeIcon icon={expand?faChevronUp:faChevronDown} />
        </div>
      }
      
    </div>
    {
      isParent && expand && subnav
      
    }
    </div>
  )
}

function SideNavigation() {
  let menu = {
    "home":{
      isParent:false,
      children:[],
      value:"Home",
      url:"/"
    },
    "events":{
      isParent:true,
      value:"Events",
      url:"/events",
      children:[
        {value:"Contents",url:"/events?type=contest"},
        {value:"Seminars",url:"/events?type=seminar"},
        {value:"Tutorial",url:"/events?type=tutorial"}
      ]
    },
    "faculty":{
      isParent:false,
      children:[],
      value:"Faculty",
      url:"/faculty"
    },
    "publications":{
      isParent:false,
      children:[],
      value:"Publications",
      url:"/publications"
    },
    "about":{
      isParent:false,
      children:[],
      value:"About Us",
      url:"/aboutus"
    },
  }
  let menuItems = []
  for(let item in menu){
        menuItems.push(NavItem(menu[item]))
  }
  
  return (
    <div className="side-navigation">
      <div className="side-navigation-wrapper">
        {menuItems}
      </div>
    </div>
  );
}

export default SideNavigation