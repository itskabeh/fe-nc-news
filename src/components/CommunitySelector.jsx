/** @format */

import { fetchAllTopics } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";

function CommunitySelector() {
	const [topic, setTopic] = useState([]);

	useEffect(() => {
		fetchAllTopics().then((res) => {
			const data = res.data.topics;
			setTopic(data);
		});
	}, [setTopic]);

	return topic.map(({ slug }, i) => {
		return (
			<option key={i} value={slug} style={{ textAlign: "center" }}>
				{slug.charAt(0).toUpperCase() + slug.slice(1)}
			</option>
		);
	});
}

export default CommunitySelector;
