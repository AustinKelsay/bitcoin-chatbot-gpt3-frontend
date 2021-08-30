import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
  margin: '1% auto',
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const styles = {
  'margin': '1% auto',
  'marginBottom': '0%',
  'marginTop': '10%'
}

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
      style={styles}
      width={'90%'}
      steps={steps} 
    />
  </ThemeProvider>
);

export default ThemedExample;