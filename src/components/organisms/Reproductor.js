import * as React from "react";
import {useQuery} from "react-query";

const Reproductor = ({videoId}) => {
	const {isLoading, error, data} = useQuery(videoId, async () => {
		return await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,player&id=${videoId}&key=${process.env.GATSBY_API_KEY}`
		).then((res) => {
			return res.json();
		});
	});

	return <div>{videoId}</div>;
};

export default Reproductor;
