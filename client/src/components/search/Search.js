import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from '../profile/ProfileHeader';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileCreds from '../profile/ProfileCreds';
import ProfileGithub from '../profile/ProfileGithub';
import { getProfileByHandle } from '../../actions/profileActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      errors: {}
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    console.log("You searched for the dev " + this.state.search);
    this.setState({ value: e.target.value });
    e.preventDefault();
  }


  render() {
    const { profile } = this.props;
    let profileContent;
    const { errors } = this.state;
    // const useName = profile.user.name.trim().split(' ')[0];

    // if (this.state.search == profile.user.name) {
    //   console.log("ok");
    // }
    // else {
    //   console.log("no");
    // }




    // if (this.state.search !== useName) {
    //   profileContent = <div>No profile found...</div>;
    // } else {
    //   profileContent = (
    //     <div>
    //       <div className="row">
    //         <div className="col-md-6">
    //           <Link to="/search" className="btn btn-light mb-3 float-left">
    //             Back To Search
    //           </Link>
    //         </div>
    //         <div className="col-md-6" />
    //       </div>
    //       <ProfileHeader profile={profile} />
    //       <ProfileAbout profile={profile} />
    //       <ProfileCreds
    //         education={profile.education}
    //         experience={profile.experience}
    //       />
    //       {profile.githubusername ? (
    //         <ProfileGithub username={profile.githubusername} />
    //       ) : null}
    //     </div>
    //   );
    // }

    return (
      <div>
        <div className="container" style={{ height: "100vh" }}>
          <div className="md-form my-0">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control"
                type="text"
                value={this.state.search}
                placeholder="Look up a dev!"
                aria-label="Search"
                onChange={this.updateSearch}
                error={errors.search}
              />
            </form>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">{profileContent}</div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

Search.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});


export default connect(mapStateToProps, { getProfileByHandle })(Search);
