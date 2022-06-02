import {useTranslation} from 'react-i18next'

const MessageList = ({list, onSelectMessage, onSelectAction}) => {
    const {t, i18n} = useTranslation()

    const clickedMessage = (e, index) => {
        document.getElementById('radselmsg_'+index).setAttribute('checked', true)
        onSelectMessage(index)
    }
    return (
        <>
            <div className="messagelist w-full block h-2/6 overflow-y-hidden">
                <table className="w-full border-2 block h-full">
                    <thead className="w-full border-2 block whitespace-nowrap">
                        <tr className="w-full block">
                            <th className="inline-block w-1/12 text-left"><input type="checkbox" name="" id="chkallmessages" /></th>
                            <th className="mr-6 inline-block w-4/12 text-left">Subject</th>
                            <th className="mr-6 inline-block w-4/12 text-left">From</th>
                            <th className="mr-6 inline-block w-3/12 text-left">datetime</th>
                        </tr>
                    </thead>
                    <tbody className="w-full block h-5/6 overflow-y-scroll whitespace-nowrap border-2">
                        {
                            list.map((item,index) => (
                                <tr className="block w-full" key={index} onClick={(e) => clickedMessage(e, index)}>
                                    <td className="hover:cursor-pointer inline-block w-1/12 text-left">
                                        <input type="checkbox" name="" id={"chkmessageitem_"+index}/>
                                        <input type="radio" className="hidden peer" name="radselect" id={"radselmsg_"+index} />
                                        <div className='inline-block peer-checked:border-2 peer-checked:bg-black'> </div>
                                    </td>
                                    <td className="mr-6 overflow-clip hover:cursor-pointer inline-block w-4/12 text-left">{item.subject}</td>
                                    <td className="mr-6 overflow-clip hover:cursor-pointer inline-block w-4/12 text-left">{item.from}</td>
                                    <td className="mr-6 overflow-clip hover:cursor-pointer inline-block w-3/12 text-left">{item.datetime}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <form action="" method="post">
                    <label htmlFor="actionselect">{t('select action')}</label>
                    <select name="actionselect" id="actionselect" onSelect={(e) => onSelectAction(e.target.value)}>
                        <option value="none">{t('Nothing')}</option>
                        <option value="delete">{t('Delete')}</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default MessageList
