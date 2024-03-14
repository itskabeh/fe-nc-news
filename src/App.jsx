/** @format */

import { useState } from "react";
import "./App.css";
// import "./index.css"
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import UserContext from "./contexts/UserContext";

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
			<div className="gradient_background"></div>

			<Header props={loggedInUser} />
			<ArticleList />
		</UserContext.Provider>
	);
}

export default App;
