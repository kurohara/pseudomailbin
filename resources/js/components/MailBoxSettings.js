import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import CopyText from './CopyText'
import SelectWithAdd from './SelectWithAdd'
import RotateButton from './RotateButton'

const MailBoxSettings = ({data, refreshCredentialCB, addMailBoxCB, deleteMailBoxCB, selectCB}) => {
    const {t, i18n} = useTranslation()
    const [rotate, setRotate] = useState(false)

    const currentMailBox = data.current
    const mailboxnames = data.list.map((e) => e.name)
    console.log(currentMailBox)

    let credentials = {}
    if (currentMailBox) {
        const current = data.list.find((value) => value.name === currentMailBox)

        credentials = {userID: current.username, password: current.password}
    }
    console.log(credentials)

    const onRefresh = (e) => {
        e.preventDefault()
        setRotate(true)
        refreshCredentialCB(() => {setRotate(false)})
    }

    return (
        <>
            <div className="border-2 rounded-lg border-blue-600 m-3">
                <SelectWithAdd id='' value={mailboxnames} onDelete={deleteMailBoxCB} onAdd={addMailBoxCB} onSelect={selectCB}/>
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
