import React from "react";
import { connect } from "react-redux";

const Leaderboard = props => {
  const { users } = props;
  const userArray = Object.keys(users).map(key => users[key]);
  // sort from most to least answered
  const sortedUserArray = userArray.sort((a, b) => {
    const sumA = Object.keys(a.answers).length + a.questions.length;
    const sumB = Object.keys(b.answers).length + b.questions.length;
    return sumB - sumA;
  });

  return (
    <div>
      <h3 className="center">Leaderboard</h3>
      <ul className="user-list">
        {sortedUserArray.map(user => (
          <li key={user.id}>
            <div className="user">
              <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className="avatar"
              />
              <span>{user.name}</span>
              <div className="user-stats">
                <p>Asked: {user.questions.length}</p>
                <p>Answered: {Object.keys(user.answers).length}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Leaderboard);
