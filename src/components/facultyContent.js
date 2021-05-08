/*
import React, { Component } from "react";
import {BACKEND_URL} from '../constants'

class FacultyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch(BACKEND_URL+"faculty")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                console.log("Inside error");
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        console.log(this.state);
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.firstname} {item.lastname}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default FacultyContent;
*/

import { Component } from "react";

class Entry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.item;
    return <p className="faculty-item">{item.author}</p>;
  }
}

class FacultyContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="faculty-container">
        {items.map((item) => (
          <Entry key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

export default FacultyContent;
