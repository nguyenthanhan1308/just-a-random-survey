"use client";

import { useState } from "react";
import Card from "@/app/(components)/Card";
import { questionList } from "../(data)/questionData";

export default function Question() {
	// states
	const [questionNo, setQuestionNo] = useState<number>(0);
	const [answerList, setAnswerList] = useState<Record<string, string>>({});

	// functions
	function nextQuestion(cardAnswer: object): void {
		setQuestionNo(prevNumber => prevNumber + 1);
		const newAnswerList = { ...answerList, ...cardAnswer };
		setAnswerList(newAnswerList);
	}

	function prevQuestion(): void {
		setQuestionNo(prevNumber => prevNumber - 1);
	}

	function onSubmit(): void {
		setQuestionNo(prevNumber => prevNumber + 1);
	}

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
