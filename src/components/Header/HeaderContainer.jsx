import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAithUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAithUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth.login,
  };
};
export default connect(mapStateToProps, { getAithUserData })(HeaderContainer);
