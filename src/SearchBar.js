import React from 'react';

class SearchBar extends React.Component {
	state = { userInput: '' };

	render() {
		return (
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						this.props.userSubmit(this.state.userInput);
					}}>
					<input
						type='text'
						value={this.state.userInput}
						onChange={(event) => this.setState({ userInput: event.target.value })}
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
