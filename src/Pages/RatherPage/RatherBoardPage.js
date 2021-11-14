import React, { Component, Fragment } from 'react';
import { Grid, Tab, GridRow, GridColumn } from "semantic-ui-react";
import {connect} from 'react-redux'
import UserCard  from '../../Components/LeadBoard/UserCard';
import MenuComponent from '../../Components/Menu/MenuComponent';


class RatherBoardPage extends Component {

  render(){
    const { authUser,user, userQuestionData } = this.props;
    
    return (
      <Fragment>
        {authUser !== null ? (
          <Fragment>
            <MenuComponent user={user} />
            <Grid padded="vertically" columns={1} centered>
              <GridRow>
                <GridColumn style={{ maxWidth: 800 }}>
                  <Tab
                    menu={{ fluid: true, vertical: true, tabular: true }}
                    panes={panes(userQuestionData)}
                  />
                </GridColumn>
              </GridRow>
            </Grid>
          </Fragment>
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}


const panes = (props) => {

  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane attached={false}>
          {props.unanswered.map((question) => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane attached={false}>
          {props.answered.map((question) => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};



function mapStateToProps({ authUser, questions, users }) {

  if(authUser){
    const user = users[authUser]
    const answeredIds = Object.keys(users[authUser].answers);
    console.log(answeredIds)
    const answered = Object.values(questions)
      .filter((question) => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

    console.log(answered);
    const unanswered = Object.values(questions)
      .filter((question) => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    
    console.log(unanswered);

    return {
      authUser,
      user,
      userQuestionData: {
        answered,
        unanswered,
      },
    };
  } else {
    return {
      authUser,
      userQuestionData: {
        
      },
    };
  }
}

export default connect(mapStateToProps)(RatherBoardPage);
