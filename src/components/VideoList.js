import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ items, onVideoSelected }) => {
	const renderVideos = items.map((video) => {
		return <VideoItem video={video} onVideoSelected={onVideoSelected} />;
	});
	return (
		<div className="video-list ui relaxed divided list">{renderVideos}</div>
	);
};

export default VideoList;
