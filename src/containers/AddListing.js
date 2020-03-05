import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addListing } from "../redux/actions";

export const mapDispatchToProps = dispatch => {
  return AddListing => dispatch(addListing(AddListing));
};
export default connect(null, mapDispatchToProps)(AddListing);
