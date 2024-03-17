/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import ContainedButton from "../shared/ContainedButton";
import { useState } from "react";
import { commentOnArticle } from "../api/api";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Button from "../shared/Button";
import SimpleAlert from "../shared/Alert";

export default function AddComment({
	article_id,
	articleComments,
	setArticleComments,
}) {
	const { loggedInUser } = useContext(UserContext);
	const [newComment, setNewComment] = useState("");

	// console.log(articleComments)
	// console.log(loggedInUser)

	const handleTextInput = (e) => {
		setNewComment(e.target.value);
		console.log(newComment);
	};

	const handleSubmit = (e) => {
		<SimpleAlert alertMessage={"Your comment has been added!"} />;

		e.preventDefault();
		commentOnArticle(article_id, loggedInUser, newComment)
			.then((commentFromApi) => {
				setArticleComments((currComments) => [commentFromApi, ...currComments]);
				setNewComment("");
			})
			.catch((error) => {
				console.error("Error adding comment:", error);
			});
	};

	return (
		<section>
			<Box
				component="form"
				sx={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<div>
					<TextField
						id="outlined-multiline-flexible"
						className="input-group"
						placeholder="Write your comment here"
						type="text"
						multiline
						maxRows={100}
						sx={{ width: "100%", marginBottom: "30px" }}
						value={newComment}
						onChange={handleTextInput}
					/>
					<Button
						btnLabel="Submit"
						type="submit"
						version="secondary"
						isDisabled={newComment.trim().length < 1}
					></Button>
				</div>
			</Box>
		</section>
	);
}
