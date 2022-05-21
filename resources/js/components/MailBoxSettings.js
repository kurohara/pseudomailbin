import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import CopyText from './CopyText'
import SelectWithAdd from './SelectWithAdd'
import RotateButton from './RotateButton'

const MailBoxSettings = ({setDataCB, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB}) => {
    const {t, i18n} = useTranslation()
    const [rotate, setRotate] = useState(false)
    const [data, setData] = useState({})

    console.log(setData)
    setDataCB(setData)

    const currentMailBox = data.current
    const mailboxmap = data.map ? data.map : {}
    console.log(currentMailBox)

    let credentials = {}
    if (currentMailBox) {
        credentials = mailboxmap[currentMailBox]
    }
    console.log(credentials)

    // const updateData = (upddata) => {
    //     setData(upddata)
    //     updateCurrentMailBox(currentMailBox, upddata)
    // }

    // const updateCurrentMailBox = (mbox, target) => {
    //     let targetdata = target ? target : data
    //     if (! mbox in targetdata) {
    //         if (Object.keys(targetdata).length > 0) {
    //             mbox = Object.keys(targetdata)[0]
    //         } else {
    //             mbox = ''
    //         }
    //     }
    //     setCurrentMailBox(mbox)

    //     if (mbox !== '') {
    //         credentails = targetdata[currentMailBox]
    //     }
    //     else {
    //         credentials = {}
    //     }
    // }

    // const switchRotate = (brotate) => {
    //     setRotate(brotate)
    // }
    // const refreshCredentials = async (ev) => {
    //     ev.preventDefault()
    //     console.log('clicked')
    //     switchRotate(true)
    //     // dummy, simulate communication. 
    //     setTimeout(() => {
    //         let newdata = {}
    //         newdata[currentMailBox] = {
    //             userID: 'abcde',
    //             password: 'testtest'
    //         }
    //         setData({...data, ...newdata})
    //         switchRotate(false)
    //     }, 1000)
    // }
    // const deleteCurrentMailBox = () => {
    //     if (currentMailBox !== '') {
    //         //
    //         // do reset request to delete the mailbox, return if error
    //         //
    //         dstobj = {}
    //         Object.keys(data).forEach((key) => {
    //             if (key !== currentMailBox) {
    //                 dstobj[key] = data[key]
    //             }
    //         })
    //         updateData(dstobj)
    //     }
    // }
    // const addMailBox = (newmailbox) => {
    //     //
    //     // request to add mailbox, return if error
    //     //

    // }

    const onRefresh = (e) => {
        e.preventDefault()
        setRotate(true)
        refreshCredentialCB(() => {setRotate(false)})
    }

    return (
        <>
            <div className="border-2 rounded-lg border-blue-600 m-3">
                <SelectWithAdd id='' value={Object.keys(mailboxmap)} onDelete={deleteMailBoxCB} onAdd={addMailBoxCB} onSelect={selectCB}/>
                <div className="block w-full">
                    <div className="inline-block w-4/5">
                        <div className="inline-block w-full mb-3 mx-3">
                            <CopyText id="userid" label={t('UserID')} value={credentials.userID} />
                        </div>
                        <div className="inline-block w-full mb-3 mx-3" id="password">
                            <CopyText id="password" label={t('Password')} value={credentials.password} />
                        </div>
                    </div>
                    <div className="inline-block w-1/6 align-top pb-3 px-3">
                        <RotateButton brotate={rotate} onClick={onRefresh}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailBoxSettings
