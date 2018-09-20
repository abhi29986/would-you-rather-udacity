import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = props => {
  const { authedUser, users } = props;

  const avatar = authedUser ? users[authedUser].avatarURL : "placeholder.jpg";
  const loggedIn = authedUser !== null;

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" exact activeClassName="active">
            Add Question
          </NavLink>
        </li>
        {loggedIn ? (
          <li>
            <NavLink to="/login" exact activeClassName="active">
              <div className="nav-user">
                Logout
                <img
                  src={avatar}
                  alt={`Avatar of ${authedUser}`}
                  className="nav-avatar"
                />
                {authedUser}
              </div>
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login" exact activeClassName="active">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser,
    users: state.users
  };
};

export default connect(mapStateToProps)(Nav);
