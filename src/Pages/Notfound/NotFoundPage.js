import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  HeaderContent,
  SegmentGroup,
  GridRow,
  GridColumn,
  Icon,
  Button
} from "semantic-ui-react";
import {useNavigate } from "react-router-dom";

const NotFoundPage = (props) => {
  const navigate = useNavigate();

  const goBackHome = (e) => {
    e.preventDefault();
    navigate("/home", { replace: true });
  }
  return (
    <Fragment>
      <Grid padded="vertically" columns={1} centered>
        <GridRow>
          <GridColumn style={{ maxWidth: 550 }}>
            <SegmentGroup>
              <Container textAlign="center">
                <Header attached="top">
                  <HeaderContent>
                    Welcome to Would you rather App
                  </HeaderContent>
                </Header>
                <Grid padded textAlign="center">
                  <Grid.Row className="login">
                    <Grid.Column width={16}>
                      <Header as="h2" icon textAlign="center">
                        <Icon name="ban" circular color="red" />
                        <Header.Content>404</Header.Content>
                        <br />
                      </Header>
                      <Button animated onClick={goBackHome}>
                        <Button.Content visible>
                          Go Back To Home
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name="arrow left" />
                        </Button.Content>
                      </Button>
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
export default NotFoundPage; 