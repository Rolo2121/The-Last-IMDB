import React from 'react';

const Footer = () => {
	return (
		<footer className="w-100 mt-auto bg-secondary p-4">
			<div className="container">
				&copy;{new Date().getFullYear()} The Last IMDB
			</div>
		</footer>
	);
};

export default Footer;
