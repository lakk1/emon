import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Modal } from 'semantic-ui-react';
import SignupForm from './signupForm';
import LoginForm from './signupForm';
import { login, signup, logOut } from '../actions/index';

class AppHeader extends Component {
	state = {
		activeItem: null,
	};

	handleItemClick = (e, { name }) => {
		if (name == 'logout') {
			this.props.logOut();
		}
		this.setState({
			activeItem: name,
		});
	};
	closeModal = () =>
		this.setState({
			activeItem: null,
		});

	handleLogin = ({ email, password }) => {
		this.props.login({
			email,
			password,
		});
	};

	handleSignup = ({ email, password }) => {
		console.log(email);
		this.props.signup({
			email,
			password,
		});
	};

	render() {
		let { activeItem } = this.state;

		if (!this.props.auth.logedIn) {
			return (
				<Menu floated={'right'}>
					<Menu.Item
						name="signup"
						active={activeItem === 'signup'}
						onClick={this.handleItemClick}
					/>

					<Menu.Item name="login" active={activeItem === 'login'} onClick={this.handleItemClick} />

					<Modal dimmer={'inverted'} open={activeItem === 'login'} onClose={this.closeModal}>
						<Modal.Header> Login </Modal.Header>
						<Modal.Content>
							<LoginForm onSubmit={this.handleLogin} />
						</Modal.Content>
					</Modal>

					<Modal dimmer={'inverted'} open={activeItem === 'signup'} onClose={this.closeModal}>
						<Modal.Header> Signup </Modal.Header>
						<Modal.Content>
							<SignupForm onSubmit={this.handleSignup} />
						</Modal.Content>
					</Modal>
				</Menu>
			);
		}

		return (
			<Menu floated={'right'}>
				<Menu.Item name="user" active={activeItem === 'user'} onClick={this.handleItemClick} />
				<Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
			</Menu>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

function mapDispatchToprops(dispatch) {
	return bindActionCreators(
		{
			login,
			signup,
			logOut,
		},
		dispatch,
	);
}

export default connect(mapStateToProps, mapDispatchToprops)(AppHeader);
