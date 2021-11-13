import React, { Component, Fragment } from "react";
import LoginPage from "../Login/LoginPage";
import HomePage from "../HomePage/HomePage";
import { handleInitialData } from "../../Actions/SharedAction";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import RatherPage from "../RatherPage/RatherPage";
import NewRatherPage from "../NewRatherPage/NewRatherPage";
import LeaderPage from "../RatherPage/LeaderPage";

class AppPage extends Component {
  componentDidMount(){
    this.props.handleInitialData();
    
  }
  render(){
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/questions/:question_id" element={<RatherPage/>} />
          <Route path="/new" element={<NewRatherPage/>} />
          <Route path="/leader" element={<LeaderPage/>} />
        </Routes>
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps, { handleInitialData })(AppPage);

