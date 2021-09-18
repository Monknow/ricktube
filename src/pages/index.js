import * as React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import Inicio from "../components/organisms/Inicio";

const queryClient = new QueryClient();

// markup
const IndexPage = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Inicio />
		</QueryClientProvider>
	);
};

export default IndexPage;
