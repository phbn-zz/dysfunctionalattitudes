import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import main from 'screens/main';
import results from 'screens/results';
import { randomizeQuestionArray } from 'actions';
import { QuestionsArray } from 'TextMaterial/QuestionsDAS';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(randomizeQuestionArray(QuestionsArray));
  }

  render() {
    if (this.props.Questions.length !== 35) {
      return <div>Loading</div>;
    }
    return (
      <Router>
        <div>
          <Route path="/" component={main} exact />
          <Route path="/results" component={results}></Route>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    Questions: state.Questions
  };
};

export default connect(mapStateToProps)(App);
