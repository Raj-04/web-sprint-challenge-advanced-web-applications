import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 'aMqwd', 
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00 ',  
    summary: "summary of artlicle",
    body: "Body of article",
    author: 'CC'
}
const testArticleNoAuthor = {
    id: 'aMqwd', 
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00 ',  
    summary: "summary of artlicle",
    body: "Body of article",
    author: ''
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    // const headline = screen.getByText('headline')
    // const author = screen.getByText('By Me')
    // const summary = screen.getByText('summary of article')
    // const body = screen.getByText('Body of article')
    // expect(headline).toBeInTheDocument()
    // expect(author).toBeInTheDocument()
    // expect(summary).toBeInTheDocument()
    // expect(body).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticleNoAuthor}/>)
    const noAuthor = screen.getByText('By Associated Press')
    expect(noAuthor).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const getFakedata = jest.fn()
    render(<Article article={testArticleNoAuthor}  handleDelete={getFakedata}
    />)
    const deleteButton = screen.getByText('Delete')
    userEvent.click(deleteButton)
    expect(getFakedata).toHaveBeenCalled()
});

//Task List:
//1. Complete all above tests. Create test article data when needed.