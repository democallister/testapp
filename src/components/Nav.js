var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav (){
	return(
	<ul className = 'nav'>
	<li>
	 <NavLink exact activeClassName='active' to='/'>
	 Tabs
	 </NavLink>
	</li>
	<li>
	 <NavLink activeClassName='active' to='/dog'>
	 Dog
	 </NavLink>
	</li>
	<li>
	 <NavLink activeClassName='active' to='/search'>
	 Search
	 </NavLink>
	</li>
	</ul>	
)	
}
module.exports = Nav;
