import React, { Fragment, useEffect } from "react";
import {connect} from 'react-redux'
import { useNavigate } from 'react-router';
import { Divider, Grid, GridColumn, GridRow, Header, Image, Label, Segment } from "semantic-ui-react";
import MenuComponent from "../../Components/Menu/MenuComponent";


const trophyColor = ["yellow", "grey", "red"];
const LeaderPage = (props) => {
    const { authUser, user, leaderData } = props;
    const navigate = useNavigate();

    useEffect(() => {
      if (!authUser) {
        navigate("/", { replace: true });
      }
    });
    return (
      <Fragment>
        <Grid padded="vertically" columns={1} centered>
          <GridRow>
            <GridColumn style={{ maxWidth: 1000 }}>
              <MenuComponent user={user} />
              <Fragment>
                {authUser !== null ? (
                  <Grid padded="vertically" columns={1} centered>
                    <GridRow>
                      <GridColumn style={{ maxWidth: 800 }}>
                        {leaderData.map((leader, index) => (
                          <Segment key={index}>
                            <Label
                              corner="left"
                              icon="trophy"
                              color={trophyColor[index]}
                            />
                            <Grid divided padded>
                              <Grid.Row>
                                <Grid.Column width={4} verticalAlign="middle">
                                  <Image
                                    src={leader.avatarURL}
                                    circular
                                    style={{ width: "100px", height: "auto" }}
                                  />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                  <Header as="h3" textAlign="left">
                                    {leader.name}
                                  </Header>
                                  <Grid>
                                    <Grid.Column width={12}>
                                      Answered questions
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                      {leader.answerCount}
                                    </Grid.Column>
                                  </Grid>
                                  <Divider />
                                  <Grid>
                                    <Grid.Column width={12}>
                                      Created questions
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                      {leader.questionCount}
                                    </Grid.Column>
                                  </Grid>
                                </Grid.Column>
                                <Grid.Column width={4} textAlign="center">
                                  <Segment.Group>
                                    <Header
                                      as="h5"
                                      block
                                      attached="top"
                                      content="Score"
                                    />
                                    <Segment>
                                      <Label circular color="green" size="big">
                                        {leader.questionCount +
                                          leader.answerCount}
                                      </Label>
                                    </Segment>
                                  </Segment.Group>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </Segment>
                        ))}
                      </GridColumn>
                    </GridRow>
                  </Grid>
                ) : (
                  <div></div>
                )}
              </Fragment>
            </GridColumn>
          </GridRow>
        </Grid>
      </Fragment>
    );

}

function mapStateToProps({ authUser, users }) {
  const user = users[authUser];
  const leaderData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);


  return {
    authUser,
    user,
    leaderData
  };
}
export default connect(mapStateToProps)(LeaderPage); 