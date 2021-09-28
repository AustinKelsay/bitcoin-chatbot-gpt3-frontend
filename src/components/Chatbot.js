import React, {useEffect, useState, useRef} from 'react';
import MessageList from './MessageList';
import axios from 'axios'
import './Chatbot.css'

const Chatbot = () => {
  const inputRef = useRef();
  const bottomListRef = useRef()
  const [newMessage, setNewMessage] = useState('')
  const [typing, setTyping] = useState(false)
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

  const formatChatLog = () => {
    let chatLog = ''
    messages.map(message => {
      if (message.id > 3) {
        chatLog += `${message.name}: ${message.text}\n`
      }
      return null
    })
    console.log(chatLog)
    return chatLog
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.name === 'User') {
      setTyping(true)
      const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
      axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {question: newMessage, chat_log: formatChatLog()}, {headers})
      .then(response => {
        setTimeout(() => {
          console.log(messages)
          setId(id + 1)
          setMessages([...messages, {
            id: id,
            text: response.data,
            name: "Bot"
          }])
          setTyping(false)
          // Scroll down to the bottom of the list
          bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
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
    setTimeout(() => {
      setMessages([...messages, userMessage])
      // Scroll down to the bottom of the list
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 1000)
    // Clear input field
    setNewMessage('');
  }

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} bottomListRef={bottomListRef} typing={typing} />
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
            className="content__item"
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