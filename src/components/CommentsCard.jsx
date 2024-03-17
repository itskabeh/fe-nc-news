/** @format */

import * as React from "react";
import TimeElapsed from "../utils/TimeElapsed";
import { useEffect } from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Votes from "./Votes";

import { fetchAllUsers } from "../api/api";

function CommentsCard({ comment }) {
	const [commentAuthor, setCommentAuthor] = useState({});

	useEffect(() => {
		if (comment.author) {
			fetchAllUsers(comment.author).then((res) => {
				const users = res.data.users;
				users.map((user) => {
					if (user.username === comment.author) {
						setCommentAuthor(user);
					}
				});
			});
		}
	}, [comment.author]);

	return (
		<Card sx={{ spacing: "3", margin: "10px", padding: "20px" }}>
			<CardHeader
				avatar={
					<Avatar
						src={commentAuthor.avatar_url}
						alt="user avatar"
						sx={{ width: 90, height: 90 }}
					></Avatar>
				}
				title={
					<Typography
						variant="h6"
						sx={{ fontFamily: "Lora", fontSize: "18px" }}
					>
						{comment.author}
					</Typography>
				}
				subheader={
					<Typography
						variant="h6"
						sx={{ fontFamily: "Arial", fontSize: "12px" }}
					>
						<TimeElapsed created_at={comment.created_at} />
						{/* <h6>{comment.created_at}</h6> */}
					</Typography>
				}
				sx={{ textAlign: "left" }}
			/>
			<CardContent sx={{ textAlign: "left" }}>
				<Typography paragraph>{comment.body}</Typography>
			</CardContent>

			<Votes type="comment" votes={comment.votes} id={comment.comment_id} />
		</Card>
	);
}

export default CommentsCard;
