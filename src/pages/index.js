import React, {useState,useEffect, useRef} from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Box, Paper, Button } from "@mui/material";

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	const messages = ["Do something with this page?", "Learn Rust?", "Update my resume.", "Go on a trip with my family!"]
	const timer = useRef(0);
	const [count, setCount] = useState(0);
	const [counter, setCounter] = useState(0);
	const [clicked, setClicked] = useState(false);

	const start = () => {
	  if (timer.current) {
		return;
	  }
	  timer.current = setInterval(() => setCount((p) => p + 1), 1000);
	};

	const reset = () => {
		clearInterval(timer.current);
		timer.current = 0;
		setCount(0);
		setCounter(0);
		setClicked(false);
	}
   
	useEffect(()=>{
		if(count > counter){
			reset()
		}
	},[count])

	useEffect(() => {
		return () => clearInterval(timer.current);
	  }, []);
	
	return (
		<Layout title={`${siteConfig.title}`} description="Richard Baek - Lead developer at SJ Design">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					height: "100%",
					width: "100%",
					boxSizing: "border-box",
					overflow: "hidden",
				}}>
				<Button variant="contained" color="secondary" onClick={()=>{
					if(count < 1){
						start();
					}
					setCounter(p => p+ 1); 
					setClicked(p => p === false ? "0" : p === "0" ? 1 : p ===  1 ? 2 : p === 2 ? 3 : p === 3 && "0" ); 
				}}>
					{clicked ? messages[clicked] : "When will I have time to.."}
				</Button>
				<Paper elevation={2} sx={{p: 4, mt: 2,					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center"}}>
						<h4>Clicks {"<"} Timer = reset()</h4>
				<p>Clicks: {counter} | Timer: {count}</p>
				</Paper>
			</Box>
		</Layout>
	);
}
