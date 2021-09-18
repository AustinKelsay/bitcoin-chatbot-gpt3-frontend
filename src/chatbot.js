import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios'
import './App.css'

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
  const inputRef = useRef();
  const bottomListRef = useRef()
  const [newMessage, setNewMessage] = useState('')
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
    }
  ])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnSubmit = e => {
    e.preventDefault();
    // Post user message
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    };
    axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {question: newMessage}, {headers})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    // Clear input field
    setNewMessage('');
    // Scroll down to the bottom of the list
    bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  return (
    <div>
      <ul>
        {messages.map((message) => {
          return(
          <li>
            <h3>{message.name}</h3>
            <h4>{message.text}</h4>
          </li>
          )
        })}
        <div ref={bottomListRef} />
      </ul>
      <form
        onSubmit={handleOnSubmit}
      >
        <input 
          type='text'
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message here..."
          className='chat-input'
        />
        <div class="content__item">
          <button
            type="submit"
            disabled={!newMessage}
            className="button button--pandora">
              <span>
                send
              </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chatbot;