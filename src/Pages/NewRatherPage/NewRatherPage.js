import React, { Fragment, useEffect, useState } from "react";
import { Dimmer, Divider, Form, Grid, GridColumn, GridRow, Header, Loader, Segment } from 'semantic-ui-react';
import MenuComponent from '../../Components/Menu/MenuComponent';
import {connect} from 'react-redux'
import { useNavigate } from 'react-router';
import { handleSaveQuestion } from "../../Actions/QuestionActions";


const NewRatherPage = (props) => {
    const { authUser, user, handleSaveQuestion } = props;

    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (user === undefined) {
        navigate("/", {
          state: {
            current: '/add',
          },
        });
      }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        new Promise((res, rej) => {
          setLoading(true);
          setTimeout(() => res(), 500);
        }).then(() => {
        if (optionOne !== "" && optionTwo !== "") {
          handleSaveQuestion(optionOne,optionTwo,authUser)
        }
          setLoading(false);
        });
    }
    const handleChange = (e) => {
        if(e.target.id === 'optionOne'){
            setOptionOne(e.target.value);
        }
        if(e.target.id === 'optionTwo'){
            setOptionTwo(e.target.value);
        }


        if(optionOne !== '' && optionTwo !== ''){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    };

    return (
      <Fragment>
        <Grid padded="vertically" columns={1} centered>
          <GridRow>
            <GridColumn style={{ maxWidth: 1000 }}>
              {user !== undefined ? <MenuComponent user={user} /> : <div></div>}
              <Fragment>
                {authUser !== null ? (
                  <Grid padded="vertically" columns={1} centered>
                    <GridRow>
                      <GridColumn style={{ maxWidth: 800 }}>
                        <Segment.Group>
                          <Header as="h3" textAlign="left" block attached="top">
                            Create a New Rather
                          </Header>
                          <Grid padded>
                            <Grid.Column>
                              {loading && (
                                <Dimmer active inverted>
                                  <Loader content="Creating" />
                                </Dimmer>
                              )}
                              <p>Complete the question:</p>
                              <p>
                                <strong>Would you rather...</strong>
                              </p>
                              <Form onSubmit={handleSubmit}>
                                <Form.Input
                                  id="optionOne"
                                  placeholder="Enter option one..."
                                  value={optionOne}
                                  onChange={handleChange}
                                  required
                                />
                                <Divider horizontal>Or</Divider>
                                <Form.Input
                                  id="optionTwo"
                                  placeholder="Enter option two..."
                                  value={optionTwo}
                                  onChange={handleChange}
                                  required
                                />
                                <Form.Button
                                  positive
                                  size="tiny"
                                  fluid
                                  disabled={disabled}
                                >
                                  create new rather
                                </Form.Button>
                              </Form>
                            </Grid.Column>
                          </Grid>
                        </Segment.Group>
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
 const user = users[authUser]
  return {
    authUser,
    user
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveQuestion: (optionOneText, optionTwoText, author) => {
      dispatch(handleSaveQuestion(optionOneText, optionTwoText, author));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRatherPage);
