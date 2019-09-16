import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  Header,
  HeaderText,
  Container,
  CardContainer,
  Footer
} from 'components/styles';

import QuestionCard from 'components/QuestionCard';

class main extends React.Component {
  render() {
    if (
      this.props.Questions.filter(question => question.Answered === false)
        .length === 0
    ) {
      return <Redirect to="/results" />;
    }
    return (
      <Container>
        <Header>
          <HeaderText>
            Welcome, Traveller. What is your attitude to life?
          </HeaderText>
        </Header>
        <CardContainer>
          {this.props.Questions.filter(question => {
            return question.Answered === false;
          })
            .slice(0, 1)
            .map(question => {
              return (
                <QuestionCard
                  key={question.id}
                  id={question.id}
                  Category={question.Category}
                  Question={question.Question}
                  opacity={1}
                  zIndex={3}
                  scale={1}
                  bottom={1}
                />
              );
            })}
          {this.props.Questions.filter(question => {
            return question.Answered === false;
          })
            .slice(1, 2)
            .map(question => {
              return (
                <QuestionCard
                  key={question.id}
                  id={question.id}
                  Category={question.Category}
                  Question={question.Question}
                  opacity={0.9}
                  zIndex={2}
                  scale={0.9}
                  bottom={35}
                />
              );
            })}
          {this.props.Questions.filter(question => {
            return question.Answered === false;
          })
            .slice(2, 3)
            .map(question => {
              return (
                <QuestionCard
                  key={question.id}
                  id={question.id}
                  Category={question.Category}
                  Question={question.Question}
                  opacity={0.8}
                  zIndex={1}
                  scale={0.8}
                  bottom={70}
                />
              );
            })}
        </CardContainer>
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
