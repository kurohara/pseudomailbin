import React from 'react';
import ReactDOM from 'react-dom/client';
import MailBoxSettings from './components/MailBoxSettings'
import ServerSetting from './components/ServerSettings'

function showMailBoxSettings(id, setDataCB, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB) {
    ReactDOM.createRoot(document.getElementById(id)).render(
        <React.StrictMode>
            <MailBoxSettings 
                setDataCB={setDataCB}
                refreshCredentialCB={refreshCredentialCB} 
                addMailBoxCB={addMailBoxCB} 
                deleteMailBoxCB={deleteMailBoxCB} 
                selectCB={selectCB} />
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

setGlobal('showMailBoxSettings', showMailBoxSettings)
setGlobal('showServerSettings', showServerSettings)
