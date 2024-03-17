/** @format */

import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
	return (
		<Box
			sx={{ display: "flex" }}
      style={{
        width: "1000px",
				position: "absolute",
				top: "50%",
				left: "50%",
				zIndex: 9999,
			}}
		>
			<CircularProgress />
		</Box>
	);
}
