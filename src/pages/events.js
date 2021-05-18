import React from 'react';
import BigDiv from '../components/bigDiv'
import {render} from 'react-dom'
import { BACKEND_URL } from "../constants";
import Event from '../components/event'

class Events extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:null,
      isLoaded:false
    }
  }
  componentDidMount() {
    fetch(BACKEND_URL + "events")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render(){

    var items = this.state.items
    var isLoaded = this.state.isLoaded
    if (!isLoaded) {
      return (
        <BigDiv>
          <div>Loading...</div>
        </BigDiv>
      )}
    return(
      <BigDiv>
      <div className="leadership">

        <Event items = {items}></Event>
      </div>
      </BigDiv>
    )
  }
}

export default Events