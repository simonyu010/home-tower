import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

class App extends Component {
  state = {};

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
      .then(rsp => rsp.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
      })
  }

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featureHouses = this.allHouses[randomIndex];
      this.setState({ featureHouses });
    };
  }
  render() {
    return (
      <div className='container'>
        <Header subtitle="Provide Houses all over the world" />
        <FeaturedHouse house={this.state.featuredHouse}/>
      </div>
    );
  }
}

export default App;
