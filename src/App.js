import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div class="flex flex-col justify-center items-center md:overflow-hidden bg-bgprimary w-auto scroll-smooth">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/About" element={<About />}></Route>
				<Route exact path="/Contact" element={<Contact />}></Route>
				<Route exact path="/Work" element={<Work />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
