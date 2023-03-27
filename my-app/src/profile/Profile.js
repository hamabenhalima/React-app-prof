import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({fullName, bio, profession, children, handleName}) => {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 style={{ color: "red" }}>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
      {children}
      <button onClick={() => handleName(fullName)}>Click Me!</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "MOHAMED BEN HALIMA",
  bio: "No bio provided",
  profession: "web developr",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
