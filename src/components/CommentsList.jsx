/** @format */

import { fetchCommentsByArticle } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";
import { set } from "date-fns";

function CommentsList({ article_id }) {
	const [articleComments, setArticleComments] = useState([]);

	useEffect(() => {
		fetchCommentsByArticle(article_id).then((res) => {
			// console.log(res.data, "<<<<< from comment list");
			const comments = res.data;
			setArticleComments(comments);
		});
	}, [article_id]);

	return (
		<>
      <AddComment article_id={article_id} articleComments={articleComments} setArticleComments={setArticleComments}/>
			{articleComments.map((comment, i) => {
				return <CommentsCard comment={comment} key={i} />;
			})}
		</>
	);
}

export default CommentsList;
