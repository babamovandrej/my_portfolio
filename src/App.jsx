import "./App.css";
import Landing from "./landing/landing";
import useLoading from "./hooks/useLoading";
import Loading from "./loading/loading";

function App() {
	const {loading, progress} = useLoading();

	return (
		<>
			{loading ? <Loading progress={progress} /> : <Landing />}
		</>
	);
}

export default App;

