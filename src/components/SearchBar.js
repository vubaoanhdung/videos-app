import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};
	render() {
		return (
			<div
				className="ui segment"
				style={{ marginTop: "10px", marginBottom: "30px" }}
			>
				<form onSubmit={this.onFormSubmit} className="ui form">
					<label className="ui label" htmlFor="search-term">
						Search Term
					</label>
					<input
						onChange={this.onInputChange}
						className="ui input"
						type="text"
						id="search-term"
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
