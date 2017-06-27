import React, { Component } from 'react';

class CreateForm extends Component {
  constructor() {
    super();
    let id, lengthArray;
    let reminderListArray = [];

    //Get Data
    if (localStorage.reminderListArray === undefined || localStorage.reminderListArray === "") {
      id = 1;
      localStorage.setItem("reminderListArray", reminderListArray);
    } else {
      reminderListArray = JSON.parse(localStorage.reminderListArray);
      lengthArray = reminderListArray.length;
      id = reminderListArray[lengthArray - 1].id + 1
    }

    //Initial State
    this.state = {
      id: id,
      title: "",
      description: "",
      date: "",
      status: "incomplete"
    };
  }

  handleChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  //Create Reminder
  setReminder() {
    let reminderListArray;
    let reminderListObject = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      status: this.state.status
    };
    reminderListArray = [];
    if (localStorage.reminderListArray === undefined || localStorage.reminderListArray === "") {
      localStorage.setItem("reminderListArray", reminderListArray);
    } else {
      reminderListArray = JSON.parse(localStorage.reminderListArray);
    }
    reminderListArray.push(reminderListObject);
    localStorage.reminderListArray = JSON.stringify(reminderListArray);
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="task_id">Id:</label>
            <input type="text" className="form-control" id="task_id" name="task_id" onChange={(e) => this.handleChangeId(e)} value={this.state.id} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="date_now">Date:</label>
            <input type="date" className="form-control" id="date_now" name="date_now" onChange={(e) => this.handleChangeDate(e)} value={this.state.date} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title" onChange={(e) => this.handleChangeTitle(e)} value={this.state.title} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea rows="4" className="form-control" id="description" name="description" placeholder="Enter Description" onChange={(e) => this.handleChangeDescription(e)} value={this.state.description}></textarea>
          </div>
          <div className="form-group">
            <div className="pull-right">
              <input type="button" className="btn btn-primary" id="submitBtn" value="Save" onClick={() => this.setReminder()} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateForm;
