export interface Question {
    quest: string,
    answer?: string,
    tooltip?: string,
    type: "text" | "yes/no" | "multiple-choice" | "multiple-text"
}

export interface CardData {
    questionArray: Question[],
}
