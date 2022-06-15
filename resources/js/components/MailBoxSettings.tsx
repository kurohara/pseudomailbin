import {useTranslation} from 'react-i18next'
import React, {useState} from 'react'
import CopyText from './CopyText'
import SelectWithAdd from './SelectWithAdd'
import RotateButton from './RotateButton'

const MailBoxSettings = ({data, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB}:{data:{current:string, list: {name: string, username: string, password: string}[]}, refreshCredentialCB: Function, addMailBoxCB: Function, deleteMailBoxCB:Function, selectCB: Function}) => {
    const {t, i18n} = useTranslation()
    const [rotate, setRotate] = useState(false)

    const currentMailBox = data.current
    const mailboxnames = data.list.map((e) => e.name)
    console.log(currentMailBox)

    let credentials = {userID: '', password: ''}

    if (currentMailBox) {
        const current = data.list.find((value) => value.name === currentMailBox)

        credentials = {userID: current!.username, password: current!.password}
    }
    console.log(credentials)

    const onRefresh = (e:React.MouseEvent) => {
        e.preventDefault()
        setRotate(true)
        refreshCredentialCB(() => {setRotate(false)})
    }

    return (
        <div className="block w-full border-2 rounded-lg border-blue-600 m-4 p-2 px-2">
            <SelectWithAdd id='mailboxselect' value={mailboxnames} onDelete={deleteMailBoxCB} onAdd={addMailBoxCB} onSelect={selectCB}/>
            <div className="block w-full">
                <div className="inline-block w-5/6">
                    <div className="inline-block mb-3 mx-3 w-full">
                        <CopyText id="userid" label={t('UserID')} value={credentials.userID} />
                    </div>
                    <div className="inline-block mb-3 mx-3 w-full" id="password">
                        <CopyText id="password" label={t('Password')} value={credentials.password} />
                    </div>
                </div>
                <div className="inline-block align-top pb-3 px-3 w-16">
                    <RotateButton brotate={rotate} onClick={onRefresh}/>
                </div>
            </div>
        </div>
    )
}

export default MailBoxSettings
