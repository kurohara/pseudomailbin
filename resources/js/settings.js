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

function showServerSettings(id, setDataCB) {
    ReactDOM.createRoot(document.getElementById(id)).render(
        <React.StrictMode>
            <ServerSetting setDataCB={setDataCB} />
        </React.StrictMode>
    );
}

//
var data = {current: '', list: []}
var setMailBoxDataFunc = (value) => {}
const setMailBoxDataCB = (setfunc) => {
    setMailBoxDataFunc = setfunc
}
const refreshCredentialCB = (finishfunc) => {
    // simulate rest api call
    setTimeout(() => {
        prevuid = data.current ? data.map[data.current].userID : 'test'
        prevpwd = data.current ? data.map[data.current].password : 'abc'
        newdata = {...data}
        newdata.map[data.current] = {
            userID: prevuid + 'test',
            password: prevpwd + 'abc'
        }
        finishfunc()
        setDataFunc(newdata)
    }, 100)
}
const addMailBoxCB = () => {

}
const deleteMailBoxCB = () => {

}
const selectCB = (index) => {
    data = {...data, current: data.list[index].name}
    setMailBoxDataFunc(data)
}

var setServerDataFunc = (data) => {}
const setServerDataCB = (setfunc) => {
    setServerDataFunc = setfunc;
}

const fetchServerSettings = async (apitoken) => {
    const res = await fetch('/api/settings/server', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apitoken,
        }
    })
    const jsondata = await res.json()

    setServerDataFunc({
        address: jsondata.serveraddress,
        port: jsondata.serverport
    })
}

const fetchMailBoxes = async (apitoken) => {
    const res = await fetch('/api/settings/mailboxes', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apitoken
        }
    })
    data.list = await res.json()
    data.current = data.list.length > 0 ? data.list[0].name : ''
    setMailBoxDataFunc(data)
}

showServerSettings("serversettings", setServerDataCB)
showMailBoxSettings("mailboxsettings", setMailBoxDataCB, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB)
//

const token = window.sessionStorage.getItem('token')
// fetch initial data
fetchServerSettings(token)
fetchMailBoxes(token)

// // for script code in the outer HTML.
// setGlobal('showMailBoxSettings', showMailBoxSettings)
// setGlobal('showServerSettings', showServerSettings)
