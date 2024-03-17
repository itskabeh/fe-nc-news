/** @format */

import {
	fetchAllUsers,
	fetchArticleById,
	fetchCommentsByArticle,
} from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Container } from "@mui/material";
import CommentsList from "../components/CommentsList";
import { Box } from "@mui/material";
import Votes from "../components/Votes";
import TimeElapsed from "../utils/TimeElapsed";
import Loading from "../components/Loading";
import AddComment from "../components/AddComment";

function ArticlePage() {
	const { loggedInUser } = useContext(UserContext);
	const [articleItem, setArticleItem] = useState({});
	const { article_id } = useParams();
	const [articleAuthor, setArticleAuthor] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchArticleById(article_id).then((res) => {
			setArticleItem(res.data.article);

			setIsLoading(false);
		});
	}, [article_id]);

	useEffect(() => {

		if (articleItem.author) {
			fetchAllUsers(articleItem.author).then((res) => {
				const users = res.data.users;
				users.map((user) => {
					if (user.username === articleItem.author) {
						setArticleAuthor(user);
						setIsLoading(false);
					}
				});
			});
		}
	}, [articleItem.author]);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Container
					sx={{
						maxWidth: "md",
						// width: "100%",
						padding: "50px",
						marginTop: "130px",
						// marginLeft: "50px",
						// marginRight: "50px",
						// marginBottom: "90px",
						// position: "relative",
						backgroundColor: "#fff",
						color: "#000000",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Card
							sx={{
								maxWidth: "100%",
								paddingTop: "50px",
								paddingLeft: "50px",
								paddingRight: "50px",
								paddingBottom: "50px",
								alignItems: "center",
							}}
						>
							<CardHeader
								avatar={
									<Avatar
										src={articleAuthor.avatar_url}
										alt="user avatar"
										sx={{ width: 90, height: 90 }}
									></Avatar>
								}
								title={
									<Typography
										variant="h2"
										sx={{
											fontFamily: "Lora",
											fontWeight: "600",
											fontSize: "1.6rem",
											color: "#202142",
										}}
									>
										{articleItem.title}
									</Typography>
								}
								subheader={
									articleItem.created_at !== undefined && 
									(	<TimeElapsed created_at={articleItem.created_at} />
										// <h5>{articleItem.created_at}</h5>
									)
								}
								sx={{ textAlign: "left" }}
							/>
							<CardContent sx={{ textAlign: "left" }}>
								<Typography paragraph>{articleItem.body}</Typography>
							</CardContent>

							<section className="img-box">
								<img
									src={articleItem.article_img_url}
									alt="user uploaded picture"
									className="card-img"
								></img>
							</section>
							{articleItem.votes !== undefined && (
								<Votes
									type="article"
									votes={articleItem.votes}
									id={articleItem.article_id}
								/>
							)}
							{/* <Button btnLabel="Add Comment" onClick={<AddComment />}></Button> */}

							
						</Card>
						<br></br>
						<CommentsList
							article_id={article_id}
							sx={{ alignItems: "stretch" }}
						/>
					</Box>
				</Container>
			)}
		</>
	);
}

export default ArticlePage;
