import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questionsActions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  };

  handleChange = (event, optionIndex)=> {
    const text = event.target.value;

    this.setState(previousState=> {
      return optionIndex === 1
        ? { ...previousState, optionOne: text }
        : { ...previousState, optionTwo: text };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(previousState=> {
      return {
        ...previousState,
        toHome: true
      };
    });
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;
    const { authedUser, users } = this.props;
    console.log(authedUser);
    console.log(users);

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">New Question</h3>
        <div className="question">
          <img
            src={`/${users[authedUser].avatarURL}`}
            alt={`Avatar of ${authedUser}`}
            className="avatar"
          />
          <span>Would You Rather...</span>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="option">
              <textarea
                value={optionOne}
                onChange={event => this.handleChange(event, 1)}
              />
              <span className="hint">Option One</span>
            </div>
            <div className="option opt-offset">
              <textarea
                value={optionTwo}
                onChange={event => this.handleChange(event, 2)}
              />
              <span className="hint">Option Two</span>
            </div>
            <button
              className="btn"
              type="submit"
              disabled={optionOne === "" || optionTwo === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser,
    users: state.users
  };
};

export default connect(mapStateToProps)(NewQuestion);
