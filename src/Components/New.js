import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class New extends Component {
  constructor(){
    super();
    this.state = {
       articles : [],
       loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=64307d3b701f4c2e93df99fd09466440";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2><br />
          <div className="row" >
          {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
          </div>
      </div>
    )
  }
}

export default New