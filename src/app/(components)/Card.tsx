import {ReactNode} from 'react';
import { CardData } from "@/types/types";
import { TextField, Button } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
// Define the shape of the component's props
interface ChildProps {
	data: CardData;
	nextQuestion: () => void;
}
import styles from "./component.module.css";
import React from "react";
export default function Card({ data, nextQuestion }: ChildProps) {
	function renderButton (type: string) {
		
	}
	return (
		<div
			className={`bg-white rounded-sm flex-row justify-center p-2 mb-2 cardBoxShadow w-full ${styles.cardBoxShadow}`}
		>
			{data?.questionArray.map(questObj => {
				return (
					<div  key={questObj?.quest}>
						<div className="mb-2 p-2">{questObj?.quest}</div>
						<div className="mb-4">
							<TextField
								fullWidth
								placeholder="Your answer"
								disabled={!!questObj?.answer}
								value={questObj?.answer}
							/>
						</div>
					</div>
				);
			})}
			<div className="flex justify-center">
				<Button
					variant="contained"
					color="success"
					endIcon={<NavigateNext />}
					onClick={nextQuestion}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
