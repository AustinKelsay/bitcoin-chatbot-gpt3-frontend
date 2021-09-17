import React from "react"
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const ThemedWidget = ({steps}) => {
    const styles = {
        'margin': '1% auto',
        'margin-top': '2%'
      }

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

    return(
        <ThemeProvider theme={theme}>
            {console.log(steps)}
            <ChatBot 
            style={styles}
            width={'90%'}
            steps={steps} 
            />
        </ThemeProvider>
    )
}
  
export default ThemedWidget;