import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusSquare } from 'react-icons/fa'
import {useTranslation} from 'react-i18next'

const SelectWithAdd = ({id, label, value, onAdd, onSelect, onDelete}) => {
    const {t, i18n} = useTranslation()
    const closeAdd = (e) => {
        document.getElementById('add'+id).checked = false
        e.preventDefault()
        if (e.target.id === "doApplyAdd") {
            console.log("create mail box")
            onAdd(document.getElementById('new'+id).value)
        }
    }
    const closeDelete = (e) => {
        document.getElementById('delete'+id).checked = false
        e.preventDefault()
        if (e.target.id === "doApplyDelete") {
            console.log("delete mail box")
            onDelete(document.getElementById(id+'select').value)
        }
    }
    const onChange = (e) => {
        console.log(e.target.value)
        onSelect(e.target.value)
    }
    return (
        <div className='block w-full'>
            <select name={id+"select"} id={id+"select"} className="inline-block w-4/5 p-2 m-3 border-2 rounded-md" onChange={onChange}>
                {value.map((item, i) => (<option value={i} key={i}>{item}</option>))}
            </select>
            <div className="inline">
                <label htmlFor={'add'+id} className="">
                    <FaPlusCircle className="inline-block mt-1 w-6 active:hover:bg-blue-500" />
                </label>
                <input type="checkbox" name={'add'+id} id={'add'+id} className="peer hidden" />
                <div className="hidden peer-checked:block fixed peer-checked:visible z-50 border-2 border-blue-500 bg-white m-5 p-3 rounded-md w-4/5">
                    <label htmlFor={'new'+id} className='w-full'>{label}</label>
                    <input type="text" name={'new'+id} id={'new'+id} className="block w-full border-2 rounded-sm mb-3" />
                    <button 
                        id="doCancelAdd"
                        className="border-2 rounded-md inline-block float-right" 
                        onClick={(e) => closeAdd(e)}>
                        {t('Cancel')}
                    </button>
                    <button 
                        id="doApplyAdd"
                        className="border-2 rounded-md inline-block float-right" 
                        onClick={(e) => {
                            closeAdd(e)
                        }}>
                        {t('Create')}
                    </button>
                </div>
            </div>
            <div className="inline">
                <label htmlFor={'delete'+id} className="">
                    <FaMinusSquare className="inline-block mt-1 w-6 active:hover:bg-blue-500" />
                </label>
                <input type="checkbox" name={'delete'+id} id={'delete'+id} className="peer hidden" />
                <div className="hidden peer-checked:block fixed peer-checked:visible z-50 border-2 border-blue-500 bg-white m-5 p-3 rounded-md w-4/5">
                    <div>
                        {t('Delete?')}
                    </div>
                    <button 
                        id="doCancelDelete"
                        className="border-2 rounded-md inline-block float-right" 
                        onClick={(e) => closeDelete(e)}>
                        {t('Cancel')}
                    </button>
                    <button 
                        id="doApplyDelete"
                        className="border-2 rounded-md inline-block float-right" 
                        onClick={(e) => {
                            closeDelete(e)
                        }}>
                        {t('Delete')}
                    </button>
                </div>
            </div>
        </div>
    )
}

SelectWithAdd.defaultProps = {
    id: 'selectitems',
    label: 'Add Item',
    value: [],
    onAdd: () => {},
    onSelect: () => {},
}

export default SelectWithAdd
    