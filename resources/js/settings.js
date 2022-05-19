import React from 'react';
import ReactDOM from 'react-dom/client';
import CopyText from './components/CopyText';
import SelectWithAdd from './components/SelectWithAdd'
import MailBoxSettings from './components/MailBoxSettings'
import ServerSetting from './components/ServerSettings'

function showText(id, label, setcb) {
    ReactDOM.createRoot(document.getElementById(id)).render(
        <React.StrictMode>
            <CopyText id={id} label={label} cb={setcb} />
        </React.StrictMode>
    );
}

function showSelect(id, label, addcb, selectcb) {
    ReactDOM.createRoot(document.getElementById(id)).render(
        <React.StrictMode>
            <SelectWithAdd id={id} label={label} addcb={addcb} selectcb={selectcb} />
        </React.StrictMode>
    );
}

function showMailBoxSettings(id) {
    ReactDOM.createRoot(document.getElementById(id)).render(
        <React.StrictMode>
            <MailBoxSettings />
        </React.StrictMode>
    );
}

function showServerSettings(id, address, port) {
    ReactDOM.createRoot(document.getElementById(id)).render(
        <React.StrictMode>
            <ServerSetting address={address} port={port} />
        </React.StrictMode>
    );
}

setGlobal('showText', showText)
setGlobal('showSelect', showSelect)
setGlobal('showMailBoxSettings', showMailBoxSettings)
setGlobal('showServerSettings', showServerSettings)
