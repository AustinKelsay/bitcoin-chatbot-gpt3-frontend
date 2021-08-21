import React, {useEffect, useState} from "react"
import axios from "axios"
import { ChatFeed, Message } from 'react-chat-ui'
import './index.css'

const App = () => {
    const [botStatus, setBotStatus] = useState("Bot offline")
    const [messages, setMessages] = useState(["Hey fuckface"])
    const [isTyping, setIsTyping] = useState(false)
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };


    useEffect(() => {
        axios.get("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/", {headers})
        .then(response => {
            setBotStatus(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    })
    return (
        <div className='App'>
            <header className='header'>
                <h1>Bitcoin Chatbot</h1>
                Status:
                <span>{botStatus}</span>
            </header>
            <div className='body'>
            <ChatFeed
                messages={messages} // Array: list of message objects
                isTyping={isTyping} // Boolean: is the recipient typing
                hasInputField={false} // Boolean: use our input, or use your own
                showSenderName // show the name of the user who sent the message
                bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
                // JSON: Custom bubble styles
                bubbleStyles={
                    {
                    text: {
                        fontSize: 30
                    },
                    chatbubble: {
                        borderRadius: 70,
                        padding: 40
                    }
                    }
                }
                />
            </div>
        </div>
        )
}

export default App