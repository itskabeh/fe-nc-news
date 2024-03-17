/** @format */

import { useState } from "react";
import "./App.css";
// import "./index.css"
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import UserContext from "./contexts/UserContext";
import { Routes, Route } from "react-router-dom";

function App() {
	const [loggedInUser, setLoggedInUser] = useState({
		username: "cooljmessy",
		name: "Peter Messy",
		avatar_url:
			"https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
	});

	return (
		<UserContext.Provider
			value={{ loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser }}
		>
			<Header props={loggedInUser} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles" element={<ArticleList />} />
				<Route path="/articles/:article_id" element={<ArticlePage />} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
