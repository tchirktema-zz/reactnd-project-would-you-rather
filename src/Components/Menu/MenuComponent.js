import React, { useEffect, useState } from "react";
import { Menu, Image, Button, Label } from "semantic-ui-react";
import {connect} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { setAuthUser } from "../../Actions/AuthUserActions";

const MenuComponent = (props) => {
  const [activeItem, setActiveItem] = useState("home")
  const { user, logoutUser } = props;
  const navigate = useNavigate()
  
  const handleLogout = (e) => {
    e.preventDefault()
    logoutUser();
    navigate("/login",{replace: true})
  }

  useEffect(() => {
    if(window.location.pathname === '/new'){
      setActiveItem('new')
    }
    if(window.location.pathname === '/leader'){
      setActiveItem("leader");
    }
  }, [activeItem])

  return (
    <div>
      <Menu pointing>
        <Menu.Item name="home" active={activeItem === "home"}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item name="new" active={activeItem === "new"}>
          <Link to="/new">Add Rather</Link>
        </Menu.Item>
        <Menu.Item name="leader" active={activeItem === "leader"}>
          <Link to="/leader">Leader Rather</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Image
              style={{ width: "30px", height: "auto" }}
              src={user.avatarURL}
              circular
              verticalAlign="middle"
            />
          </Menu.Item>
          <Menu.Item>
            <Button as="div" labelPosition="right">
              <Button color="red">{user.name}</Button>
              <Label
                as="a"
                basic
                color="red"
                pointing="left"
                onClick={handleLogout}
              >
                Logout
              </Label>
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );

}

function mapStateToProps({ authUser,users }) {
  const user = users[authUser];
  return {
    user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(setAuthUser(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent); 
