import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Header,
  HeaderContent,
  SegmentGroup,
  GridRow,
  GridColumn,
  Icon
} from "semantic-ui-react";


const NotFoundPage = (props) => {
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
                          <Icon name="ban" circular color="red"/>
                          <Header.Content>404</Header.Content>
                        </Header>
                        
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