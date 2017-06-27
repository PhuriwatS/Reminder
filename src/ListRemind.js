import React, { Component } from 'react';

class ListRemind extends Component {
  constructor() {
    super();

    this.state = {
      filter: "all"
    }

    this.setListReminder();
  }

  handleUpdateStatus(id) {
    let reminderListArray = JSON.parse(localStorage.reminderListArray);
    for (let i = 0; i < reminderListArray.length; i++) {
      if (reminderListArray[i].id === id) {
        if (reminderListArray[i].status === "incomplete") {
          reminderListArray[i].status = "complete";
        } else {
          reminderListArray[i].status = "incomplete";
        }
      }
    }
    localStorage.reminderListArray = JSON.stringify(reminderListArray);
    window.location.reload(false);
  }

  handleEdit(id) {
    let reminderListArray = JSON.parse(localStorage.reminderListArray);
    for (let i = 0; i < reminderListArray.length; i++) {
      if (reminderListArray[i].id === id) {
        this.props.callBackDataEdit(reminderListArray[i])
      }
    }
  }

  handleDelete(id) {
    let reminderListArray = JSON.parse(localStorage.reminderListArray);
    for (let i = 0; i < reminderListArray.length; i++) {
      if (reminderListArray[i].id === id) {
        reminderListArray.splice(i, 1);
      }
    }
    localStorage.reminderListArray = JSON.stringify(reminderListArray);
    window.location.reload(false);
  }

  //Create Reminder
  setListReminder() {
    let reminderListArray = [];
    let reminderListArrayShow = [];
    if (localStorage.reminderListArray !== undefined && localStorage.reminderListArray !== "") {
      reminderListArray = JSON.parse(localStorage.reminderListArray);
    }
    if (this.state.filter === "complete" || this.state.filter === "incomplete") {
      for (let i = 0; i < reminderListArray.length; i++) {
        if (reminderListArray[i].status === this.state.filter) {
          reminderListArrayShow.push(reminderListArray[i]);
        }
      }
      reminderListArray = reminderListArrayShow;
    }

    return reminderListArray.map((object, index) => (
      <div key={index}>
        <div>
          <div className="col-sm-8">
            <label><input type="checkbox" onChange={() => this.handleUpdateStatus(object.id)} checked={(object.status === 'complete') ? 'checked' : ''} /> {object.title}</label>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-pencil-square-o fa-1_5x" aria-hidden="true" onClick={() => this.handleEdit(object.id)}></i>
          </div>
          <div className="col-sm-2">
            <i className="fa fa-trash-o fa-1_5x" aria-hidden="true" onClick={() => this.handleDelete(object.id)}></i>
          </div>
        </div>
        <div className="col-sm-12">
          <p>Date: {object.date}</p>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <select className="dropdown_menu" onChange={(e) => this.setState({ filter: e.target.value })}>
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <hr />
        {this.setListReminder()}
      </div>
    );
  }
}

export default ListRemind;
