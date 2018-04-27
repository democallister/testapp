var React = require('react');
var Tabs = require('./Tabs');
var Dog = require('./Dog');
var Search = require('./Search');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Switch = ReactRouter.Switch;

class App extends React.Component{
	render(){
		return(
		<Router>
		<div className = 'container'>
		<Nav />
		 <Switch>
		  <Route exact path = '/' component={Tabs} />
		  <Route path = '/dog' component={Dog} />
		  <Route path = '/search' component={Search} />
		  <Route render={function (){
			return <p> ERROR 404 page does not exist</p>
			}} />
		 </Switch>
		</div>
		</Router>
	)
	}
	}

module.exports = App;
