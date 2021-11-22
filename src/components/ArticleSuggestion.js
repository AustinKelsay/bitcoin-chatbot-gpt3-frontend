import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Styled from 'styled-components';
import ReactLoading from 'react-loading';
import { v4 as uuidv4 } from 'uuid';
import './Chatbot.css'

const ArticleSuggestion = () => {

    const article = {
        link: 'https://nakamotoinstitute.org/bitcoin/',
        title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
        text: "To compensate for increasing hardware speed and varying interest in running nodes over time, the proof-of-work difficulty is determined by a moving average targeting an average number of blocks per hour. If they're generated too fast, the difficulty increases."
    }

    return (
        <ArticleContainer>
            <Article>
                <h3>{article.title}</h3>
                <h4>{article.text}</h4>
                <button><a href={article.link} target="_blank" rel="noreferrer">Read more</a></button>
            </Article>
        </ArticleContainer>
    )
}

export default ArticleSuggestion;

const ArticleContainer = Styled.div`
    margin: 1% auto;
    border: 12px solid #F2A900;
    border-radius: 25px;
    background: #4F6272;
    padding: 0.5%;
    padding-left: 0%;
    padding-right: 0%;
    width: 70%;

`;

const Article = Styled.div`
    display: flex;
    margin: 1% auto;
    padding: 1%;
`;

const ChatBubbles = Styled.div`
    display: flex;
    padding-left: 13%;
`;

const ChatMessage = Styled.div`
    margin-top: 4%;
    padding-bottom: 2%;
    margin-bottom: 0;
    text-align: start;
`;

const ChatUser = Styled.div`
    margin-top: 0.5%;
    margin-bottom: 0%;
    text-align: start;
`;