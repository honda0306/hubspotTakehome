import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';


class App extends Component {
  state = {
    attendees: [{}],
  }

  componentDidMount() {
    axios
      .get('https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=9af17dc80c11bcf5da45362c4e27')
        .then((res) => {
          const attendees = res.data.partners;
          this.setState({ attendees: attendees });
        })
        .catch(error => {
          console.log(error);
        });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ (props) => { return(<ListView {...props} attendees={this.state.attendees} />)} } />
      </div>
    );
  }
}

export default App;
