import React, {useEffect, useState} from 'react';
import axios from 'axios'

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
  'margin-top': '2%'
}

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
        id: 1,
        text: 'Hello World!',
        name: "Bot"
    },
    {
        id: 2,
        text: "I'm Bitcoin Chatbot",
        name: "Bot"
    },
    {
        id: 3,
        text: "What can I answer for you?",
        name: "Bot"
    }])

  const postSteps = (chat) => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {question: chat}, {headers})
    .then(response => {
      setTimeout(() => {
        return response.data
      }, 3000)
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
    <div>
      {messages.map((message) => {
        return(
        <div>
          <h3>{message.name}</h3>
          <h4>{message.text}</h4>
        </div>
        )
      })}
      <form>

      </form>
    </div>
  )
}

export default Chatbot;