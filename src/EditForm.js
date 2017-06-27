import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);

    //Initial State
    this.state = {
      id:           this.props.arrayData.id,
      title:        this.props.arrayData.title,
      description:  this.props.arrayData.description,
      date:         this.props.arrayData.date,
      status:       this.props.arrayData.status
    };
    console.log(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
	  if (nextProps.id !== this.props.arrayData.id) {
      this.setState({ 
        id:           nextProps.arrayData.id,
        title:        nextProps.arrayData.title,
        description:  nextProps.arrayData.description,
        date:         nextProps.arrayData.date,
        status:       nextProps.arrayData.status
      })
	  }
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
    let reminderListArray = JSON.parse(localStorage.reminderListArray);
    for (let i = 0; i < reminderListArray.length; i++) {
      if (reminderListArray[i].id === this.state.id) {
        reminderListArray[i].title        = this.state.title;
        reminderListArray[i].description  = this.state.description;
        reminderListArray[i].date         = this.state.date;
        reminderListArray[i].status       = this.state.status;
      }
    }
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
              <input type="button" className="btn btn-primary" id="submitBtn" value="Update" onClick={() => this.setReminder()} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
