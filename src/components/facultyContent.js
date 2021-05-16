import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Entry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.item;
    return (
      <div>
        <div style={{ fontSize: 30, fontWeight: "bold" }}>
          {item.firstname} {item.lastname}
        </div>
        <div>
          {item.department}
        </div>
        <div>
          {item.email}
        </div>
        <div style={{borderBottom: "3px solid rgb(212, 212, 212)"}}>
          {item.number}
        </div>
      </div>
    );
  }
}

class FacultyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "all",
    };
  }

  render() {
    var items_master = this.props.items;
    if (this.state.department == "all") {
      items = items_master;
    } else if (this.state.department == "Computer Science") {
      var items = items_master.filter(
        (item) => item.department == "Computer Science"
      );
    } else if (this.state.department == "Engineering") {
      var items = items_master.filter(
        (item) => item.department == "Parks College of Engineering, Aviation and Technology"
      );
    } else if (this.state.department == "Business") {
      var items = items_master.filter((item) => item.department == "School of Business");
    } else if (this.state.department == "Health") {
      var items = items_master.filter((item) => item.department == "Health");
    }

    return (
      <React.Fragment>
        <div className="faculty-container">
          <h1>Faculty</h1>
          <Button
            onClick={() => {
              this.setState({ department: "all" });
            }}
            variant="contained"
          >
            All Departments
          </Button>
          <Button
            onClick={() => {
              this.setState({ department: "Computer Science" });
            }}
            variant="contained"
          >
            Computer Science
          </Button>
          <Button
            onClick={() => {
              this.setState({ department: "Engineering" });
            }}
            variant="contained"
          >
            Engineering
          </Button>
          <Button
            onClick={() => {
              this.setState({ department: "Business" });
            }}
            variant="contained"
          >
            Business
          </Button>
          <Button
            onClick={() => {
              this.setState({ department: "Health" });
            }}
            variant="contained"
          >
            Health
          </Button>
          {items.map((item) => (
            <Entry key={item._id} item={item} />
          ))}
        </div>
        
      </React.Fragment>
    );
  }
}

export default FacultyContent;
