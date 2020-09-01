import React from 'react';

function SingleVideo({ clickVideo, video }) {
	return (
		<div onClick={() => clickVideo(video)}>
			<img src={video.snippet.thumbnails.default.url} />
			<div>{video.snippet.title}</div>
		</div>
	);
}

export default SingleVideo;
