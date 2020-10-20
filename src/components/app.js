import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { items: [], selectedVideo: null };
	onFormSubmit = async (term) => {
		const response = await axios.get(
			"https://www.googleapis.com/youtube/v3/search",
			{
				params: {
					key: "AIzaSyCO0fDWj4oIkzavFFYXSGmR8pEj1mQ4bmc",
					part: "snippet",
					maxResults: 5,
					order: "viewCount",
					q: term,
					type: "video",
				},
			}
		);
		this.setState({
			items: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};
	onVideoSelected = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelected={this.onVideoSelected}
								items={this.state.items}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
