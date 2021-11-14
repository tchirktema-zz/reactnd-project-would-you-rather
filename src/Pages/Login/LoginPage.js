import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Dimmer,
  Loader,
  FormDropdown,
  Header,
  HeaderContent,
  SegmentGroup,
  GridRow,
  GridColumn
} from "semantic-ui-react";

import { connect } from "react-redux";
import { setAuthUser } from "../../Actions/AuthUserActions";
import { useNavigate } from "react-router";

const LoginPage = (props) => {
  const [loading, setLoading] = useState(false)
  const [selectUser, setSelectUser] = useState('');
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();
  
  const { users, authUser } = props;

  useEffect(() => {
    if (selectUser) {
      setDisabled(false);
    }
    if (authUser) {
      navigate("/home", { replace: true });
    }
  }, [selectUser, authUser, navigate]);

  
  const generateFormDropdown = () => {
     return users.map((user) => ({
       key: user.id,
       text: user.name,
       value: user.id,
       image: { avatar: true, src: user.avatarURL },
     }));
  }

  const onChange = (e, data) => {
    e.preventDefault();
    setSelectUser((prevState) => data.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    new Promise((res, rej) => {
      setLoading(true);
      setTimeout(() => res(), 500);
    }).then(() => {
      props.loginUser(selectUser);
      setLoading(false)
    });
  }



  return (
    <Fragment>
      <Grid padded="vertically" columns={1} centered>
        <GridRow>
          <GridColumn style={{ maxWidth: 550 }}>
            <SegmentGroup>
              <Container textAlign="center">
                <Header attached="top">
                  <HeaderContent>Welcome to Would you rather App</HeaderContent>
                </Header>
                <Grid padded textAlign="center">
                  <Grid.Row className="login">
                    <Grid.Column width={16}>
                      {loading === true && (
                        <Dimmer active inverted>
                          <Loader inverted content="Loading" />
                        </Dimmer>
                      )}
                      <br />
                      <Container textAlign="center" className="padded">
                        <Form onSubmit={handleOnSubmit}>
                          <FormDropdown
                            placeholder="Select a user"
                            fluid
                            selection
                            search
                            scrolling
                            options={generateFormDropdown()}
                            onChange={onChange}
                            required
                          />

                          <Button color="youtube" fluid disabled={disabled}>
                            Login
                          </Button>
                        </Form>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <br />
              </Container>
            </SegmentGroup>
          </GridColumn>
        </GridRow>
      </Grid>
    </Fragment>
  );

}


function mapStateToProps({ users, authUser }) {
  return {
    users: Object.values(users),
    authUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (id) => {
      
      dispatch(setAuthUser(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);