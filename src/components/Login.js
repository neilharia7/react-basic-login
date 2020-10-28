import React from "react";

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row
} from "reactstrap";
import {Link} from "react-router-dom";
import colors from "../config";
import {GoogleLogin} from 'react-google-login';


const CLIENT_ID = "<`GOOGLE CLIENT ID`>"

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isLogged: false,
			accessToken: ""
		}

		this.login = this.login.bind(this);
		this.handleLoginFailure = this.handleLoginFailure.bind(this);
		this.logout = this.logout.bind(this);
		this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
	}

	login(response) {
		if (response.accessToken) {
			console.log("response", response);
			this.setState(state => ({
				isLoggedIn: true,
				accessToken: response.accessToken
			}));
		}
	}

	logout(response) {
		this.setState(state => ({
			isLoggedIn: false,
			accessToken: ''
		}));
	}

	handleLoginFailure(response) {
		alert('Failed to log in ')
	}

	handleLogoutFailure(response) {
		alert('Failed to log out')
	}

	render() {
		return (
			<>
				<Col lg="5" md="7">
					<Card className="bg-secondary shadow border-0">
						<CardHeader className="bg-transparent pb-5">
							<div className="text-muted text-center mt-2 mb-3">
								<small>Sign in with</small>
							</div>
							<div className=" text-center">
								<GoogleLogin // className="btn-inner--text"
									clientId={CLIENT_ID}
									buttonText='Google'
									onSuccess={this.login}
									onFailure={this.handleLoginFailure}
									cookiePolicy={'single_host_origin'}
									responseType='code,token'
								/>
							</div>
						</CardHeader>
						<CardBody className="px-lg-5 py-lg-5">
							<div className="text-center text-muted mb-4">
								<small>Or sign in with credentials</small>
							</div>
							<Form role="form">
								<FormGroup className="mb-3">
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-email-83"/>
											</InputGroupText>
										</InputGroupAddon>
										<Input placeholder="Email" type="email" autoComplete="new-email"/>
									</InputGroup>
								</FormGroup>
								<FormGroup>
									<InputGroup className="input-group-alternative">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ni ni-lock-circle-open"/>
											</InputGroupText>
										</InputGroupAddon>
										<Input placeholder="Password" type="password" autoComplete="new-password"/>
									</InputGroup>
								</FormGroup>
								<div className="custom-control custom-control-alternative custom-checkbox">
									<input
										className="custom-control-input"
										id="customCheckLogin"
										type="checkbox"
										style={{color: colors.loginBackground}}
									/>
									<label
										className="custom-control-label"
										htmlFor="customCheckLogin"
									>
										<span className="text-muted">Remember me</span>
									</label>
								</div>
								<div className="text-center">
									<Link to={"/dashboard"} style={{color: 'inherit', textDecoration: 'inherit'}}>
										<Button
											className="my-1" type="button"
											style={{backgroundColor: colors.loginBackground, color: '#FFF'}}>
											Sign in
										</Button>
									</Link>
								</div>
							</Form>
						</CardBody>
					</Card>
					<Row className="mt-3">
						<Col xs="6">
							<a
								className="text-light"
								href="#"
								onClick={e => e.preventDefault()}
							>
								<small style={{fontWeight: "bold", color: "#FFF"}}>Forgot password?</small>
							</a>
						</Col>
						<Col className="text-right" xs="6">
							<a
								className="text-light"
								href="#pablo"
								onClick={e => e.preventDefault()}
							>
								<small style={{fontWeight: "bold", color: "#FFF"}}>Create new account</small>
							</a>
						</Col>
					</Row>
				</Col>
			</>
		);
	}
}

export default Login;
