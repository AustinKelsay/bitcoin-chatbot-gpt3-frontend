import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';
import media from './utils/ComponentBreakpoints'
import axios from 'axios';
import Chatbot from './components/Chatbot';
import ArticleSuggestion from './components/ArticleSuggestion';
import './index.css';

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
    <AppContainer>
        <Header>
            <HeaderTitle>Bitcoin Chatbot</HeaderTitle>
            Status:
            <span style={botStatus === 'Offline' ? {color: "red", textDecoration: "underline"} : {color: "green", textDecoration: "underline"}}>{botStatus}</span>
            <HeaderBody>
                <p>Bitcoin Chatbot is a question & answer AI bot powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge</p>
                <HeaderSection>
                    <div className="content__item">
                        <a href="https://github.com/AustinKelsay/bitcoin-chatbot-gpt3" target="_blank" rel="noreferrer"><button className="button button--pandora"><span>code</span></button></a>
                    </div>
                    <div className="content__item">
                        <a href="https://github.com/AustinKelsay/bitcoin-chatbot-gpt3/tree/main/datasets" target="_blank" rel="noreferrer"><button className="button button--pandora"><span>dataset</span></button></a>
                    </div>
                </HeaderSection>
            </HeaderBody>
        </Header>
        <Chatbot />
        <ArticleSuggestion />
    </AppContainer>
    )
}

export default App;

const AppContainer = Styled.div`
    margin: 0% auto;
    text-align: center;
    overflow: false;
`;

const Header = Styled.header`
    margin: 0% auto;
    margin-bottom: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px solid #F2A900;
    border-radius: 10px;
    padding-bottom: 0.5%;
    ${media.phone`
        width: 98%;
    `}
    ${media.tablet`
        width: 95%;
    `}
    ${media.laptop`
        width: 90%;
    `}
    ${media.desktop`
        width: 80%;
    `}
    ${media.widescreen`
        width: 70%;
    `}
`;

const HeaderBody = Styled.div`
    width: 80%;
    margin: 1% auto;
    border-top: 2px solid #404E5C;
    margin-bottom: 0%;
`;

const HeaderSection = Styled.div`
    width: 70%;
    margin: 0% auto;
    display: flex;
    justify-content: space-around;
`;

const HeaderTitle = Styled.h1`
    margin-top: 0.5%;
    margin-bottom: 2%;
`;