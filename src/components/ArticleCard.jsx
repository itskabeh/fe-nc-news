/** @format */

import { Link } from "react-router-dom";
import TimeElapsed from "../utils/TimeElapsed";

function ArticleCard({
	article_id,
	title,
	topic,
	author,
	body,
	created_at,
	article_img_url,
	comment_count,
}) {
	return (
		<section key={article_id}>
			<section
				className="each-card"
				style={{
					border: "4px solid rgba(0, 0, 0, 1)",
					fontFamily: "Lora",
					textAlign: "left",
				}}
			>
				<Link to={`/articles/${article_id}`} style={{ textDecoration: "none" }}>
					<h2 style={{ fontFamily: "Lora" }}>{title}</h2>
				</Link>
				<br></br>
				<p>{topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
				<p>
					<TimeElapsed created_at={created_at} />
					{/* <h6>{created_at}</h6> */}
				</p>
				<Link to={`/articles/${article_id}`} style={{ textDecoration: "none" }}>
					{" "}
					<section className="img-box">
						<img
							src={article_img_url}
							alt="user uploaded picture"
							className="card-img"
						></img>
					</section>
				</Link>
				<section>
					<p>{body}</p>
				</section>
				<Link to={`/articles/${article_id}`} style={{ textDecoration: "none" }}>
					<p className="btn">{comment_count} comments</p>
				</Link>
			</section>
		</section>
	);
}

export default ArticleCard;
