import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Navbar, Nav } from "react-bootstrap";

export class Homepage extends Component {
    intro =
        "This Community Space is for survivors, loved ones, educators to share their experiences, express their thoughts, connect with other members of their community who have been affected by sexual assault. ";
img = "https://lh4.googleusercontent.com/x7skKzDs0peFDUV-BODxU7x9UYpxQyrPhQxwx1Df6tU1HFcxzPj0GHgcdIpU2bv9-LjwCYYcCQ1KevL0rr0D2p-V6Kmt3HIkA-2_fLTFK6QfntGyVQ7RVkZAg2Ni1YbGTzYS5xu1"

    renderPosts = () => {
        console.log("Posts", this.props.allPosts);
        if (this.props.allPosts) {
            const result = this.props.allPosts.map(post => {
                return (
                    // {<img src={this.img}>}
                    <Card className="postCards">
                        <Card.Title className="card-title1"> Mmuse </Card.Title>
                        <Card.Body>
                            <Card.Header className="card-header1">My Reality</Card.Header>
                            <Card.Text>Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.

Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.

Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.

Want to Start Your Own Blog?
Remember that it doesn’t cost the earth to start your own blog. You can be up and running for as little as $1.45 per month with Hostinger.

Bluehost offer web hosting, Free SSL, Email, web builder and a FREE DOMAIN for as little as $2.95 a month.</Card.Text>
                        </Card.Body>
                    </Card>
                );
            });
            return result;
            console.log("result:", result);
        }
    };
    render() {
        // console.log(this.props.allPosts)
        //console.log(result)
        return (
            //             <div className="welcome-div">
            //                 <label className="welcomePageLogo"> Jhana </label>
            //                 <div className="welcome-button-div">
            //                     <Link to="/">
            //                         <button type="submit" className="btn btn-homepage-page-1">
            //                             Journal
            //               </button>
            //                     </Link>

            //                     <Link to="/community">
            //                         <button type="submit" className="btn btn-welcome-page-2">
            //                             Community
            //               </button>
            //                     </Link>

            //                     <Link to="/login">
            //                         <button type="submit" className="btn btn-homepage-page-3">
            //                             {this.props.currentUser.user_name}
            //                         </button>
            //                     </Link>
            //                     <div className="Main-div">
            //                         <img className="Homepage-pic" src="https://lh5.googleusercontent.com/DEVopYWLqMZVH541bmSHGNlQMn5lbcMkUw6val09DwnGHRSPISm43E9-TfsPaH0HnnY_Oo7HqHvRxV6apH014hX57FbOfa5QbPvEjwc"/>
            //                         <h2 className="Homepage-text-greeting">
            //                             {" "}
            //                             Welcome to the Community!{" "}
            //                         </h2>
            //                         <p className="Homepage-text-paragraph"align="center">{this.intro}</p>
            //                     </div>
            // <div className="Secondary-Div">

            //                     <div className="NewPost-div">
            //                         <h3>Hi {this.props.currentUser.first_name}!</h3>
            //                         <p> Create a New Post </p>
            //                         <p> Search Community</p>
            //                     </div>
            //                     {/* <div className="Post-div"> */}

            //                 </div>

            //                 <div>
            //                     {this.renderPosts()}
            //                 </div>
            //                 </div>

            //             </div>

            // );
            <div>
                <div class="header">
                    <Navbar>
                        <Navbar.Brand href="/homepage">Jhana</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link className="nav-button1" href="">My Journal</Nav.Link> <br></br>
                                <Nav.Link className="nav-button2" href="">Community</Nav.Link> <br></br>
                                <Nav.Link className="nav-button3" href="">Logout</Nav.Link> <br></br>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div class="content">
                    <img align="center" className="Homepage-pic" src="https://lh5.googleusercontent.com/DEVopYWLqMZVH541bmSHGNlQMn5lbcMkUw6val09DwnGHRSPISm43E9-TfsPaH0HnnY_Oo7HqHvRxV6apH014hX57FbOfa5QbPvEjwc" />
                    <h2 align="center">Welcome to our Community</h2>
                    <p className="Homepage-p">{this.intro}</p>
                </div>

                <div class="footer">
                    <div className="NewPost-div">
                        <br></br>
                        <p>Hi {this.props.currentUser.first_name}!</p>
                        <p> Create a New Post </p>
                        <p> Search Community</p>
                    </div>
                    <div>

                        {this.renderPosts()}
                    </div>
                </div>

        </div>
        );
    }
}
export default Homepage;
