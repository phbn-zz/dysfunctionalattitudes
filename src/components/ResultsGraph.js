import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
  VictoryBar
} from 'victory';

import { changeCategoryDescription } from 'actions';

class ResultsGraph extends React.Component {
  calculateCategoryScore = category => {
    const CategoryQuestions = this.props.Questions.filter(
      question => question.Category === category
    );

    const score = CategoryQuestions.map(question => {
      return question.Score;
    }).reduce((a, b) => a + b, 0);

    return score;
  };

  render() {
    return (
      <div>
        <VictoryChart
          polar
          animate={{
            duration: 2000,
            easing: 'bounce'
          }}
          theme={VictoryTheme.material}
          domain={{ y: [0, 20] }}
          height={600}
          width={500}
          padding={{ top: 150, bottom: 150 }}
          events={[
            {
              childName: 'all',
              target: 'data',
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      childName: 'SpiderWeb',
                      target: 'data',
                      mutation: props => {
                        this.props.dispatch(
                          changeCategoryDescription(props.datum.x)
                        );
                        return {
                          style: Object.assign({}, props.style, {
                            fill: 'tomato'
                          })
                        };
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      childName: ['SpiderWeb'],
                      mutation: () => {
                        return null;
                      }
                    }
                  ];
                }
              }
            }
          ]}
        >
          <VictoryPolarAxis
            dependentAxis
            style={{ axis: { stroke: 'none' } }}
            tickValues={[0, 10]}
          />
          <VictoryPolarAxis />
          <VictoryBar
            name="SpiderWeb"
            data={[
              {
                x: 'Approval',
                y: this.calculateCategoryScore('Approval')
              },
              { x: 'Love', y: this.calculateCategoryScore('Love') },
              {
                x: 'Achievement',
                y: this.calculateCategoryScore('Achievement')
              },
              {
                x: 'Perfectionism',
                y: this.calculateCategoryScore('Perfectionism')
              },
              {
                x: 'Entitlement',
                y: this.calculateCategoryScore('Entitlement')
              },
              {
                x: 'Omnipotence',
                y: this.calculateCategoryScore('Omnipotence')
              },
              { x: 'Autonomy', y: this.calculateCategoryScore('Autonomy') }
            ]}
            style={{
              data: { fill: '#c43a31' }
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Questions: state.Questions
  };
};

export default connect(mapStateToProps)(ResultsGraph);
