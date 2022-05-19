import {GrPowerCycle} from 'react-icons/gr'
import {useTranslation} from 'react-i18next'
import CopyText from './CopyText'
import SelectWithAdd from './SelectWithAdd'

const MailBoxSettings = () => {
    const {t, i18n} = useTranslation()
    let setUserID = (uid) => {}
    let setPassword = (password) => {}
    return (
        <>
            <div className="border-2 rounded-lg border-blue-600 m-3">
                <SelectWithAdd id='' initial={['mymbox', 'mymbox2']}/>
                <div className="block w-full">
                    <div className="inline-block w-4/5">
                        <div className="inline-block w-full mb-3 mx-3">
                            <CopyText id="userid" label={t('UserID')} cb={(setfunc) => {setUserID = setfunc}} />
                        </div>
                        <div className="inline-block w-full mb-3 mx-3" id="password">
                            <CopyText id="password" label={t('Password')} cb={(setfunc) => {setPassword = setfunc}} />
                        </div>
                    </div>
                    <div className="inline-block w-1/6 align-top pb-3 px-3">
                        <button type="button" className="border-2 bg-blue-300 rounded-lg"><GrPowerCycle className="bg-inherit w-6"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailBoxSettings
