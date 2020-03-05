import { connect } from 'react-redux'
import Listings from '../components/Listings'
// import  { RemoveListing }

const mapStateToProps = (state) => {
    return {
        listings: state.listing
    }
}

export default connect(mapStateToProps)(Listings)