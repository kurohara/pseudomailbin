import { FaClipboardCheck } from 'react-icons/fa'

const CopyText = ({id, label, value}:{id:string, label:string, value:string}) => {
    const cid = "__" + id
    const onClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        const elem = document.getElementById(cid)! as HTMLInputElement
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
                className="border-blue-500 rounded-lg border-2 inline-block float-right w-4/6" />
        </>
    )
}

CopyText.defaultProps = {
    id: 'copytext',
    label: 'copytext',
    value: ''
}
export default CopyText
