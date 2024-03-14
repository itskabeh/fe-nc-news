/** @format */

import { fetchAllArticles } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

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
				paddingTop: "80px",
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
						let isVotes = "Vote";
						if (votes > 0) {
							isVotes = { votes };
						}

						return (
							<ArticleCard key={article_id}>
								<section
									className="each-card"
									style={{ border: "4px solid rgba(0, 0, 0, 1)" }}
								>
									<h2>{title}</h2>
									<br></br>
									<p>{topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
									<p>{author}</p>
									<p>{Date(created_at)}</p>
									<section className="img-box">
										<img
											src={article_img_url}
											alt="user uploaded picture"
											className="card-img"
										></img>
									</section>
									<section>
										<p>{body}</p>
									</section>
									<p className="btn">{comment_count} comments</p>
									<section>
										<button>
											<FaRegThumbsUp color="#202142" />
										</button>
										<span> {isVotes}</span>
										<button>
											<FaRegThumbsDown color="#202142" />
										</button>
									</section>
								</section>
							</ArticleCard>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default ArticleList;
