import React from 'react';
import ReactDOM from 'react-dom/client';

import Message from './components/Message'
import SelectMailBox from './components/SelectMailBox'
import MessageList from './components/MessageList'

const domelem = ReactDOM.createRoot(document.getElementById('mailbox'));

var currentMailBox = 0
var currentMessage = 0
var mboxlist=[]
var messagelist=[]
var message = {}

const issueApi = (url, method, options)  => {
    options = options ? options : {}
    return fetch(url, {
        method: method,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + window.sessionStorage.getItem('token'),
        },
        ...options, 
    }
    )
}

const fetchMailBoxList = async () => {
    const resp = await issueApi('/api/mailboxes', 'get')
    return await resp.json()
}

const fetchMessageList = async (mailbox) => {
    const resp = await issueApi('/api/mailboxes/'+mailbox, 'get')
    return await resp.json()
}

const fetchMessage = async (mailbox, messageid) => {
    const resp = await issueApi('/api/mailboxes/'+mailbox +'/'+messageid, 'get')
    return await resp.json()
}

const selectMailBoxCB = async (index) => {
    currentMailBox = index
    
    messagelist = await fetchMessageList(mboxlist[index].id)

    updateView()
}

const selectActionCB = (index) => {

}

const messageSelected = async (index) => {
    message = await fetchMessage(mboxlist[currentMailBox].id, messagelist[index].id)
    console.log(message)
    updateView()
}

const updateView = () => {
    domelem.render(
        <React.StrictMode>
            <SelectMailBox list={mboxlist} selectFunc={selectMailBoxCB} />
            <MessageList list={messagelist} onSelectAction={selectActionCB} onSelectMessage={messageSelected}/>
            <Message message={message} />
        </React.StrictMode>
    )
}

const loadData = async () => {
    mboxlist = await fetchMailBoxList()
    messagelist = await fetchMessageList(mboxlist[0].id)
    updateView()
}

loadData()

