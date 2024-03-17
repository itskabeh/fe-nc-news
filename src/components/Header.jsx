/** @format */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
// import CommunitySelector from './CommunitySelector';
import { fetchAllTopics } from "../api/api";
// import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom"

const pages = ["Latest", "Trending", "All"];
const communitiesNav = [];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

fetchAllTopics().then((res) => {
	const data = res.data.topics;
	return data.map(({ slug }) => {
		communitiesNav.push(slug.charAt(0).toUpperCase() + slug.slice(1));
	});
});

function Header() {
	const { loggedInUser } = useContext(UserContext);
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				width: "100%",
				backgroundColor: "#ff2d2b",
				borderBottom: "4px solid rgba(0, 0, 0, 1)",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link to="/" style={{ textDecoration: "none" }}>
						<img
							src="/assets/nc-news.png"
							alt="nc news logo"
							height={120}
							width={190}
						/>
					</Link>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "Lora",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#000000",
							textDecoration: "none",
						}}
					></Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="#202142"
						>
							<MenuIcon sx={{ fontSize: "3rem", color: "#202142" }} />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
								fontFamily: "Lora",
							}}
						>
							{pages.map((page) => (
								<Link
									to="/articles"
									key={page}
									style={{ textDecoration: "none" }}
								>
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								</Link>
							))}
							<br></br>
							<hr></hr>
							Communities
							<hr></hr>
							{communitiesNav.map((community) => (
								<MenuItem key={community} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{community}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "Lora",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#000000",
							textDecoration: "none",
						}}
					></Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Link
								to="/articles"
								key={page}
								style={{ textDecoration: "none" }}
							>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "#000000",
										display: "block",
										fontFamily: "Lora",
										fontSize: "1.2rem",
									}}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
								<Avatar
									alt="user avatar"
									src={loggedInUser.avatar_url}
									sx={{ width: 70, height: 70 }}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
