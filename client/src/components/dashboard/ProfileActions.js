import React from 'react'
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="text-center">
      <div className="btn-group mb-4 text-center" role="group">
        <Link to="/edit-profile" href="edit-profile.html" className="btn btn-light">
          <i className="fas fa-user-circle mr-1 color"></i> Edit Profile</Link>
        <Link to="/add-experience" className="btn btn-light">
          <i className="fab fa-black-tie mr-1 color"></i>
          Add Experience</Link>
        <Link to="/add-education" className="btn btn-light">
          <i className="fas fa-graduation-cap color mr-1"></i>
          Add Education</Link>
      </div>
    </div>
  )
}

export default ProfileActions;