import React from "react"
import Question from "./assets/Question";
import Answer from "./assets/Answer";

const Quiz = props => {
    const {question, checkAnswer, nextStep} = props;
    return (
        <>
            {question.step <= question.quiz.length ? (
                <>
                    <Question title={question.quiz[question.step].question}  />
                    <Answer 
                        answer={question.quiz[question.step].answers}
                        step={question.step}
                        checkAnswer={checkAnswer}
                        correctAnswer={question.quiz[question.step].correct}
                        clickedAnswer={question.clickedAnswer} />
                    <button 
                        disabled={
                            question.clickedAnswer && question.quiz.length >= question.step
                            ? false : true
                        }
                        onClick={() => nextStep(question.step)} >
                        Next
                    </button>
                </>
            ) : (
                <div className="Quiz__final">
                    <h2>You have completed the quiz!</h2>
                    <p>Your score is: {question.score} of {question.quiz.length}</p>
                    <p>Thank you!</p>
                </div>
            )}
        </>
    )
}

export default Quiz;