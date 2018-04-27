var react = require('react');
var QueryString = require('query-string');
var api = require('../utils/api');

class Results extends React.Component{
	constructor(props) {
	 super(props);
	
	 this.state = {
	  player: null,
	  loading: true
	 }
	}
	componentDidMount(){
		var player = QueryString.parse(this.props.location.search);
		api.getUserData(player)
	}
	render() {
	var player = this.state.player;
	var loading = this.state.loading;
	if(loading === true) {
	return <p>Loading...</p>
	}
	return
	 <div>Resuts</div>
	)
}
}

module.exports = Results
