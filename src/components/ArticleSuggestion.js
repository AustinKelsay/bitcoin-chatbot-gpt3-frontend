import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Styled from 'styled-components';
import ReactLoading from 'react-loading';
import { v4 as uuidv4 } from 'uuid';
import './Chatbot.css'

const ArticleSuggestion = () => {

    return (
        <ArticleContainer>
            <h1>Article Suggestion</h1>
            <h1>Coming soon...</h1>
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