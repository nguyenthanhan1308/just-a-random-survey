import { CardData } from "@/types/types";
export const questionList: CardData[] = [
	{
		questionArray: [
			{
				questionID: "question1",
				quest: "Your name",
				answer: "Nguyễn Hoàng Mai Thy",
				type: "text",
			},
			{
				questionID: "question2",
				quest: "Date of birth",
				answer: "January 19",
				tooltip: "How do I know? Well, you didn't hide it tho xD.",
				type: "text",
			},
		],
	},
	{
		questionArray: [
			{
				questionID: "question3",
				quest: "How have you been?",
				type: "text",
			},
			{
				questionID: "question4",
				quest: "How was your overall study experience?",
				type: "text",
			},
		],
	},
	{
		questionArray: [
			{
				questionID: "question5",
				quest: "If today is your birthday and receive a gift box from your friend. What are inside the box?",
				tooltip: "List as many things as you want to, no need to be so specific.",
				type: "text",
			},
		],
	},
	{
		questionArray: [
			{
				questionID: "question6",
				quest: "What are your favorite",
				type: "general",
			},
			{
				questionID: "question7",
				quest: "Colors?",
				type: "text",
			},
			{
				questionID: "question8",
				quest: "Kinds of flower?",
				type: "text",
			},
			{
				questionID: "question9",
				quest: "Activities?",
				type: "text",
			},
		],
	},
	{
		questionArray: [
			{
				questionID: "question10",
				quest: "Thank you for taking the time to complete this survey. Have a nice day!",
				type: "general",
			},
		],
	},
];
