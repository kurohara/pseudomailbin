import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/index.css';

function doreact(ename) {
    return ReactDOM.createRoot(document.getElementById(ename)).render(
        <React.StrictMode>
        </React.StrictMode>
      );
}

