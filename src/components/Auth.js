import React from "react";
import {Container, Row} from "reactstrap";

import Login from "./Login";
import colors from "../config";

class Auth extends React.Component {

	render() {
		return (
			<>
				<div className="main-content" style={{backgroundColor: colors.loginBackground}}>
					{/*<AuthNavbar />*/}
					<div className="header bg-gradient-info py-7 py-lg-8">

					</div>
					{/* Page content */}
					<Container className="mt--8 pb-5">
						<Row className="justify-content-center">
							<Login/>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default Auth;
