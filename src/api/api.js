/** @format */

import axios from "axios";

const baseURL = axios.create({
	baseURL: "https://northcoders-news-xznn.onrender.com/api",
});

export const fetchAllArticles = () => {
	return baseURL.get(`/articles`).then((response) => {
		return response;
	});
};

export const fetchAllTopics = () => {
	return baseURL.get(`/topics`).then((response) => {
		return response;
	});
};

export const fetchAllUsers = () => {
	return baseURL.get(`/users`).then((response) => {
		return response;
	});
};

export const fetchArticleById = (article_id) => {
	return baseURL.get(`/articles/${article_id}`).then((response) => {
		return response;
	});
};

export const fetchCommentsByArticle = (article_id) => {
	return baseURL.get(`/articles/${article_id}/comments`).then((response) => {
		return response;
	});
};

export const voteOnArticle = (article_id, vote_change) => {
	const patchBody = {
		inc_votes: vote_change,
	};
	return baseURL
		.patch(`/articles/${article_id}`, patchBody)
		.then((response) => {
			return response;
		});
};

export const voteOnComment = (comment_id, vote_change) => {
	const patchBody = {
		inc_votes: vote_change,
	};
	return baseURL
		.patch(`/comments/${comment_id}`, patchBody)
		.then((response) => {
			return response;
		});
};

export const commentOnArticle = (article_id, loggedInUser, newComment) => {
	const postBody = {
		username: loggedInUser.username,
		body: newComment,
	};
	return baseURL
		.post(`/articles/${article_id}/comments`, postBody)
		.then((response) => {
			return response;
		});
};
