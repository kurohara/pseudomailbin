import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n'
import MailBoxSettings from './components/MailBoxSettings'
import ServerSetting from './components/ServerSettings'
import { MailBoxType } from './components/SelectMailBox'
import { MailServerType } from './components/ServerSettings'

const serverSettingsDom = ReactDOM.createRoot(document.getElementById('serversettings')!)
const mailboxsettingsDom = ReactDOM.createRoot(document.getElementById('mailboxsettings')!)

const updateMailBoxSettings = (data:{current:string, list: MailBoxType[]}, refreshCredentialCB:Function, addMailBoxCB:Function, deleteMailBoxCB:Function, selectCB:Function) => {
    mailboxsettingsDom.render(
        <React.StrictMode>
            <MailBoxSettings 
                data={data}
                refreshCredentialCB={refreshCredentialCB} 
                addMailBoxCB={addMailBoxCB} 
                deleteMailBoxCB={deleteMailBoxCB} 
                selectCB={selectCB} />
        </React.StrictMode>
    )
}

const updateServerSettings = (data:MailServerType) => {
    serverSettingsDom.render(
        <React.StrictMode>
            <ServerSetting data={data} />
        </React.StrictMode>
    )
}

//
var mailBoxData: {current: string, list:MailBoxType[]} = {current: '', list: []}

const refreshCredentialCB = async (finishfunc:Function) => {
    const mbox = mailBoxData.list.find((item) => item.name === mailBoxData.current)!
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
    updateMailBoxSettings(newdata, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB)
}

const addMailBoxCB = async (name:string) => {
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

const deleteMailBoxCB = async (index:number) => {
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

    var newlist:MailBoxType[] = []
    mailBoxData.list.map((item) => {
        if (item.id !== id)
            newlist.push(item)
    })
    console.log(newlist)
    applyMailBoxList(newlist)
}

const selectCB = (index:number) => {
    mailBoxData = {...mailBoxData, current: mailBoxData.list[index].name}
    updateMailBoxSettings(mailBoxData, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB)
}

const fetchServerSettings = async (apitoken:string) => {
    const res = await fetch('/api/settings/server', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apitoken,
        }
    })
    const jsondata = await res.json()

    updateServerSettings({
        address: jsondata.serveraddress,
        port: jsondata.serverport
    })
}

const applyMailBoxList = (list:MailBoxType[]) => {
    mailBoxData = {...mailBoxData}
    mailBoxData.list = list
    if (mailBoxData.current === '' || mailBoxData.list.find((item) => {item.name === mailBoxData.current}) === undefined) {
        mailBoxData.current = mailBoxData.list.length > 0 ? mailBoxData.list[0].name : ''
    }
    updateMailBoxSettings(mailBoxData, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB)
}

const fetchMailBoxes = async (apitoken:string) => {
    const res = await fetch('/api/settings/mailboxes', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + apitoken
        }
    })
    applyMailBoxList(await res.json())
}

//

const token = window.sessionStorage.getItem('token')
// initial view update
updateServerSettings(new MailServerType())
updateMailBoxSettings(mailBoxData, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB)

// fetch initial data
fetchServerSettings(token!)
fetchMailBoxes(token!)

