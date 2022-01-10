import React from 'react'
import "./style.less"

interface NavbarProps {
	loggedIn: boolean
}

const Navbar: React.FC<NavbarProps> = ({ loggedIn }) => (
	<div className='navbar'>
		<a href="home">home</a>
		{!loggedIn && <a href="home">home</a>}
		{loggedIn && <a href="orders">your orders</a>}
		{!loggedIn && <a href="home">login</a>}
		{loggedIn && <a href="orders">logout</a>}
	</div>
)

export default Navbar;