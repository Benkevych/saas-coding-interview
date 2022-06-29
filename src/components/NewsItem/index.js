import React from 'react';
import moment from 'moment';

import { Item, Title, Link, Score, Author, Time, Comments } from './styles';

export const NewsItem = ({ by, kids = [], score, url, title, id, type, time }) => {
    return (
        <Item>
            <Link
                href={`https://news.ycombinator.com/item?id=${id}`}
                rel="nofollow noreferrer noopener"
                target="_blank"
            >
                <Title variant="h4" gutterBottom component="div">
                    {title}
                </Title>
            </Link>
            <Score>{score} points</Score>
            <Author>
                by{' '}
                <Link
                    href={`https://news.ycombinator.com/user?id=${by}`}
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                >
                    {by}
                </Link>
            </Author>
            <Time>{moment(time * 1000).fromNow()}</Time>
            <Comments
                href={`https://news.ycombinator.com/item?id=${id}`}
                rel="nofollow noreferrer noopener"
                target="_blank"
            >
                {kids.length} Comments
            </Comments>
        </Item>
    );
};
