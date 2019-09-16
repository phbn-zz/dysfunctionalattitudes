import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { Descriptions } from 'TextMaterial';

class ExplanationCard extends Component {
  render() {
    return (
      <Container>
        <Header2Text>{this.props.CategorySelected}</Header2Text>
        <StyledText>{Descriptions[this.props.CategorySelected]}</StyledText>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  margin-top: 10vh;
  text-align: left;
  width: 400px;
  height: 400px;
  background-color: grey;
  flex-direction: column;
`;

const Header2Text = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 800;
  line-height: 36px;
  margin: 24px 0 24px;
  text-align: center;
`;

const StyledText = styled.p`
  padding: 10px;
  color: #f8f8f8;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  margin: 0 0 24px;
`;

const mapStateToProps = state => {
  return {
    CategorySelected: state.CategorySelected
  };
};

export default connect(mapStateToProps)(ExplanationCard);
