import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListRemind from './ListRemind.js';
import CreateForm from './CreateForm.js';
import EditForm from './EditForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = { right: "My reminder book ..." };
  }

  handleCreate() {
    this.setState ({ 
      right: <CreateForm /> 
    });
  }

  getEditData(oneArrayReminder) {
    this.setState ({ 
      right: <EditForm arrayData={oneArrayReminder} /> 
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header jumbotron">
          <h2>
            Welcome to Reminder App
            <img src={logo} className="App-logo" alt="logo" />
          </h2>
        </div>
        <div className="content">
          <div className="col-sm-6 wrapper-left">
            <div className="container border">
              <div className="text-center">
                <b>Reminder</b>
                <i className="fa fa-plus-square-o fa-1_5x pull-right" aria-hidden="true" onClick={() => this.handleCreate()}></i>
              </div>
              <hr />
              <ListRemind callBackDataEdit={(arrayOneReminder) => this.getEditData(arrayOneReminder)}/>
            </div>
          </div>
          <div className="col-sm-6 wrapper-right">
            <div className="container border">
              {this.state.right}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
