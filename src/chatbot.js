import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { v4 as uuidv4 } from 'uuid';

// all available props
const theme = {
  margin: '1% auto',
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#F2A900',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#F2A900',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const styles = {
  'margin': '1% auto',
  'marginBottom': '0%',
  'marginTop': '10%'
}

const ThemedExample = ({steps}) => (
  <ThemeProvider theme={theme}>
    <ChatBot 
      style={styles}
      width={'90%'}
      steps={steps} 
    />
  </ThemeProvider>
);

export default ThemedExample;