import {Component} from 'react';

class Entry extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const item = this.props.item
    return (
      <p className="publication-item">{item.author}</p>
    )
  }
}

class Publication extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const items = this.props.items
    return(
      <div className="publication-container">
        {items.map(item => (
          <Entry key={item._id} item={item}/>
        ))}
      </div>
    )
  }
}

export default Publication;