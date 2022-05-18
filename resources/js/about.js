import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';

const ename = 'about'

ReactDOM.createRoot(document.getElementById(ename)).render(
    <React.StrictMode>
        <About/>
    </React.StrictMode>
);
