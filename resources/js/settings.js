import React from 'react';
import ReactDOM from 'react-dom/client';
import CopyText from './components/CopyText';

ReactDOM.createRoot(document.getElementById('serveraddressdiv')).render(
    <React.StrictMode>
        <CopyText name="uname" text="abcdefg"/>
    </React.StrictMode>
);
