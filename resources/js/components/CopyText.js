import { FaClipboardCheck } from 'react-icons/fa'

const CopyText = ({name, text}) => {
    const onClick = (e) => {
        e.preventDefault()
        const elem = document.getElementById(name)
        navigator.clipboard.writeText(elem.value)
    }
    return (
        <div className="block w-full">
            <button className="inline-block float-right" onClick={onClick}><FaClipboardCheck className="h-6 mx-1" /></button>
            <input type="text" name={name} id={name} value={text} readOnly className="border-blue-500 rounded-lg border-2 inline-block float-right w-64" />
        </div>
    )
}

export default CopyText
