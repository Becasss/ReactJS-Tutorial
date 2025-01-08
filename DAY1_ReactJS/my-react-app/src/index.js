import React from 'react';
import ReactDOM from 'react-dom/client';


function Football() {
    const shoot = () => {
        alert('Shot!');
    }
    return (
        <button onClick={shoot}>Take a Shot!</button>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Football />);

/*
You are now watching
the React file 'index.js'
through our 'Show React' tool.
*/
