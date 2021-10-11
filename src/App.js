import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [botStatus, setBotStatus] = useState('Offline');
  
  useEffect(() => {
    axios.get("https://bitcoin-chatbot-gpt3.herokuapp.com/")
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
                <a href="https://github.com/AustinKelsay/bitcoin-chatbot-gpt3" target="_blank" rel="noreferrer"><button className="button button--pandora"><span>code</span></button></a>
				</div>
                <div className="content__item">
                <a href="https://github.com/AustinKelsay/bitcoin-chatbot-gpt3/tree/main/datasets" target="_blank" rel="noreferrer"><button className="button button--pandora"><span>dataset</span></button></a>
				</div>
                </section>
            </div>
        </header>
        <Chatbot />
    </div>
    )
}

export default App;
