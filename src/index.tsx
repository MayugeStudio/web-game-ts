import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className={''}>
            <div></div>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Loaded');
        ReactDOM.render(<App/>, document.getElementById(`root`))
    },
);
