import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "./store/actions";
import { IS_MODAL_CLOSE } from "./store/constants/modal";
import Modal from "react-modal";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "./store/constants/auth";
import setHeaders from "./helpers/setHeaders";
import { logout, getUserList } from "./store/actions/user";
import { getTripList } from "./store/actions/trip";
// import components
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import Home from "./screens/Home";
import UserProfile from "./screens/UserProfile";
import TripDetail from "./screens/TripDetail";
import AllTrip from "./screens/AllTrip";
import UserManage from "./screens/UserManage";
import TripManage from "./screens/TripManage";
// import modal components
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import UpdateInfo from "./auth/UpdateInfo";
import AddCar from "./auth/AddCar";
import AddTrip from "./auth/AddTrip";
import UpdateTrip from "./auth/UpdateTrip";

class App extends Component {
  renderModal = () => {
    let { isComponentOpen } = this.props.modal;
    switch (isComponentOpen) {
      case "SignUp":
        return <SignUp />;
      case "SignIn":
        return <SignIn />;
      case "UpdateInfo":
        return <UpdateInfo />;
      case "AddCar":
        return <AddCar />;
      case "AddTrip":
        return <AddTrip />;
      case "UpdateTrip":
        return <UpdateTrip />;
      default:
        return;
    }
  };
  isModalClose = () => {
    this.props.dispatch(createAction(IS_MODAL_CLOSE));
  };
  componentDidMount() {
    Modal.setAppElement("body");
    this.props.dispatch(getTripList());
    this.props.dispatch(getUserList());
    const token = localStorage.getItem("token");
    const fingerprint = localStorage.getItem("fingerprint");
    if (!token) return;
    const decoded = jwtDecode(token);
    this.props.dispatch(createAction(SET_CURRENT_USER, decoded));
    setHeaders(token, fingerprint);
    if (Date.now() / 1000 > decoded.exp) {
      this.props.dispatch(logout());
    }
  }

  render() {
    let { modal } = this.props;
    const customStyles = {
      content: {
        width: "60%",
        margin: "30px auto",
        padding: "0",
        height: "600px",
      },
      overlay: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: "1000",
      },
    };
    return (
      <BrowserRouter>
        <Switch>
          <HomeTemplate path="/" exact component={Home} />
          <HomeTemplate path="/home" exact component={Home} />
          <HomeTemplate path="/profile/:userId" exact component={UserProfile} />
          <HomeTemplate path="/trip/:tripId" exact component={TripDetail} />
          <HomeTemplate path="/trips" exact component={AllTrip} />

          <AdminTemplate path="/admin" exact component={Home} />
          <AdminTemplate path="/admin-users" exact component={UserManage} />
          <AdminTemplate path="/admin-trips" exact component={TripManage} />
          <AdminTemplate path="/admin-dscd" exact component={AllTrip} />
        </Switch>
        <Modal
          style={customStyles}
          isOpen={modal.isModalOpen}
          onRequestClose={this.isModalClose}
          closeTimeoutMS={500}
        >
          {this.renderModal()}
        </Modal>
      </BrowserRouter>
    );
  }
}

export default connect((state) => ({
  modal: state.modal,
}))(App);
