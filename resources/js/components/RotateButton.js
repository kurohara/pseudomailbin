import PropTypes from 'prop-types'
import {GrPowerCycle} from 'react-icons/gr'
import {useState, useEffect} from 'react'

const RotateButton = ({brotate, onClick}) => {
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        if (brotate) {
            setTimeout(() => {
                setAngle((angle + 5) % 360)
            }, 10)
        } else {
            if (angle != 0) {
                setAngle(0)
            }
        }
    })

    return (
        <>
            <button type="button" className={'border-2 ' + (brotate ? '' : 'active:hover:bg-blue-300') + ' rounded-lg'} onClick={onClick} disabled={brotate}>
                <GrPowerCycle className="bg-inherit w-6" id="rotatebutton" style={{transform: 'rotate(' + angle + 'deg)', }}/>
            </button>
        </>
    )
}

RotateButton.propTypes = {
    'brotate': PropTypes.bool,
}

RotateButton.defaultProps = {
    'brotate': false
}
export default RotateButton
