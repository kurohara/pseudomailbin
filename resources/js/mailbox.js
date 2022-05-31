import React from 'react';
import ReactDOM from 'react-dom/client';

import Message from './components/Message'
import SelectMailBox from './components/SelectMailBox'
import MessageList from './components/MessageList'

const domelem = ReactDOM.createRoot(document.getElementById('mailbox'));

var mboxlist=[]
var messagelist=[]
var subject, to, from, datetime, body

const fetchMailBoxList = async () => {

}

const fetchMessageList = async (mailbox) => {

}

const fetchMessage = async (mailbox, messageid) => {

}

const selectCB = () => {}
const selectActionCB = () => {}
const messageSelected = () => {}

const updateView = () => {
    domelem.render(
        <React.StrictMode>
            <SelectMailBox list={mboxlist} selectFunc={selectCB} />
            <MessageList list={messagelist} onSelectAction={selectActionCB} onSelectMessage={messageSelected}/>
            <Message  subject={subject} from={from} to={to} datetime={datetime} body={body} />
        </React.StrictMode>
    )
}

// prepare dummy data
mboxlist = [
    {
        name: 'mymbox1',
    },
    {
        name: 'mymbox2',
    }
]
messagelist= [
    {
        subject: 'test-1',
        to: 'test@test.com',
        from: 'test2@test.com',
        datetime: '2022/09/01 00:00:00',
        body: `
        test
        test
        `
    },
    {
        subject: 'ttest-2',
        to: 'test@test.com',
        from: 'test3@test.com',
        datetime: '2022/09/01 00:00:00',
        body: 'testtest'
    },
    {
        subject: 'test-3',
        to: 'test@test.com',
        from: 'test3@test.com',
        datetime: '2022/09/01 00:00:00',
        body: 'test test'
    },
]

setTimeout(() => {
    updateView()
}, 0)
