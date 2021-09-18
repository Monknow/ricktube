import * as React from "react";
import {useQuery} from "react-query";
import {Link} from "gatsby";

const VideoThumbnail = ({videoId}) => {
	const {isLoading, error, data} = useQuery(videoId, async () => {
		return await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${process.env.GATSBY_API_KEY}`
		).then((res) => {
			return res.json();
		});
	});

	return (
		<Link to={`/watch/${videoId}`}>
			{!isLoading && <img loading="lazy" src={data.items[0].snippet.thumbnails.default.url} />}
		</Link>
	);
};

export default VideoThumbnail;
/* GET https://www.googleapis.com/youtube/v3/videos */
