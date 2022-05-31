import {useTranslation} from 'react-i18next'

const MessageList = ({list, onSelectMessage, onSelectAction}) => {
    const {t, i18n} = useTranslation()

    const selectMessage = (e) => {

    }

    return (
        <>
            <div className="messagelist w-full block h-2/6 overflow-y-hidden">
                <table className="w-full border-2 block h-full">
                    <thead className="w-full border-2 block whitespace-nowrap">
                        <tr className="w-full block">
                            <th className="inline-block w-1/12 text-left"><input type="checkbox" name="" id="chkallmessages" /></th>
                            <th className="inline-block w-4/12 text-left">Subject</th>
                            <th className="inline-block w-4/12 text-left">From</th>
                            <th className="inline-block w-3/12 text-left">datetime</th>
                        </tr>
                    </thead>
                    <tbody className="w-full block h-5/6 overflow-y-scroll whitespace-nowrap border-2">
                        {
                            list.map((item,index) => (
                                <tr className="block w-full" key={index}>
                                    <td className="inline-block w-1/12 text-left peer-checked:bg-black peer-checked:text-white">
                                        <input type="checkbox" name="" id={"chkmessageitem_"+index}/>
                                        <input type="checkbox" className="hidden peer" name="" id={"chkselmsg_"+index} />
                                    </td>
                                    <td className="inline-block w-4/12 text-left peer-checked:bg-black peer-checked:text-white">{item.subject}</td>
                                    <td className="inline-block w-4/12 text-left peer-checked:bg-black peer-checked:text-white">{item.from}</td>
                                    <td className="inline-block w-3/12 text-left peer-checked:bg-black peer-checked:text-white">{item.datetime}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <form action="" method="post">
                    <label htmlFor="actionselect">{t('select action')}</label>
                    <select name="actionselect" id="actionselect" onSelect={onSelectAction}>
                        <option value="none">{t('Nothing')}</option>
                        <option value="delete">{t('Delete')}</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default MessageList
