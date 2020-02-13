import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


class Welcome extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-color">
                        <a class="navbar-brand" href="#">Jhana</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarText">
                            <ul class="navbar-nav ml-auto ">

                                <li class="nav-item">
                                    <a href="/login" class="badge badge-warning">LogIn</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/signup" class="badge badge-warning">Sign Up</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>

                <div class="container">
                    <div class="row pt-5 ">
                        <div class="col-sm-5">
                            <img src="img/1.png" alt="" />
                        </div>

                        <div class="col-sm-7 ">
                            <p class="bheader">Jhana is a space for survivors of sexual violence to begin the process of healing through education, self-expression and community.</p>
                        </div>
                    </div>
                </div>
                <div class="hborder w-100"></div>

                <div class="container">
                    <div class="row pt-5 m-auto">
                        <div class="col-sm-4">
                            <span class="badge badge-warning bheader m-auto d-block">About Sexual Violence </span>
                            <img class="pt-3 m-auto d-block" src="img/3.png" alt="" width="50%" />
                        </div>

                        <div class="col-sm-4">
                            <span class="badge badge-warning bheader m-auto d-block"> For Survivors</span>
                            <img class="pt-3 m-auto d-block" src="img/4.png" alt="" width="50%" />
                        </div>

                        <div class="col-sm-4">
                            <span class="badge badge-warning bheader m-auto d-block"> For Family & Friends</span>
                            <img class="pt-3 m-auto d-block" src="img/5.png" alt="" width="60%" />
                        </div>
                    </div>
                </div>
                {/* <section >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert">Okay</button>
                                    <div class="row text-white">
                                        <div class="col-sm-5 font-weight-bold">
                                            <h1>Trigger Warning</h1>
                                        </div>

                                        <div class="col-sm-6">
                                            <p class="bcopy">The following content may contain trigering and/or sensitive material about sexual violance</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        )
    }
}

export default Welcome
