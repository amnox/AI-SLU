import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown'
import './styles/event.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
//contest, seminars, tutorials


//Latest
//Oldest

//All
//Active Events

class Event extends Component{
  constructor(props){
    super(props)
    
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.selectType = this.selectType.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.selectOrder = this.selectOrder.bind(this);

    var url = window.location.href.split('?')
    var type='all'
    if(url.len>1){
      type = url[1].split('=')[1]
      this.handleTypeChange({target:{value:type}})
    }
    this.state = { type:type, order:'latest','items':props.items}
  }
  handleTypeChange(event) {
    if(event.target.value==='all'){
      this.setState((state,props)=>{ return {type: event.target.value, items:props.items,order:state.order}})
      return
    }
    const result = this.props.items.filter(e => e.type==event.target.value);
    this.setState((state,props)=>{ return {type: event.target.value, items:result,order:state.order}});
  }
  selectType(){
    return(
      <select className = "filter-dropdown" value={this.state.type} onChange={this.handleTypeChange}>
        <option value="all">All</option>
        <option value="contest">Contests</option>
        <option value="seminar">Seminars</option>
        <option value="tutorial">Tutorials</option>
      </select>
    )
  }

  handleOrderChange(event) {
    var result = this.props.items
    if(event.target.value=='latest'){
      result = result.sort((a,b)=> {
        const d1 = new Date(a.start);
        const d2 = new Date(b.start);
        if(d1>d2){
          return -1
        }
        
      })
    } else{
      result = result.sort((a,b)=> {
        const d1 = new Date(a.start);
        const d2 = new Date(b.start);
        if(d1<d2){
          return -1
        }
        
      })
    }
    
    this.setState((state,props)=>{ return {order: event.target.value, items:result,type:state.type}});

  }
  selectOrder(){
    return(
      <select className = "filter-dropdown" value={this.state.order} onChange={this.handleOrderChange}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>

      </select>
    )
  }

  render(){
    var items = this.state.items
    
    return(
      <div className="events-container">
        <div className="dropdowns"> Filters: 
          <this.selectType></this.selectType>
          <this.selectOrder></this.selectOrder>
        </div>
        <div>
          
          {
            items.map((item) => {
              const [startd ,startt]= item.start.split('T')
              const [finishd, finisht] = item.finish.split('T')
              return (
                <div key={item._id} className="event-item">
                <li className="event-name"><span>{item.name}</span></li>
                <div className="event-timings">
                <p><b>Start Date:</b> {startd}</p><p> <b>Time: </b> {startt}</p>
                <p><b>End Date:</b> {finishd}</p><p> <b>Time: </b> {finisht}</p>
                </div>
                <div className="markdown"><ReactMarkdown>{item.description}</ReactMarkdown></div>
                </div>
                )
            })
          }
        </div>
      </div>
    )
  }
}

export default Event