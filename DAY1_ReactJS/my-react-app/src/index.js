import '..module/.my-sass.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ( ) => {
    return (
        <>
        <h1>Hello Style</h1>
        <p>Add a little Style!</p>
        </>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Header/>);

/*
You are now watching
the React file 'index.js'
through our 'Show React' tool.
*/
