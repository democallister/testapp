var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');


class Preview extends React.Component {
	constructor(props){
		super(props);
		this.state={
			profile: null,
			error: null,
			stars: 0,
			loading: true,
		}
	}

	componentDidMount(){
		console.log('searching');
		api.search(this.props.username)
		.then(function(info){
			console.log(info.stars);
			this.setState(function(){
                		return{
                			profile: info,
                			error: null,
					stars: info.stars,
					loading:  false,
                		};
	});
	}.bind(this));
	}

	render(){
		var stars = this.state.stars;
		var loading = this.state.loading;
		var profile = this.state.profile;
		if(loading === true){
			return <p>Loading...</p>
		}

		return (
			<div>
	 		<div className='column'>
	 		<img
	 		className='avatar'
	 		src={this.props.avatar}
	 		alt={'Avatar for ' +  this.props.username}
	 		/>
			
	 		<h2 className='username'>@{this.props.username}</h2>
			<ul className='userinfo'>
			 {profile.profile.name && <li>{profile.profile.name}</li>}
			 {profile.profile.location && <li>{profile.profile.location}</li>}
			 {profile.profile.company && <li>{profile.profile.company}</li>}
			 <li>Followers: {profile.profile.followers}</li>
			 <li>Following: {profile.profile.following}</li>
			 <li>Public Repos: {profile.profile.public_repos}</li>
			 {profile.profile.blog && <li><a href={profile.profile.blog}>{profile.profile.blog}</a></li>}
			 <li>{stars} stars</li>
			 </ul>
			

	 		</div>
	 		<button
	 		className='reset'
	 		onClick={this.props.onReset.bind(null)}>
	 		Search Again
	 		</button>
	</div>
	)
	}}

Preview.PropTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	onReset: PropTypes.func.isrequired
}

class Input extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);	
	}
	handleChange(event){
		var value = event.target.value;
		this.setState(function(){
	 		return{
	 		username: value
	 	}
	
	})
	}

	handleSubmit(event){
	 	event.preventDefault();
	 	this.props.onSubmit(
	  	this.state.username
	  	)
	}
	render(){
	    return(
	 	<form className='column' onSubmit={this.handleSubmit}>
	 	<label className = 'header' htmlFor='username'>
	 	{this.props.label}
	 	</label>
		<input
	 	id='username'
	 	placeholder='github username'
	 	type='text'
	 	autoComplete='off'
	 	value={this.state.username}
	 	onChange={this.handleChange}
	 	/>
	 	<button
	  	className='button'
	  	type='submit'
	  	disabled={!this.state.username}>
	  	submit
	 	</button>
	 	</form>
	)}}

Input.PropTypes = {
 	label: PropTypes.string.isRequired,
 	onSubmit: PropTypes.func.isRequired
}

Input.defaultprops = {
	label: 'Username',
}

class Search extends React.Component{
	constructor(props){
	 	super(props);
	 	this.state = {
	 		name: '',
	 		image: null,
	 		loading: false
	 	};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleSubmit(username){
		 this.setState(function(){
		 var newState = {};
		 newState['name'] = username;
		 newState['image'] = 'https://github.com/' + username + '.png?size=200';
		 return newState;
	});
	}
	handleReset(){
		this.setState(function() {
		var newState = {};
		newState['name'] = '';
		newState['image'] = null;
		return newState;
		});
	}
        render(){
		var name = this.state.name;
		var image = this.state.image;
		var loading = this.state.loading;
		if(loading === true) {
			return <p>loading...</p>
		}
        return(
	 	<div>
         	<div className='search-container'>
         	{!name &&
	 	<Input 
	  	label='search here'
	  	onSubmit={this.handleSubmit}
	 	/>}
	 	{image !== null &&
	 	<Preview
	 	avatar={image}
	 	username={name}
	 	onReset={this.handleReset}
	 	/>}
        	</div>
		</div>
	);
	}
}
module.exports = Search;
