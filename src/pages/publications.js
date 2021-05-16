import React, {Component} from 'react';
import BigDiv from '../components/bigDiv';
import Publication from '../components/publication'
import {BACKEND_URL} from '../constants'
import './styles/publication.css'

class Publications extends Component {
  constructor(props) {
    super(props);
    this.state = {
    error: null,
    isLoaded: false,
    items: []
    };
  }

  componentDidMount() {
    fetch(BACKEND_URL+"publications")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <BigDiv><div>Loading...</div></BigDiv>;
    } else {
      return (
        <BigDiv>
          
          <Publication items={items}></Publication>
        </BigDiv>
      );
    }
  }

}

  export default Publications;