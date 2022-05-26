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
var mailBoxData = {current: '', list: []}
var setMailBoxDataFunc = (value) => {}
const setMailBoxDataCB = (setfunc) => {
    setMailBoxDataFunc = setfunc
}

const refreshCredentialCB = async (finishfunc) => {
    const mbox = mailBoxData.list.find((item) => item.name === mailBoxData.current)
    const resp = await fetch('/api/settings/mailboxes/' + mbox.id, {
        method: 'put',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + window.sessionStorage.getItem('token'),
        }
    })
    const data = await resp.json()
    const newdata = {
        ...mailBoxData,
        list: mailBoxData.list.map((item) => {
            if (item.id === mbox.id)
                return data
            else
                return item
        })
    }
    finishfunc()
    setMailBoxDataFunc(newdata)
}

const addMailBoxCB = async (name) => {
    console.log('adding mail box: ' + name)
    const resp = await fetch('/api/settings/mailboxes', {
        method: 'post',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + window.sessionStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name})
    })
    const data = await resp.json()
    const newlist = [...mailBoxData.list, data]
    applyMailBoxList(newlist)
}

const deleteMailBoxCB = async (index) => {
    console.log(mailBoxData.list[index])
    const id = mailBoxData.list[index].id
    const resp = await fetch('/api/settings/mailboxes/'+id, {
        method: 'delete',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + window.sessionStorage.getItem('token'),
        }
    })
    const data = await resp.json()

    const newlist = []
    mailBoxData.list.map((item) => {
        if (item.id !== id)
            newlist.push(item)
    })
    console.log(newlist)
    applyMailBoxList(newlist)
}

const selectCB = (index) => {
    mailBoxData = {...mailBoxData, current: mailBoxData.list[index].name}
    setMailBoxDataFunc(mailBoxData)
}

var setServerDataFunc = (mailBoxData) => {}
const setServerDataCB = (setfunc) => {
    setServerDataFunc = setfunc
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

const applyMailBoxList = (list) => {
    mailBoxData = {...mailBoxData}
    mailBoxData.list = list
    if (mailBoxData.current === '' || mailBoxData.list.find((item) => {item.name === mailBoxData.current}) === undefined) {
        mailBoxData.current = mailBoxData.list.length > 0 ? mailBoxData.list[0].name : ''
    }
    setMailBoxDataFunc(mailBoxData)
}

const fetchMailBoxes = async (apitoken) => {
    const res = await fetch('/api/settings/mailboxes', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apitoken
        }
    })
    applyMailBoxList(await res.json())
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
