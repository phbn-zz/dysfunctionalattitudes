import styled from 'styled-components';

export const Header = styled.div`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HeaderText = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-color: #282c34;
  margin-top: 10vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;
  justify-items: center;
  justify-content: center;
  margin: 24px 0;
  padding-bottom: 24px;
`;
