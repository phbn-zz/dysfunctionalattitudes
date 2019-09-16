import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resolveAnswer } from 'actions/index';

class QuestionCard extends React.Component {
  submitAnswer = (e, score) => {
    e.preventDefault();
    const AnswerObject = {
      id: this.props.id,
      Question: this.props.Question,
      Score: score,
      Category: this.props.Category,
      Answered: true
    };
    this.props.dispatch(resolveAnswer(AnswerObject));
  };

  render() {
    return (
      <Card
        opacity={this.props.opacity}
        zIndex={this.props.zIndex}
        scale={this.props.scale}
        bottom={this.props.bottom}
      >
        <QuestionText>{this.props.Question}</QuestionText>
        <ScoreButtonDiv>
          <ScoreButton onClick={e => this.submitAnswer(e, 4)} color={'#ff0000'}>
            Disagree
          </ScoreButton>
          <ScoreButton onClick={e => this.submitAnswer(e, 3)} color={'#EE9A00'}>
            Slightly Disagree
          </ScoreButton>
          <ScoreButton onClick={e => this.submitAnswer(e, 2)} color={'#ffdd05'}>
            Neutral
          </ScoreButton>
          <ScoreButton onClick={e => this.submitAnswer(e, 1)} color={'#00ab66'}>
            Slightly Agree
          </ScoreButton>
          <ScoreButton onClick={e => this.submitAnswer(e, 0)} color={'#33a532'}>
            Agree
          </ScoreButton>
        </ScoreButtonDiv>
      </Card>
    );
  }
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: #333;
  margin-top: 5vh;
  position: absolute;
  width: 750px;
  height: 300px;
  border-radius: 30px;

  /* Rendering multiple cards properly to stack */
  opacity: ${props => props.opacity || 1};
  transform: scale(${props => props.scale || 1});
  z-index: ${props => props.zIndex || 3};
  ${props => `bottom: ${props.bottom}px`};
`;

const QuestionText = styled.p`
  line-height: 1.5em;
  height: 3em; /* height is 2x line-height, so two lines will display */
  overflow: hidden;
  padding: 10px;
  color: #f8f8f8;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  margin: 0 0 24px;
  text-align: center;
`;

const ScoreButtonDiv = styled.div`
  flex-direction: row;
`;

const ScoreButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  width: 100px;
  height: 100px;
  text-align: center;
  margin: 20px;
  font-weight: bold;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;

  :hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

export default connect()(QuestionCard);
