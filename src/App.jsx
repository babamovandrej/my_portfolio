import "./App.css";
import Background from "./components/background/background";
import SideMenu from "./components/side-menu/side-menu";
import SocialsMenu from "./components/socials-menu/socials-menu";
import Sections from "./sections/sections";

function App() {
	return (
		<>
			<Background />
			<SideMenu />
			<SocialsMenu />
			<Sections />
		</>
	);
}

export default App;
