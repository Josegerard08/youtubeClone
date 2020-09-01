import React from 'react';
import SingleVideo from './SingleVideo';
function VideoList({ clickVideo, videos }) {
	const list = videos.map((video) => {
		return <SingleVideo clickVideo={clickVideo} video={video} />;
	});

	return <div> {list}</div>;
}

export default VideoList;
