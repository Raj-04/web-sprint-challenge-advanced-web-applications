import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

const testArticles = [{
    id: 'aMqwd', 
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00 ',  
    summary: "summary of artlicle",
    body: "Body of article",
    author: 'CC'
},{
    id: 'aMqwd', 
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00 ',  
    summary: "summary of artlicle",
    body: "Body of article",
    author: 'CC'
},{
    id: 'aMqwd', 
    headline: "headline",
    createdOn: '2021-08-09T18:02:38-04:00 ',  
    summary: "summary of artlicle",
    body: "Body of article",
    author: 'CC'
}]

test("renders zero articles without errors", async () => {
    render(<View articles={[]} />)
});

test("renders three articles without errors", async ()=> {
    render(<View articles={testArticles}/>)
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.