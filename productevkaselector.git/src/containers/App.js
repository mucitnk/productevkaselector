import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";

  class App extends Component {
  constructor() {
    super()
    this.state = {
      pros: [],
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  componentDidMount() {
    fetch('https://powerful-peak-90430.herokuapp.com/prosgett')
    // fetch('http://localhost:3000/prosgett')
    .then(response=> response.json())
    .then(pros => this.setState({pros: pros}))
    .then(console.log(this.pros));
  }
  render(){
    const {pros, searchfield } = this.state;
    const filteredPros = pros.filter( pro =>{
      return pro.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !pros.length ?
      <h1>Loading</h1>:
      (
        <div className='tc bg-light-green'>
            <h1 className="f1">Product List</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList pros={filteredPros}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
  };
}

export default App;