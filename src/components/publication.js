import {Component} from 'react';

var test = [
  {
    "_id":0,
    "author": "Zhipeng Wu,Heng Zhang,Yingjie Wang,Teng Wang,Robert Wang",
    "year": "2020",
    "title": "A Deep Learning Based Method for Local Subsidence Detection and InSAR Phase Unwrapping: Application to Mining Deformation Monitoring",
    "type": "conference",
    "journal": null,
    "publisher": "IEEE",
    "booktitle": "IGARSS 2020 - 2020 IEEE International Geoscience and Remote Sensing Symposium",
    "organization": null,
    "howpublished": null,
    "volume": null,
    "pages": "20-23",

    "edition": null,
    "address": null,
    "annote": null,
    "chapter": null,
    "crossref": null,
    "editor": null,
    "institution": null,
    "key": null,
    "month": null,
    "note": null,
    "number": null,
    "school": null,
    "series": null,
  },
  {
    "_id":1,
    "author": "Erika",
    "year": "2017",
    "title": "Cloud-Trust—a Security Assessment Model for Infrastructure as a Service (IaaS) Clouds",
    "type": "journal",
    "journal": "IEEE Transactions on Cloud Computing",
    "publisher": "IEEE",
    "organization": null,
    "howpublished": null,
    "volume": "5",
    "pages": "523 - 536",
    "issue":"3",

    "edition": null,
    "address": null,
    "annote": null,
    "booktitle": null,
    "chapter": null,
    "crossref": null,
    "editor": null,
    "institution": null,
    "key": null,
    "month": null,
    "note": null,
    "number": null,
    "school": null,
    "series": null,
  },
  {
    "_id":2,
    "author": "Aman Khalid",
    "year": "2018",
    "title": "Single Page Applications with reactjs",
    "type": "article",
    "journal": null,
    "publisher": null,
    "organization": "Hackernoon",
    "howpublished": "https://medium.com/hackernoon/creating-awesome-spas-with-react-66b4e2043621",
    "volume": null,
    "pages": null,

    "edition": null,
    "address": null,
    "annote": null,
    "booktitle": null,
    "chapter": null,
    "crossref": null,
    "editor": null,
    "institution": null,
    "key": null,
    "month": null,
    "note": null,
    "number": null,
    "school": null,
    "series": null,
  },
  {
    "_id":3,
    "author": "Damien Mecheri",
    "year": "2018",
    "title": "Dark Souls: Beyond",
    "type": "book",
    "journal": null,
    "publisher": null,
    "organization": "Pearson",
    "howpublished": null,
    "volume": null,
    "pages": null,

    "edition": null,
    "address": null,
    "annote": null,
    "booktitle": null,
    "chapter": null,
    "crossref": null,
    "editor": null,
    "institution": null,
    "key": null,
    "month": null,
    "note": null,
    "number": null,
    "school": null,
    "series": null,
  }
]
function formatName(name){
	
  var names = name.split(',')
  var words = ''
  for (var n in names){
   words = names[n].split(' ')
   names[n] = words[0][0]+'. '+words[words.length - 1]
  }
  
  return names.join(', ')
}
function formatPublication(object){
  var types = ["journal","article","book","conference"]
  var fields = [['publisher','journal','pages'],['organization','howpublished'],['organization'],['publisher','booktitle','pages']]
  var formatted=[]
  //console.log(object)
  for (var o in object){
    
    var publication = object[o]
    var sting = []

    //Create array based on type
    if (types.includes(publication["type"])){
      sting.push(formatName(publication["author"]),publication["year"],publication["title"])
      var type = types.indexOf(publication["type"])
      var details = fields[type]
      details.forEach(function (d){
          sting.push(publication[d])
      });
    }
    formatted.push(sting)
  }
  return formatted
}

class Entry extends Component{
  constructor(props){
    super(props)
  }
  render(){
    
    var p = this.props.item
    return (
    <p className="publication-item">{p[0]+' ('+p[1]+'), '}<b>{p[2]}</b>{', '+p.slice(3, p.length).join(', ')}</p>
    )
  }
}

class Publication extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const items = formatPublication(test)
    return(
      <div className="publication-container">
        <h1>Publications</h1>
        {items.map(item => (
          <Entry key={Math.floor(Math.random() * 4000)} item={item}/>
        ))}
      </div>
    )
  }
}

export default Publication;