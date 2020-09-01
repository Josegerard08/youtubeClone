import React from 'react';
import SearchBar from './SearchBar';
import youtube from './api/YoutubeApi';
import VideoList from './VideoList';
import MainVideo from './MainVideo';
const KEY = 'AIzaSyDD2MuyHqzhVlMkUY23cloQGUdHxm_ZLoc';

class App extends React.Component {
	state = { videos: [], selectiveVideo: null };

	userSubmit = async (input) => {
		const response = await youtube.get('/search', {
			params: {
				q: input,
				part: 'snippet',
				type: 'video',
				maxResults: 8,
				key: KEY
			}
		});

		this.setState({ videos: response.data.items });
	};
	clickVideo = (x) => {
		this.setState({ selectiveVideo: x });
	};
	render() {
		return (
			<div className='App'>
				<SearchBar userSubmit={this.userSubmit} />
				<MainVideo selectiveVideo={this.state.selectiveVideo} />
				<VideoList videos={this.state.videos} clickVideo={this.clickVideo} />
			</div>
		);
	}
}

export default App;
