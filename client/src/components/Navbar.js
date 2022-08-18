import React from 'react';
import { Menu } from 'antd';

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
			<a className="logo" href="#">
				The-Last-imdb
			</a>

			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				items={new Array(3).fill(null).map((_, index) => {
					const key = index + 1;
					return {
						key,
						label: `nav ${key}`,
					};
				})}
			/>
		</nav>
	);
};
export default Navbar;
