import React, { Component, Fragment } from "react";
import LoginPage from "../Login/LoginPage";
import HomePage from "../HomePage/HomePage";
import { handleInitialData } from "../../Actions/SharedAction";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import RatherPage from "../RatherPage/RatherPage";
import NewRatherPage from "../NewRatherPage/NewRatherPage";
import LeaderPage from "../RatherPage/LeaderPage";

class AppPage extends Component {
  componentDidMount(){
    this.props.handleInitialData();

    if(!this.props.authUser){
      return <Navigate to="/login" />;
    }

    
  }
  render(){
    return (
      <Fragment>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/questions/:question_id" element={<RatherPage />} />
          <Route path="/add" element={<NewRatherPage />} />
          <Route path="/leaderboard" element={<LeaderPage />} />
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

