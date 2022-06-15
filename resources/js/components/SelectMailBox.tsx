
export class MailBoxType {
  id: number = 0;
  name: string = '';
  username: string = '';
  password: string = '';
}

const SelectMailBox = ({list, selectFunc}:{list: MailBoxType[], selectFunc:Function}) => {
  const onSelect:React.MouseEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
    selectFunc((e.target! as HTMLSelectElement).value)
  }
  return (
    <>
        <form action="" method="post" className="w-full">
        <select name="mailbox" id="mailbox" className="w-full" onSelect={onSelect}>
            {
                list.map((elem, index) => (<option value={index} key={index}>{elem.name}</option>) )
            }
        </select>
        </form>
    </>
  )
}

export default SelectMailBox
