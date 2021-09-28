import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactLoading from 'react-loading';
import { v4 as uuidv4 } from 'uuid';
import './Chatbot.css'

const MessageList = ({messages, bottomListRef, typing}) => {
    const scrollComponentStyles = {
        marginRight: '10%'
    }

    return (
        <InfiniteScroll
          dataLength={messages.length} //This is important field to render the next data
          loader={<h4>Loading...</h4>}
          height={400}
          style={scrollComponentStyles}
        >
          <ul className="message-list">
            {messages.map((message) => {
              return(
                <li key={uuidv4()} className={message.name === "User" ? "chat-message-user" : "chat-message"}>
                  <h3>{message.name}</h3>
                  <p className='chat-text'>{message.text}</p>
                </li>
              )
            })}
          </ul>
          <div className='chat-bubbles'>
              {typing === true ? <ReactLoading type={'bubbles'} color={'#f2a900'} height={'7%'} width={'7%'} /> : null}
          </div>
          <div ref={bottomListRef} />
        </InfiniteScroll>
    )
}

export default MessageList;