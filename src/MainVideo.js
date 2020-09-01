import React from 'react';

function MainVideo({ selectiveVideo }) {
	console.log(selectiveVideo);
	if (!selectiveVideo) {
		return <div> type for a video </div>;
	}
	const id = selectiveVideo.id.videoId;
	console.log(id);
	return (
		<div>
			<iframe
				width='560'
				height='300'
				allowfullscreen
				src={`https://www.youtube.com/embed/${id}`}
			/>
		</div>
	);

	return <div> hi</div>;
}
export default MainVideo;
