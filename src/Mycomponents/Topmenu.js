import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth0 } from '@auth0/auth0-react';
import Sidenavbar from './Sidenavbar';

function Topmenu() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("200px"); // Initial width of sidebar
  const [mainContentWidth, setMainContentWidth] = useState("calc(100% - 200px)"); // Initial width of main content

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (sidebarOpen) {
      setSidebarWidth("200px");
      setMainContentWidth("calc(100% - 200px)");
    } else {
      setSidebarWidth("55px");
      setMainContentWidth("calc(89% - 55px)");
    }
  };

  return (
    <>
      <div className="inventory_head">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div href="" id="toggleButton" className="togglebtn" onClick={toggleSidebar}>
                <button>&#9776;</button>
              </div>
            </div>
            <div className="col-md-2 inven_user">
              {isAuthenticated ? (
                <>
                  <div><h5>Hello, {user.name}</h5></div>
                </>
              ) : (
                <div><h5>Hello, Guest</h5></div>
              )}
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" placeholder="Search..." name="" />
            </div>
            <div className="col-md-2 orgname">V.K Enterprise pvt ltd.</div>
            <div className="col-md-2 offset-md-2">
              <div className="row">
                <div className="col-md-6 bell">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img src="images/bell.svg" alt="Bell Icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">New message one</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">New message two</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">New message three</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="col-md-6 user">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img src={isAuthenticated ? user.picture : "images/user.svg"} alt="User Icon" style={{ width: '25px', height: '25px' }} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {isAuthenticated ? (
                        <>
                          <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                          <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>
                            Logout
                          </Dropdown.Item>
                        </>
                      ) : (
                        <Dropdown.Item onClick={() => loginWithRedirect()}>Login</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidenavbar toggleSidebar={toggleSidebar} />
      <style>
        {`
          #mySidenav {
            width: ${sidebarWidth};
          }
          #main {
            width: ${mainContentWidth};
          }
          .inventory_head {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
          }
        `}
      </style>
    </>
  );
}

export default Topmenu;
