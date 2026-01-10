"use client";

import { useState } from "react";
import Card from "@/app/(components)/Card";
import { questionList } from "../(data)/questionData";
import emailjs from "@emailjs/browser";

export default function Question() {
	// states
	const [questionNo, setQuestionNo] = useState<number>(0);
	const [answerList, setAnswerList] = useState<Record<string, string>>({});

	// functions
	function sendEmail () : void {
		if(Object.keys(answerList).length > 0) {
			emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					message: JSON.stringify(answerList),
				},
				{
				publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
				}
			);
		}
	};
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
		sendEmail();
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
