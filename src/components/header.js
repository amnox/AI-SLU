import React from 'react';
import './styles/header.css'
import logo from '../images/slu_logowide.jpg'

class Header extends React.Component {
    render() {
      return (
<header className="header">
   <div className="header__wrap wrap">
      <div className="header__bg"></div>

      <a href="https://www.slu.edu/arts-and-sciences/index.php" className="header__logo">
         <span className="svgstore svgstore--logo-arts-sciences-center">
            <img className="header-logo" src={logo}></img>
         </span>
      </a>
      
      <div className="header__menu">
         <div className="header__menu__wrap">
            <a href="https://www.slu.edu/arts-and-sciences/index.php" className="header__logo-left">
               <span className="hide">Saint Louis University</span>
               <span className="svgstore svgstore--logo-arts-sciences-left">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#logo-arts-sciences-left"></use>
                  </svg>
               </span>
            </a>
            <div className="header__menu__group">
               <ul className="header__nav header__nav--util">
                  <li className="header__nav__item"><a className="header__nav__link" title="Majors and Programs" href="https://www.slu.edu/programs/index.php">Majors and Programs</a></li>
                  <li className="header__nav__item"><a className="header__nav__link" title="Request Information" href="https://www.slu.edu/request-information/request-info.php">Request Info</a></li>
                  <li className="header__nav__item"><a className="header__nav__link" title="Visit SLU" href="https://www.slu.edu/admission/visit/index.php">Visit Us</a></li>
                  <li className="header__nav__item"><a className="header__nav__link" title="Apply to SLU" href="https://www.slu.edu/apply.php">Apply</a></li>
               </ul>
               <ul className="header__nav header__nav--primary" id="ou-header__nav--primary">
                  <li className="header__nav__item">   
                     <a className="header__nav__link" title="About the Department of Computer Science" href="https://cs.slu.edu/about">About</a>                 
                  </li>
                  <li className="header__nav__item">   
                     <a className="header__nav__link" title="Department of Computer Science Academic Programs" href="https://cs.slu.edu/academics">Academics</a>              
                  </li>
                  <li className="header__nav__item">   
                     <a className="header__nav__link" title="Department of Computer Science People" href="https://cs.slu.edu/people">People</a>              
                  </li>
                  <li className="header__nav__item">   
                     <a className="header__nav__link" title="Department of Computer Science Research" href="https://cs.slu.edu/research">Research</a>              
                  </li>
                  <li className="header__nav__item">   
                     <a className="header__nav__link" title="Current Students" href="https://cs.slu.edu/resources">Student Resources</a>              
                  </li>
                  <li className="header__nav__item">   
                     <a className="header__nav__link" title="Contact the Department of Computer Science" href="https://cs.slu.edu/contact">Contact</a>              
                  </li>
               </ul>
               <ul className="header__nav header__nav--action">
                  <li className="header__nav__item"><a href="https://www.slu.edu/alumni-and-donors/give/index.php" className="header__nav__link">Give to SLU</a></li>
                  <li className="header__nav__item"><a href="https://www.slu.edu/index.php" className="header__nav__link">SLU.edu</a></li>
                  <li className="header__nav__item header__nav__item--hidden">
                     <a href="#" className="header__nav__link header-search-toggle">
                        <span className="header__nav__text">Search</span> 
                        <span className="header__nav__icon">
                           <span className="svgstore svgstore--search">
                              <svg>
                                 <use href="https://cs.slu.edu/documents/images/svgstore.svg#search"></use>
                              </svg>
                           </span>
                        </span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div className="header__search">
         <div className="header__search__wrap wrap">
            <a href="#" className="header__search__close">
               <span className="hide">Close</span> 
               <span className="svgstore svgstore--x">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#x"></use>
                  </svg>
               </span>
            </a>
            <form className="header__form" method="get" id="SearchPage" action="//www.slu.edu/search/">
               <label className="hide" htmlFor="header-search">Search SLU.edu</label>
               <input id="header-search" name="q" className="header__form__input" type="search" placeholder="Search SLU.edu"/>
               <button className="header__form__button" type="submit">
                  <span className="hide">Search</span> 
                  <span className="svgstore svgstore--search">
                     <svg>
                        <use href="https://cs.slu.edu/documents/images/svgstore.svg#search"></use>
                     </svg>
                  </span>
               </button>
            </form>
            <form className="header__form" action="//www.slu.edu/peoplefinder_search.php" method="post">
               <label className="hide" htmlFor="header-people">People Finder</label>
               <input id="header-people" name="query" className="header__form__input" type="search" placeholder="People Finder"/>
               <button className="header__form__button" type="submit">
                  <span className="hide">Search</span> 
                  <span className="svgstore svgstore--search">
                     <svg>
                        <use href="https://cs.slu.edu/documents/images/svgstore.svg#search"></use>
                     </svg>
                  </span>
               </button>
            </form>
         </div>
      </div>
   </div>
</header>
      );
    }
}

export default Header