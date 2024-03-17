/** @format */


import { useState } from "react";
import { useEffect } from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";
import { voteOnArticle, voteOnComment } from "../api/api";

function Votes({ type, votes, id }) {
	const [voteCount, setVoteCount] = useState(votes);
	const [userVote, setUserVote] = useState(0);
 const [alignment, setAlignment] = React.useState("left");
 const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
 };

	const handleVoteChange = (increase) => {
		setVoteCount((prevVoteCount) => prevVoteCount + increase);
		if (type === "article") {
			voteOnArticle(id, increase);
		} else if (type === "comment") {
			voteOnComment(id, increase);
		}
	};

  const displayVotes = voteCount;


	return (
		<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
			<ToggleButtonGroup
				value={alignment}
				exclusive
				aria-label="text alignment"
				onChange={handleAlignment}
			>
				<ToggleButton
					value="upvote"
					aria-label="left aligned"
					onClick={() => {
						if (userVote === 0) {
							displayVotes + 1;
							handleVoteChange(+1);
							setUserVote(+1);
            }
            if (userVote === 1) {
              displayVotes -1;
							handleVoteChange(-1);
							setUserVote(0);
            }
						if (userVote === -1) {
							displayVotes + 2;
							handleVoteChange(+2);
							setUserVote(+1);
						}
					}}
					
				>
					<FaRegThumbsUp color="#202142" />
				</ToggleButton>
				<ToggleButton value="votes" aria-label="votes" disabled>
					{displayVotes}
				</ToggleButton>
				<ToggleButton
					value="downvote"
					aria-label="right aligned"
					onClick={() => {
						if (userVote === 0) {
							displayVotes - 1;
							handleVoteChange(-1);
							setUserVote(-1);
            }
            if (userVote === -1) {
							displayVotes + 1;
							handleVoteChange(+1);
							setUserVote(0);
						}
						if (userVote === 1) {
							displayVotes - 2;
							handleVoteChange(-2);
							setUserVote(-1);
						}
					}}
					disabled={userVote === -1}
				>
					<FaRegThumbsDown color="#202142" />
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}
export default Votes;
