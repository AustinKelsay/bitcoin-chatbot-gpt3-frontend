import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chatbot from './Chatbot';
import ReactLoading from 'react-loading';
import './App.css';

function App() {
  const [botStatus, setBotStatus] = useState('Offline');
  
  useEffect(() => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    axios.get("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/", {headers})
    .then(response => {
        setBotStatus(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[]);
 
return (
    <div className='App'>
        <header className='header'>
            <h1>Bitcoin Chatbot</h1>
            Status:
            <span style={botStatus === 'Offline' ? {color: "red"} : {color: "green"}}>{botStatus}</span>
            <div className="intro">
                <p>Bitcoin Chatbot is a question & answer AI bot powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge</p>
                <section className="header-section">
                <div className="content__item">
					<button className="button button--pandora"><span>code</span></button>
				</div>
                <div className="content__item">
					<button className="button button--pandora"><span>dataset</span></button>
				</div>
                </section>
            </div>
        </header>
        <Chatbot />
    </div>
    )
}

export default App;
