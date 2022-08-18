import React from 'react';
import '../index.css';
import '../index.css';
import {
	PageHeader,
	Breadcrumb,
	Layout,
	Menu,
	Col,
	Row,
	TimePicker,
	Form,
	Input,
	Button,
	Space,
	Card,
} from 'antd';

const Navbar = () => {
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
			<button className="App-link" type="link" shape="round" size="large">
				Watch List
			</button>

			<button className="App-link" type="link" shape="round" size="small">
				Liked
			</button>
			<button className="App-link" type="link" shape="round" size="large">
				Favorites
			</button>
		</nav>
	);
};
export default Navbar;
