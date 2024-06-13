import PropTypes from 'prop-types'
import { FadeLoader } from 'react-spinners'

const LoadingSpinner = () => {
    return (
        <div
            className="
      flex 
      flex-col 
      justify-center 
      items-center "
        >
            <FadeLoader size={100} color='red' />
        </div>
    )
}

LoadingSpinner.propTypes = {
    smallHeight: PropTypes.bool,
}

export default LoadingSpinner
