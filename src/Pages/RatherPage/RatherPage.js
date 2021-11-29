import React, { Fragment, useEffect } from "react";
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { connect } from "react-redux";
import MenuComponent from '../../Components/Menu/MenuComponent';
import UserCard from '../../Components/LeadBoard/UserCard';
import { useParams, useNavigate } from "react-router-dom";


const RatherPage = (props) => {
    const { user} = props;
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
      if (user === null) {
        navigate("/", {
          state: {
            current: `/questions/${params.question_id}`,
          },
        });
      }
    });
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
