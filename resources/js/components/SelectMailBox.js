import PropTypes from 'prop-types'

const SelectMailBox = ({list, selectFunc}) => {
  const onSelect = (e) => {
    e.preventDefault()
    selectFunc(e.target.value)
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

SelectMailBox.propTypes = {
    list: PropTypes.array.isRequired,
    selectFunc: PropTypes.func.isRequired,
}

export default SelectMailBox
