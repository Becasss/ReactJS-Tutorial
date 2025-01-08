import React from 'react';
import ReactDOM from 'react-dom/client';


function MissedGoal() {
    return <h1>Missed Goal</h1>
}

function MadeGoal() {
    return <h1>Made Goal</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    } 
    return <MissedGoal />;
    
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Goal isGoal = {false} />);

/*
You are now watching
the React file 'index.js'
through our 'Show React' tool.
*/
