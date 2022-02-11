import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { Box, Button, CircularProgress, LinearProgress } from "@mui/material";

export default function Code() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description="Richard Baek - Lead developer at SJ Design">
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					height: "100%",
					width: "100%",
					border: "2px solid blue",
					boxSizing: "border-box",
					overflow: "hidden",
				}}>
				<Button variant="contained">Clicky </Button>
			</Box>
		</Layout>
	);
}
