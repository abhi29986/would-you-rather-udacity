import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  setAuthedUser,
  clearAuthedUser
} from "../../actions/authedUserActions";

class Login extends Component {
  state = {
    userId: null,
    toHome: false
  };

  handleSelectionChanged = event => {
    const userId = event.target.value;

    this.setState(function(previousState) {
      return {
        ...previousState,
        userId
      };
    });
  };

  handleLogin = event => {
    const { userId } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(userId));

    this.setState(function(previousState) {
      return {
        ...previousState,
        toHome: true
      };
    });
  };

  componentDidMount() {
    this.props.dispatch(clearAuthedUser());
  }

  render() {
    const { userId, toHome } = this.state;
    const { history, users } = this.props;
    const selected = userId ? userId : -1;
    const avatar = userId ? users[userId].avatarURL : "placeholder.jpg";

    if (toHome) {
      const redirect = history.location.state;
      if (redirect != null) {
        return <Redirect to={redirect} push={true} />;
      }
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">SignIn Page</h3>
        <div className="login-box">
          <span>Please select a user and press the login button.</span>
          <div className="user-select">
            <img src={avatar} alt={`Avatar of ${userId}`} className="avatar" />
            <select
              value={selected}
              onChange={event => this.handleSelectionChanged(event)}
            >
              <option value={-1} disabled>
                Select user...
              </option>
              {Object.keys(users).map(function(key) {
                return (
                  <option value={users[key].id} key={key}>
                    {users[key].id}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            className="btn"
            disabled={userId === null}
            onClick={event => this.handleLogin(event)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps)(withRouter(Login));
