import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h2>{title}</h2>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Show'} onClick={onAdd} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: "Mail box"
}

// const headingStyles = {
//     color: "red", 
//     backgroundColor: "black"
// }

export default Header
