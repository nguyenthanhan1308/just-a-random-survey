"use client";

import { useState, useRef } from "react";
import { CardData } from "@/types/types";
import { TextField, Button, Tooltip } from "@mui/material";
import { NavigateBefore, NavigateNext, Info } from "@mui/icons-material";
import styles from "./component.module.css";
// Define the shape of the component's props
interface ChildProps {
	data: CardData;
	questionNo: number;
	listLength: number;
	answerList: Record<string, string>;
	nextQuestion: (answer: object) => void;
	prevQuestion: (answer: object) => void;
	onSubmit: () => void;
}
export default function Card({
	data,
	questionNo,
	listLength,
	answerList,
	nextQuestion,
	prevQuestion,
	onSubmit,
}: ChildProps) {
	const [answer, setAnswer] = useState({});
	const inputDebounce = useRef<NodeJS.Timeout | undefined>(undefined);

	const handleChange = (e: { target: { value: string } }, question: string) => {
		clearTimeout(inputDebounce.current);
		inputDebounce.current = setTimeout(() => {
			setAnswer({ ...answer, [question]: e?.target?.value });
		}, 500);
	};

	function renderButton() {
		return (
			<div className="flex justify-center">
				{questionNo > 0 && questionNo < listLength - 1 && (
					<div className="mr-2">
						<Button
							variant="contained"
							color="success"
							startIcon={<NavigateBefore />}
							onClick={() => prevQuestion(answer)}
						>
							Back
						</Button>
					</div>
				)}
				{questionNo < listLength - 2 && (
					<Button
						variant="contained"
						color="success"
						endIcon={<NavigateNext />}
						onClick={() => nextQuestion(answer)}
					>
						Next
					</Button>
				)}
				{questionNo === listLength - 2 && (
					<Button
						variant="contained"
						color="success"
						onClick={onSubmit}
					>
						Submit
					</Button>
				)}
			</div>
		);
	}

	return (
		<div
			className={`bg-white rounded-sm flex-row justify-center p-4 mb-2 cardBoxShadow w-full ${styles.cardBoxShadow}`}
		>
			{data?.questionArray.map(questObj => {
				const { quest, tooltip, answer, questionID, type } = questObj;
				return (
					<div key={quest}>
						<div className="mb-2 flex flex-row items-center">
							<div className={`text-left pr-1 ${type === "general" ? "text-2xl font-bold" : ""}`}>
								{quest}
							</div>
							{questObj.tooltip && (
								<Tooltip
									title={tooltip}
									enterTouchDelay={0}
									leaveTouchDelay={2000}
								>
									<Info fontSize="small" />
								</Tooltip>
							)}
						</div>
						{questObj.type === "text" && (
							<div className="mb-4">
								<TextField
									fullWidth
									label="Your answer"
									disabled={!!answer}
									value={answer || answerList?.[questionID]}
									onChange={e => handleChange(e, questionID)}
								/>
							</div>
						)}
					</div>
				);
			})}
			{renderButton()}
		</div>
	);
}
