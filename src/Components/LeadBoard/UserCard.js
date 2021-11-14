import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Header, Image, Segment } from 'semantic-ui-react';
import RatherAll from "./RatherAll";
import RatherQuestion from "./RatherQuestion";
import RatherResult from "./RatherResult";


class UserCard extends Component {
  
  render() {
    const {
      author,
      question,
      ratherType,
      unanswered = null,
    } = this.props;
    const tabColor = unanswered === true ? colors.green : colors.blue;
    const borderTop =
      unanswered === null
        ? `1px solid ${colors.grey}`
        : `2px solid ${tabColor.hex}`;

    return (
      <Segment.Group>
        <Header
          as="h5"
          textAlign="left"
          block
          attached="top"
          style={{ borderTop: borderTop }}
        >
          {question.author} asks:
        </Header>

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image
                style={{ width: "80px", height: "auto" }}
                src={author.avatarURL}
                circular
                centered
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <RatherContent
                ratherType={ratherType}
                question={question}
                unanswered={unanswered}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export const colors = {
  green: {
    name: "green",
    hex: "#21ba45",
  },
  blue: {
    name: "blue",
    hex: "#2185d0",
  },
  grey: {
    name: null,
    hex: "#d4d4d5",
  },
};


const ratherTypes = {
  RATHER_ALL: "RATHER_ALL",
  RATHER_QUESTION: "RATHER_QUESTION",
  RATHER_RESULT: "RATHER_RESULT",
};

const RatherContent = (props) => {
  const { ratherType, question, unanswered } = props;

  switch (ratherType) {
    case ratherTypes.RATHER_ALL:
      return <RatherAll question={question} unanswered={unanswered} />;
    case ratherTypes.RATHER_QUESTION:
      return <RatherQuestion question={question} />;
    case ratherTypes.RATHER_RESULT:
      return <RatherResult question={question} />;
    default:
      return;
  }
};


function mapStateToProps(
  { users, questions, authUser },
  { match, question_id }
){
  let question, author, ratherType;

  if(question_id){
    question = questions[question_id];
    author = users[authUser];
    ratherType = ratherTypes.RATHER_ALL;
  } else {
   
    question = questions[match];

    author  = users[authUser];

    console.info(" question :", question)
    console.info(" author :", author);
    


    if (question === undefined) {

    } else {
      author = users[authUser];
      ratherType = ratherTypes.RATHER_QUESTION;
  
      if (Object.keys(author.answers).includes(question.id)) {
        ratherType = ratherTypes.RATHER_RESULT;
      }
    }
  }
  return {
    question,
    author,
    ratherType,
  };
};
export default connect(mapStateToProps)(UserCard); 