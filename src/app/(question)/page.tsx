"use client";

import { useState } from "react";
import Card from "@/app/(components)/Card";
import { questionList } from "../(data)/questionData";

export default function Question() {
	// states
	const [questionNo, setQuestionNo] = useState<number>(0);
	const [answerList, setAnswerList] = useState<Record<string, string>>({});

	// functions
	function answerHandler (answerParam: object): void {
		const newAnswerList = { ...answerList, ...answerParam };
		setAnswerList(newAnswerList);
	};

	function nextQuestion(cardAnswer: object): void {
		answerHandler(cardAnswer);
		setQuestionNo(prevNumber => prevNumber + 1);
	};

	function prevQuestion(cardAnswer: object): void {
		answerHandler(cardAnswer);
		setQuestionNo(prevNumber => prevNumber - 1);
	};

	function onSubmit(): void {
		setQuestionNo(prevNumber => prevNumber + 1);
	};

	return (
		<div className="w-full h-full">
			{questionList.map((item, index) => {
				return (
					index === questionNo && (
						<Card
							key={index}
							questionNo={index}
							data={item}
							listLength={questionList.length}
							nextQuestion={nextQuestion}
							prevQuestion={prevQuestion}
							onSubmit={onSubmit}
							answerList={answerList}
						/>
					)
				);
			})}
		</div>
	);
}
