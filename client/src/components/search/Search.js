import React, { Component } from 'react';

//const { SECRET_OR_KEY } = this.process.env;
//const { MONGO_URI } = process.env;

class Search extends Component {
  state = {
    query: '',
    data: []
  }
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <form className="form-inline mr-auto">
          <div className="md-form my-0">
            <input
              className="form-control"
              type="text"
              placeholder="Look up a dev!"
              aria-label="Search"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <i className="fas fa-search text-wheat ml-3" aria-hidden="true"></i>
            <p>{this.state.query}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default Search; 