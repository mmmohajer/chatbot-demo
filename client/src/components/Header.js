import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
	<nav>
		<div className="nav-wrapper">
			<Link className="brand-logo" to = {'/'}> Home </Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to = {'/shop'}> shop </Link></li>
				<li><Link to = {'/about'}> about </Link></li>
			</ul>
		</div>
	</nav>
)

export default Header;