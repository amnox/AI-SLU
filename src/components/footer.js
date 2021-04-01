import React from 'react';


class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
  <div className="wrap">
   <div className="footer__main">
      <div className="footer__tagline">Higher purpose. Greater good.</div>
      <ul className="footer__social">
         <li className="footer__social__item">
            <a href="https://facebook.com/SaintLouisU/" className="footer__social__link">
               <span className="hide">Facebook</span>
               <span className="svgstore svgstore--facebook">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#facebook"></use> </svg>
               </span>
            </a>
         </li>
         <li className="footer__social__item">
            <a href="https://twitter.com/SLU_Official" className="footer__social__link">
               <span className="hide">Twitter</span>
               <span className="svgstore svgstore--twitter">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#twitter"></use>                  </svg>
               </span>
            </a>
         </li>
         <li className="footer__social__item">
            <a href="https://www.linkedin.com/company/saint-louis-university" className="footer__social__link">
               <span className="hide">LinkedIn</span>
               <span className="svgstore svgstore--linkedin">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#linkedin"></use>                  </svg>
               </span>
            </a>
         </li>
         <li className="footer__social__item">
            <a href="https://www.instagram.com/slu_official/" className="footer__social__link">
               <span className="hide">Instagram</span>
               <span className="svgstore svgstore--instagram">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#instagram"></use>                  </svg>
               </span>
            </a>
         </li>
         <li className="footer__social__item">
            <a href="https://www.youtube.com/user/SaintLouisUniversity" className="footer__social__link">
               <span className="hide">YouTube</span>
               <span className="svgstore svgstore--youtube-play">
                  <svg>
                     <use href="https://cs.slu.edu/documents/images/svgstore.svg#youtube-play"></use>                  </svg>
               </span>
            </a>
         </li>
      </ul>
      <ul className="footer__nav">
         <li className="footer__nav__item"><a className="footer__nav__link" href="https://www.slu.edu/current-students/index.php">Current Students</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" href="https://www.slu.edu/parents/index.php">Parents</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" href="https://www.slu.edu/alumni-and-donors/index.php">Alumni &amp; Donors</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" href="https://www.slu.edu/faculty-and-staff/index.php">Faculty &amp; Staff</a></li>
      </ul>
      <ul className="footer__nav footer__nav--util">
         <li className="footer__nav__item"><a className="footer__nav__link" title="Madrid Campus" href="https://www.slu.edu/madrid">Madrid Campus</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" title="Contact Us" href="https://www.slu.edu/contact.php">Contact Us</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" title="mySLU" href="https://myslu.slu.edu/" target="_blank">mySLU</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" title="Working at SLU" href="https://www.slu.edu/working-at-slu.php">Work at SLU</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" title="Emergency Information" href="https://www.slu.edu/about/safety/campus-emergency.php">Emergency Info</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" title="Disclaimer" href="https://www.slu.edu/disclaimer.php">Disclaimer</a></li>
         <li className="footer__nav__item"><a className="footer__nav__link" title="Privacy Notice" href="https://www.slu.edu/privacy-notice.php">Privacy Notice</a></li>
      </ul>
   </div>
   <a href="https://www.slu.edu/" className="footer__logo">
      <span className="hide">Saint Louis University</span>
      <span className="svgstore svgstore--logo">
         <svg>
            <use href="https://cs.slu.edu/documents/images/svgstore.svg#logo"></use>         </svg>
      </span>
   </a>
   <div className="footer__copyright"><span id="direct-edit">©</span> 1818 - 2018 Saint Louis University
   </div>
</div>


</footer>
      );
    }
}

export default Footer