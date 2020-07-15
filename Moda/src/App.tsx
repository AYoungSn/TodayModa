/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';

interface IContainerProps {
  theme?: ITheme;
}

const Container = styled.View`
flex:1;
justify-content: center;
align-items: center;
background-color: ${(props:IContainerProps) => props.theme && props.theme.color.black};
`;

const MainText = styled.Text`
font-size: 30;
text-align: center;
margin: 10px;
color: #000000;
`;

interface Props {}
interface State {}

export default class App extends React.Component<Props,State>{
  render(){
    return (
      <ThemeProvider theme={Theme}>
        <Container >
          <MainText>Today's мода</MainText>
        </Container>
      </ThemeProvider>
    );
  }
}
