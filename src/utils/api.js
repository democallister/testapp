var axios = require('axios');


function getProfile (username) {
	return axios.get('https://api.github.com/users/' + username)
	.then(function (user) {
	return user.data;
	});
}

function getRepos (username) {
	return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getStarCount (repos) {
	return repos.data.reduce(function (count, repo) {
	return count + repo.stargazers_count;
	}, 0);
}
function handleError (error){
	console.warn(error);
	return null;
}
function getUserData (player) {
	return axios.all ([
	getProfile(player),
	getRepos(player)
	]).then(function (data) {
	var profile = data[0];
	var repos = data[1];
	
	return{
	profile: profile,
	stars: getStarCount(repos)
	}
	})
}

module.exports = {
	search: function (player){
	return getUserData(player)
	.then(function (data) {return data})
	.catch(handleError);
	}};
