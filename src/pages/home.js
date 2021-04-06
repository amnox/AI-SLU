import React from 'react';
import BigDiv from '../components/bigDiv'
import './styles/home.css'
import headerPicture from '../images/EmbeddedImage.png';
import img1 from '../images/leadership/1.jpeg'
import img2 from '../images/leadership/2.png'
import img3 from '../images/leadership/3.jpeg'
import img4 from '../images/leadership/4.jpg'
import img5 from '../images/leadership/5.png'

function Banner(props){
  return (
    <div className="home-banner">
      <div className="home-banner-image">
        <img src={headerPicture}></img>
      </div>
      <div className="home-banner-paragraph">THE MISSION OF AI@SLU IS TO LEVERAGE SLU STRENGTH AND COMPETENCIES TO PROVIDE SUPERIOR EDUCATION, RESEARCH, AND SERVICES TO THE COMMUNITY ON KNOWLEDGE RELATED TO ARTIFICIAL INTELLIGENCE.</div>
    </div>
  )
}
function RoadMap(props){

  return(
    <div className="roadmap">
      <div className="roadmap-left">
        <p>WHY SLU and WHY NOW?</p>
        <ul>
          <li>Build on existing AI strength and experience</li>
          <li>Advance research across all units</li>
          <li>Leverage SLU strengths in ethics, and SLU Jesuit mission </li>
        </ul>
      </div>
      <div className="roadmap-right">
        <div className="roadbox">
          <div className="roadbox-header">Research</div>
          <div className="roadbox-text">
            <ul>
              <li>Build community within SLU</li>
              <li>Expand core AI expertise</li>
              <li>Go after bigger grants with more centralized support in AI</li>
              <li>In-house "AI consulting" to support SLU researchers</li>
            </ul>
          </div>
          
        </div>
        <div className="roadbox">
          <div className="roadbox-header">Education</div>
          <div className="roadbox-text">
            <ul>
              <li>SLU Faculty Development</li>
              <li>Graduate Student Training</li>
              <li>Professional Training</li>
              <li>Internships for SLU Students(Undergraduate/Graduate)</li>
              <li>New Major, Minor, Certificate, Elective Courses</li>

            </ul>
          </div>
          
        </div>
        <div className="roadbox">
          <div className="roadbox-header">Outreach</div>
          <div className="roadbox-text">
            <ul>
              <li>Visibility of AI@SLU Efforts</li>
              <li>Professional Events</li>
              <li>Shape Public Policy/Law</li>
              <li>Community Engagement</li>
              <li>Advisory Board</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

class Leadership extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var peeps = []
    var people=this.props.people
    for (const p in people){
      peeps.push(
        <div className="lwrap">
          <div className="lbox">
            <div className="limg"><img src={people[p].image}></img></div>
            <div className="lname"><a href={people[p].url}>{people[p].name}</a></div>
            <div className="loffice">{people[p].designation}</div>
          </div>
        </div>
      )
    }
    return(
      <div className="leadership">
        <h1>Leadership</h1>
        {peeps}
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      leadership:[
        {name:"Michael Goldwasser",designation:"Department of Computer Science",url:"https://cs.slu.edu/people/goldwasser", image:img1},
        {name:"Mamoun Benmamoun (Ben)",designation:"Richard A. Chaifetz School of Business",url:"https://www.slu.edu/business/about/faculty/benmamoun-mamoun.php", image:img2},
        {name:"Flavio Esposito",designation:"Department of Computer Science",url:"https://cs.slu.edu/people/esposito", image:img3},
        {name:"Srikanth Gururajan",designation:"Parks College of Engineering, Aviation and Technology",url:"https://www.slu.edu/parks/faculty/gururajan-srikanth.php", image:img4},
        {name:"Steven Smart, MD",designation:"Cardiovascular Disease, Internal Medicine",url:"https://physicians.slucare.edu/details/999/steven-smart-cardiovascular_disease-internal_medicine-st_louis", image:img5}
      ]
    }
  }
  render() {
    return (
      <BigDiv>
        <div className="home">
          <Banner/>
          <RoadMap/>
          <Leadership people={this.state.leadership}/>
        </div>
      </BigDiv>
    );
  }
}

export default Home