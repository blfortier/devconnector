import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    this.props.clearCurrentProfile();
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link role="navigation" className="nav-link" to="/feed">
            Post Feed
        </Link>
          <Link role="navigation" className="nav-link" to="/dashboard">
            Dashboard
        </Link>
          <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
            <img className="rounded-circle" src={user.avatar} alt={user.name} style={{ width: '25px', marginRight: '5px' }} title="You must have a gravatar connected to your email to display an image" />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link role="navigation" className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link role="navigation" className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <nav className="font-2 navbar navbar-expand-sm -4">
        <div className="container">
          <Link role="navigation" className="nav-link" to="/profiles"> Developers
            </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link role="navigation" className="title" to="/">Dev_Finder</Link>
          <div id="mobile-nav">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline mr-auto">
                <div class="md-form my-0">
                  <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                  <i class="fas fa-search text-wheat ml-3" aria-hidden="true"></i>
                </div>
              </form>
            </div>


            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>

    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);