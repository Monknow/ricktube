import * as React from "react";
import Reproductor from "../../components/organisms/Reproductor";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const WatchVideo = ({videoId}) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Reproductor videoId={videoId} />
		</QueryClientProvider>
	);
};

export default WatchVideo;
