import CopyText from "./CopyText"
import { useTranslation } from "react-i18next"

export class MailServerType {
    address: string = '';
    port: number = 0;
}

const ServerSettings = ({data}:{data: MailServerType}) => {
    const {t} = useTranslation()

    return (
        <div className="block w-full border-2 rounded-lg border-blue-600 m-4 p-2 px-4">
            <div className="block w-full m-2">
                <CopyText 
                    id='serveraddress' 
                    label={t('Server Address')}
                    value={data.address}
                    />
            </div>
            <div className="block w-full m-2">
                <CopyText 
                    id='serverport' 
                    label={t('Server Port')}
                    value={""+data.port}
                     />
            </div>
        </div>
    )
}

export default ServerSettings
