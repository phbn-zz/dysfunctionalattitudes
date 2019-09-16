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
        <StyledText>{this.props.Question}</StyledText>
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

const StyledText = styled.p`
  text-align: center;
  margin: 30px;
  height: 100px;
`;

const ScoreButtonDiv = styled.div`
  flex-direction: row;
`;

const ScoreButton = styled.button`
  background: ${props => props.color || 'palevioletred'};
  color: #000;
  margin: 0 5px;
  padding: 8px 14px;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

export default connect()(QuestionCard);
