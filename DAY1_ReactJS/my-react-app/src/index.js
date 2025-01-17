import '..module/.my-sass.scss';
import Todos from "..module/Todos";
import React from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todos 1', 'todos 2']);
    
    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
/*
You are now watching
the React file 'index.js'
through our 'Show React' tool.
*/
