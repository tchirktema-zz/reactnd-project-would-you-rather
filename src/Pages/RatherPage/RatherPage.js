import React, { Fragment } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { connect } from "react-redux";
import MenuComponent from '../../Components/Menu/MenuComponent';
import UserCard from '../../Components/LeadBoard/UserCard';
import { useParams } from "react-router-dom";


const RatherPage = (props) => {
    const { user} = props;
    let params = useParams();
    return (
      <Fragment>
        <Grid padded="vertically" columns={1} centered>
          <GridRow>
            <GridColumn style={{ maxWidth: 1000 }}>
              <MenuComponent user={user} />
              <Grid padded="vertically" columns={1} centered>
                <GridRow>
                  <GridColumn style={{ maxWidth: 800 }}>
                    <UserCard
                      key={params.question_id}
                      match={params.question_id}
                      unanswered={true}
                    />
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
          </GridRow>
        </Grid>
      </Fragment>
    );

}


function mapStateToProps({ users }) {
  const user = users.authUser;
  return {
    user
  };
}
export default connect(mapStateToProps)(RatherPage); 
