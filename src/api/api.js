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
