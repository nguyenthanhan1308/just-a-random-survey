export interface Question {
    questionID: string,
    quest: string,
    answer?: string,
    tooltip?: string,
    type: "text" | "yes/no" | "general"
}

export interface CardData {
    questionArray: Question[],
}
