import React from 'react';
import ReactDOM from 'react-dom/client';


function Garage(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {
                cars.length > 0 &&
                <h2>You have {cars.length} cars in your Garage.</h2>
            }
        </>
    );
}
const cars = ["Ford", "Bmw", "Audi"];

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Garage cars = {cars} />);

/*
You are now watching
the React file 'index.js'
through our 'Show React' tool.
*/
