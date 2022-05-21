import CopyText from "./CopyText"
import { useTranslation } from "react-i18next"

const ServerSettings = ({address, port}) => {
    const {t, i18n} = useTranslation()
    console.log(address)
    console.log(port)
    return (
        <div className="block w-full p-2 px-2">
            <div className="block w-5/6 m-2">
                <CopyText 
                    id='serveraddress' 
                    label={t('Server Address')}
                    cb={() => {} }  
                    initialValue={address}
                    />
            </div>
            <div className="block w-5/6 m-2">
                <CopyText 
                    id='serverport' 
                    label={t('Server Port')}
                    cb={() => {}} 
                    initialValue={port}
                     />
            </div>
        </div>
    )
}

export default ServerSettings
