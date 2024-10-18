import "./App.css";
import Background from "./components/background/background";
import Cursor from "./components/cursor/cursor";
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
			<Cursor />
		</>
	);
}

export default App;
