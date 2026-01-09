import styles from "./page.module.css";
import Question from "./(question)/page";
export default function SurveyForm() {
    return (
		<div className="grid grid-cols-6 lg:grid-cols-5 lg:gap-4">
			<div className="col-start-1 col-end-7 lg:col-start-2 lg:col-end-5">
				<div className="text-black flex-row justify-center h-dvh py-2 px-4 lg:py-4 lg:px-8">
					<div className={`text-4xl p-3 w-full h-fit flex justify-center ${styles.title}`}>
						Just a random survey
					</div>
					<div
						className={`text-center text-2xl p-3 w-full h-fit flex justify-center ${styles.title} lg:text-3xl `}
					>
						{`Hi, hope this doesn't feel like an interrogation`}
					</div>
					<div className="h-[40cqh] w-full flex flex-row justify-center items-center">
						<Question />
					</div>
				</div>
			</div>
		</div>
	);
}