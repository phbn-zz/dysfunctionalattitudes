import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import ResultsGraph from 'components/ResultsGraph';
import ExplanationCard from 'components/ExplanationCard';

import {
  Header,
  Container,
  ResultContainer,
  Footer,
  Grid
} from 'components/styles';

class main extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Header>Your values reveal your inner beliefs, o wise one!</Header>
        <ResultContainer>
          <Grid>
            <ResultsGraph />
            <ExplanationCard />
          </Grid>
        </ResultContainer>
        <Footer>
          <p>
            {
              this.props.Questions.filter(question => {
                return question.Answered === true;
              }).length
            }
            / {this.props.Questions.length}
          </p>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    Questions: state.Questions
  };
};

export default connect(mapStateToProps)(main);
