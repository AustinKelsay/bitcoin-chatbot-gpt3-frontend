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
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleText>"{article.text}"</ArticleText>
                <ArticleAnchor href={article.link} target="_blank" rel="noreferrer">read</ArticleAnchor>
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
    width: 80%;
`;

const Article = Styled.div`
    display: flex;
    align-items: center;
    align-content: space-between;
    border-top: 2px solid #F2A900;
    border-bottom: 2px solid #F2A900;
    margin: 1% auto;
    padding: 1%;
`;

const ArticleTitle = Styled.h3`
    font-size: 1.2rem;
`;

const ArticleText = Styled.p`
    border-left: 2px solid #F2A900;
    border-right: 2px solid #F2A900;
    padding: 1%;
`;

const ArticleAnchor = Styled.a`
    width: 8%;
    text-decoration: none;
    margin: 1% auto;
    margin-left: 1%;
    padding: 1%;
    cursor: pointer;
    transition: all .5s ease;
    color: #F2A900;
    border: 3px solid black;
    text-align: center;
    line-height: 1;
    font-size: 17px;
    background-color : transparent;
    outline: none;
    border-radius: 4px;
    &:hover {
    color: #001F3F;
    background-color: #F2A900;
    }
`;