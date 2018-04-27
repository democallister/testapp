var React = require('react')
var PropTypes = require('prop-types')

class SelectTab extends React.Component{
		render(){
		var choices = ['open up', 'Gnar', 'F.U.N.'];
		return(
			<ul className='choices'>
			{choices.map(function(lang){
			return(
				<li
				style={lang === this.props.selectedTab ? {color: '#ddcc00'}: null} 
				onClick={this.props.onSelect.bind(null, lang)}
				key={lang}>
				{lang}
				</li>
			)
			}, this)}
			</ul>
		)
	}
}
SelectTab.PropTypes = {
	selectedTab: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
};
class Tabs extends React.Component{
	constructor (props) {
	super();
	this.state = {
	selectedTab: 'Gnar'
	};
	this.updateTab = this.updateTab.bind(this);
	}
	updateTab(lang){
	this.setState(function () {
	return{
	selectedTab: lang,
	}
	});
	}
	render(){
		return(
		<div>
		<SelectTab
		selectedTab = {this.state.selectedTab}
		onSelect = {this.updateTab} />
		</div>
		)
	}
	}
module.exports = Tabs;
