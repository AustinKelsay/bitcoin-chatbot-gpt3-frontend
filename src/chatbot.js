import React, {useEffect, useState, useRef} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import './Chatbot.css'

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

const Chatbot = () => {
  const inputRef = useRef();
  const bottomListRef = useRef()
  const [newMessage, setNewMessage] = useState('')
  const [id, setId] = useState(4)
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

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.name === 'User') {
      const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
      axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {question: newMessage}, {headers})
      .then(response => {
        setTimeout(() => {
          console.log(messages)
          setMessages([...messages, {
            id: uuidv4(),
            text: response.data,
            name: "Bot"
          }])
        }, 3000)
      })
      .catch(error => {
          console.log(error)
      })
    }
  }, [messages])

  const handleOnSubmit = e => {
    e.preventDefault();
    // create user message from prompt
    setId(id + 1)
    const userMessage = {
      id: id,
      text: newMessage,
      name: "User"
    }
    // add user message to messages
    setMessages([...messages, userMessage])
  }

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  const scrollComponentStyles = {
    marginRight: '10%'
  }

  return (
    <div className="chat-window">
        <InfiniteScroll
          dataLength={messages.length} //This is important field to render the next data
          loader={<h4>Loading...</h4>}
          height={400}
          style={scrollComponentStyles}
        >
          <ul className="message-list">
            {messages.map((message) => {
              return(
                <li key={uuidv4()} className="chat-text">
                  <h3>{message.name}</h3>
                  <h4>{message.text}</h4>
                </li>
              )
            })}
            <div ref={bottomListRef} />
          </ul>
        </InfiniteScroll>
      <form
        onSubmit={handleOnSubmit}
        className="chat-form"
        disabled={!newMessage}
      >
        <section className='chat-button-container'>
          <input 
            type='text'
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Type your message here..."
            className='chat-input'
            ref={inputRef}
            />
          <div
            class="content__item"
            >
            <button
              type="submit"
              className="button button--pandora">
                <span>
                  send
                </span>
            </button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Chatbot;