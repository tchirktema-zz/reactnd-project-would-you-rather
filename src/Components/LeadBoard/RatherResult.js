import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Header, Segment, Progress, Label, Icon, Button } from "semantic-ui-react";
import { styles } from "../../Utils/style";

const RatherResult = (props) => {
  const { question , user } = props
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const votesTotal = optionOneVotes + optionTwoVotes;
  const yourVote = user.answers[question.id]
  const navigate = useNavigate();


  let option1 = styles.secondary;
  let option2 = styles.secondary;
  if (optionOneVotes > optionTwoVotes) {
    option1 = styles.primary;
  } else if (optionTwoVotes > optionOneVotes) {
    option2 = styles.primary;
  }

  const handleClick = (e) => {
    navigate("/home",{replace: true})
  }

  return (
    <Fragment>
      <Header as="h4">Would you rather</Header>
      <Segment
        color={option1.color}
        style={{ backgroundColor: `${option1.bgColor}` }}
      >
        <p style={{ fontWeight: "bold" }}>{question.optionOne.text}</p>

        {yourVote === "optionOne" && (
          <Label color="orange" ribbon="right" className="vote">
            <Icon name="check circle outline" size="big" className="compact" />
            <div style={{ float: "right" }}>
              Your
              <br />
              Vote
            </div>
          </Label>
        )}
        <Progress
          percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
          progress
          color={option1.color}
        >
          {optionOneVotes} out of {votesTotal} votes
        </Progress>
      </Segment>
      <Segment
        color={option2.color}
        style={{ backgroundColor: `${option2.bgColor}` }}
      >
        <p style={{ fontWeight: "bold" }}>{question.optionTwo.text}</p>

        {yourVote === "optionTwo" && (
          <Label color="green" ribbon="right" className="vote">
            <Icon
              name="check circle outline"
              size="small"
              className="compact"
            />
            <div style={{ float: "right" }}>
              Your
              <br />
              Vote
            </div>
          </Label>
        )}
        <Progress
          percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
          progress
          color={option2.color}
        >
          {optionTwoVotes} out of {votesTotal} votes
        </Progress>
      </Segment>
      <Button size="tiny" floated="right" onClick={handleClick}>
        Back
      </Button>
    </Fragment>
  );

}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  
  return {
    user
  };
}
export default connect(mapStateToProps)(RatherResult) 