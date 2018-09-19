import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions";
import Dashboard from "./components/dashboard/Dashboard";
import Leaderboard from "./components/dashboard/Leaderboard";
import Login from "./components/auth/Login";
import Nav from "./components/navigation/Nav";
import NewQuestion from "./components/question/NewQuestion";
import NotFound from "./components/not-found/NotFound";
import QuestionPage from "./components/question/QuestionPage";
import ProtectedRoute from "./utils/ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
            <div>
              <Switch>
                <ProtectedRoute
                  path="/"
                  exact
                  component={Dashboard}
                  loggedIn={loggedIn}
                />
                <ProtectedRoute
                  path="/leaderboard"
                  exact
                  component={Leaderboard}
                  loggedIn={loggedIn}
                />
                <ProtectedRoute
                  path="/add"
                  exact
                  component={NewQuestion}
                  loggedIn={loggedIn}
                />
                <ProtectedRoute
                  path="/questions/:id"
                  exact
                  component={QuestionPage}
                  loggedIn={loggedIn}
                />
                <Route path="/login" exact component={Login} />

                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authedUser !== null
  };
};

export default connect(mapStateToProps)(App);
