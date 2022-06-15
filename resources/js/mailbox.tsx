import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n'
import Message from './components/Message'
import SelectMailBox from './components/SelectMailBox'
import MessageList from './components/MessageList'

const domelem = ReactDOM.createRoot(document.getElementById('mailbox')!);

class MessageType {
    id: number = 0;
    subject: string = '';
    from: string = '';
    to: string = '';
    datetime: string = '';
    body: string = '';
}

class MailBoxType {
    id: number = 0;
    name: string = '';
    username: string = '';
    password: string = '';
}

var currentMailBox = 0
var currentMessage = 0
var mboxlist:MailBoxType[]=[]
var messagelist:MessageType[]=[]
var message: MessageType = new MessageType()

const issueApi = (url:string, method:string, options?:{})  => {
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

const fetchMessageList = async (mailbox:number) => {
    const resp = await issueApi('/api/mailboxes/'+mailbox, 'get')
    return await resp.json()
}

const fetchMessage = async (mailbox:number, messageid:number) => {
    const resp = await issueApi('/api/mailboxes/'+mailbox +'/'+messageid, 'get')
    return await resp.json()
}

const selectMailBoxCB = async (index:number) => {
    currentMailBox = index
    
    messagelist = await fetchMessageList(mboxlist[index].id)

    updateView()
}

const selectActionCB = (index:number) => {

}

const messageSelected = async (index:number) => {
    message = await fetchMessage(mboxlist[currentMailBox].id, messagelist[index].id)
    console.log(message)
    updateView()
}

const updateView = () => {
    domelem.render(
        <React.StrictMode>
            <div className='h-full'>
                <SelectMailBox list={mboxlist} selectFunc={selectMailBoxCB} />
                <MessageList list={messagelist} onSelectAction={selectActionCB} onSelectMessage={messageSelected}/>
                <Message message={message} />
            </div>
        </React.StrictMode>
    )
}

const loadData = async () => {
    mboxlist = await fetchMailBoxList()
    messagelist = await fetchMessageList(mboxlist[0].id)
    updateView()
}

loadData()

