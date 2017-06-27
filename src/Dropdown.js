import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <div>
        <select className="dropdown_menu">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <hr />
      </div>
    );
  }
}

export default Dropdown;
