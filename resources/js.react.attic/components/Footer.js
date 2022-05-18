
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; 2022, XXXX all rights reserved.</p>
            {/* <a href="/about">about</a> */}
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
