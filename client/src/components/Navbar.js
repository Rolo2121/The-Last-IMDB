import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
import '../index.css';
import '../index.css';

// import {
// 	PageHeader,
// 	Breadcrumb,
// 	Layout,
// 	Menu,
// 	Col,
// 	Row,
// 	TimePicker,
// 	Form,
// 	Input,
// 	Button,
// 	Space,
// 	Card,
// } from 'antd';

const AppNavbar = () => {
	// const [showModal, setShowModal] = useState(false);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<a className="App-logo" href="#logo">
				The-Last-imdb
			</a>

			<button className="App-link">Watch List</button>

			<button className="App-link">Liked</button>

			<button className="App-link">Favorites</button>
		</nav>
	);
};
export default AppNavbar;
