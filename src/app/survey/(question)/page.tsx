"use client";

import { useState } from "react";
import Card from "@/app/(components)/Card";
import { CardData } from "@/types/types";
export default function Question() {
	// states
	const [questionNo, setQuestionNo] = useState<number>(0);
	const questionList: CardData[] = [
		{
			questionArray: [{
				quest: "Your name",
				answer: "Nguyễn Hoàng Mai Thy",
				type: "text"
			},
			{
				quest: "Birthday",
				answer: "January 19",
				type: "text"
			}
		],
		},
		{
			questionArray: [{
				quest: "If today is your birthday, and a friend give you a gift box. What is inside the box?",
				type: "multiple-text"
			}],
		},
	];
	// functions
	function nextQuestion(): void {
		setQuestionNo(prevNumber => prevNumber + 1);
	};

	return (
		<div className="w-full">
			{questionList.map((item, index) => {
				return index === questionNo && (
					<Card
						key={index}
						data={item}
						nextQuestion={nextQuestion}
					/>
				);
			})}
		</div>
	);
}
