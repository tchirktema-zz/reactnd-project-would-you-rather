import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router';
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import MenuComponent from '../../Components/Menu/MenuComponent';
import RatherBoardPage from "../RatherPage/RatherBoardPage";

const HomePage = (props) => {
    const {authUser,user} = props
    const navigate = useNavigate()

    useEffect(() => {
        if(!authUser){
            navigate("/login",{replace: true})
        }
    })
    return (
      <Fragment>
        <Grid padded="vertically" columns={1} centered>
          <GridRow>
            <GridColumn style={{ maxWidth: 1000 }}>
              <MenuComponent user={user} />
              <RatherBoardPage />
            </GridColumn>
          </GridRow>
        </Grid>
      </Fragment>
    );

}


function mapStateToProps({ authUser, users }) {
  const user = users.authUser
  return {
    authUser,
    user
  };
}
export default connect(mapStateToProps)(HomePage); 