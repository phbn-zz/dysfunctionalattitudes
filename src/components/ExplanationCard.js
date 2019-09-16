import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { Descriptions } from 'TextMaterial';

class ExplanationCard extends Component {
  render() {
    return (
      <Container>
        <HeaderText>Header</HeaderText>
        <StyledText>{Descriptions[this.props.CategorySelected]}</StyledText>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  width: 400px;
  height: 400px;
  background-color: grey;
`;

const HeaderText = styled.p``;

const StyledText = styled.p``;

const mapStateToProps = state => {
  return {
    CategorySelected: state.CategorySelected
  };
};

export default connect(mapStateToProps)(ExplanationCard);
