/** @format */

import { fetchAllArticles } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticleList() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetchAllArticles().then((res) => {
			const data = res.data.articles;
			setArticles(data);
		});
	}, [setArticles]);

	return (
		<div
			className="article-grid"
			style={{
				paddingTop: "110px",
				paddingLeft: "50px",
				paddingRight: "50px",
				paddingBottom: "90px",
			}}
		>
			<ul>
				{articles.map(
					({
						article_id,
						title,
						topic,
						author,
						body,
						created_at,
						votes,
						article_img_url,
						comment_count,
					}) => {
						return (
							<ArticleCard
								key={article_id}
								article_id={article_id}
								title={title}
								topic={topic}
								author={author}
								body={body}
								created_at={created_at}
								votes={votes}
								article_img_url={article_img_url}
								comment_count={comment_count}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default ArticleList;
