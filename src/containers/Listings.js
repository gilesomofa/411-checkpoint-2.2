import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { deleteListings } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listing: state.listing
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        deleteListings: (index) => dispatch(deleteListings(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)