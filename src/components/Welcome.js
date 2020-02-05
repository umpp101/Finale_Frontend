import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";


class Welcome extends Component {
    render() {
        return (
            <div>
                <div class="header">
                    <Navbar>
                        <Navbar.Brand href="/homepage" align="center">Jhana</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link className="nav-button1" href="/login">Sign In</Nav.Link> <br></br>
                                <Nav.Link className="nav-button2" href="/signup">Sign Up</Nav.Link> <br></br>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div class="welcome-content">
                    <img align="left" className="Welcome-pic" src="https://lh3.googleusercontent.com/Ibf9yeD-rWeWRdlt3PO0ajIET0HrYOdHkyD-gD_p3LVcr4zrB_1rmtR3iQDBpHYaWYGwXrIPHny8yL4bp14ehGoj9AgdOrWd9ZrHgyNRcHR7Rh1yN0U9OwDgC_zzVAr7u3tLwnMq" />
                    <p align="center" className="Welcome-p"> Jhana is a space for survivors of sexual violence to begin the process of healing through education, self-expression and community.</p>
                </div>
                </div>
                <div class="footer">
                {/* <div class="row">
  <div class="column">education</div>
  <div class="column">education</div>
  <div class="column">education</div>
</div> */}
<section class="columns">
	
	<div class="column">
    <Nav.Link className="welcome-buttons1">About Sexual Violence</Nav.Link>
		{/* <button classname="welcome-buttons1">About Sexual Violence</button> */}
            <img className="welcome-bottom-pics" src="https://lh6.googleusercontent.com/vq1BI3sohIhgl5rhC3UK28Lyu_qEqpoR50lM8PN1ZDcTgvv3ScxwLvcR-Xgcyx45k_4goj_yG4eer8Q877IJdMMvspytEz7OKTvYvRfIDE_s-Dr0rlWqLO6SKB4GAHZtCAP9Fy_-"/>
	</div>
	
	<div class="column">
    <Nav.Link className="welcome-buttons1">For Survivors </Nav.Link>
		{/* <button classname="welcome-buttons2">For Survivors </button> */}
		<img className="welcome-bottom-pics" src="https://lh3.googleusercontent.com/wP7NZEEFsMhR6bLpxLNYwUsNA-SXAoEpaoWPBJeARPkmlKVBnHCwHH6oX6aeYU7eZ1xfGMeKlbeXVfzMjv4sioZCnTodcuSbbPy6s8qlBxmEtCKnm9KvBG3VSp6lbTMiDb0iyXms"/>
	</div>
  
  <div class="column">
  <Nav.Link className="welcome-buttons1">For Family and Friends </Nav.Link>
		{/* <button classname="welcome-buttons3">For Family and Friends </button> */}
		<img className="welcome-bottom-pics" src="https://lh6.googleusercontent.com/LKoPYDMg3Ya19I4CJo9Mk2pqTmoRuMFNG1sQ1CmbKO6rmGSywMh6D8ZdK8XeOw2mhaU9jFkTgMJzdn7zkfPuAXPt16RYteFID51Wvfw"/>
	</div>
    
	
</section>	
                </div>
                {/* </div> */}
          </div>
        )
    }
}

export default Welcome
