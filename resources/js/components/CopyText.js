import { FaClipboardCheck } from 'react-icons/fa'
import {useState} from 'react'

const CopyText = ({id, label, value}) => {
    const cid = "__" + id
    const onClick = (e) => {
        e.preventDefault()
        const elem = document.getElementById(cid)
        navigator.clipboard.writeText(elem.value)
    }
    return (
        <>
            <label htmlFor={cid} className="inline-block">{label}</label>
            <button type="button" 
                className="inline-block float-right active:hover:bg-blue-500 rounded-sm"
                onClick={onClick}>
                    <FaClipboardCheck className="h-6 mx-1 opacity-50" />
                </button>
            <input type="text" 
                name={cid} 
                id={cid} 
                value={value} 
                readOnly 
                className="border-blue-500 rounded-lg border-2 inline-block float-right w-64" />
        </>
    )
}

CopyText.defaultProps = {
    id: 'copytext',
    label: 'copytext',
    value: ''
}
export default CopyText
