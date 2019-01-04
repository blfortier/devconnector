import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    }
  }

  // _handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   }, () => {
  //     if (this.state.query && this.state.query.length > 1) {
  //       this.setState({ profile,: .user.name });
  //     }
  //   });
  // };


  render() {
    const { profile } = this.props;
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

Search.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});


export default connect(mapStateToProps)(Search); 