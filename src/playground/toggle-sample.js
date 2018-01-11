class VisibilityToggler extends React.Component {
	constructor (props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.state = {
			hidden: true
		}
	}

	handleToggle() {
		this.setState((prevState) => {
			return {
				hidden: !prevState.hidden
			}
		})
	}
	
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggle}>{this.state.hidden ? 'Show Details' : 'Hide Details'}</button>
				{!this.state.hidden && <p>Some detail</p>}
			</div>
		);
	}
}

const appRoot = document.getElementById('app');

ReactDOM.render(<VisibilityToggler />, appRoot);
