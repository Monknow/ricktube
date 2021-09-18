import * as React from "react";
import {useQuery} from "react-query";
import VideoThumbnail from "../molecules/VideoThumbnail";

const Inicio = () => {
	const {isLoading, error, data} = useQuery("paginaPrincipal", async () => {
		return await fetch(
			`https://youtube.googleapis.com/youtube/v3/search?maxResults=25&q=rickroll&topicId=rickrolling&key=${process.env.GATSBY_API_KEY}`
		).then((res) => res.json());
	});

	return (
		<div>
			{!isLoading &&
				data &&
				data.items.map(({id}) => {
					return <VideoThumbnail key={id.videoId} videoId={id.videoId} />;
				})}
		</div>
	);
};

export default Inicio;
