import React from "react";

import useAddQuiz from "./hooks/useAddQuiz";
import "./AddQuiz.css";

const AddQuiz = props => {

    const {
        question,
        answers,
        correct,
        show,
        quizPusher,
        changeQuestion,
        changeAnswers,
        changeCorrect,
        handlerShowQuestion
    } = useAddQuiz(props.addQuestion)

    return (
        <section className="AddQuiz__Container">
            <div className="AddQuiz__Content">
                <div>
                    <label>question</label>
                    <input type="text" value={question} onChange={changeQuestion} />
                </div>
                <div>
                    <label>answers</label>
                    <input type="text" value={answers} onChange={changeAnswers} />
                    <div>
                        <small>Please use commas (,) in the answers</small>
                    </div>
                </div>
                <div>
                    <label>correct</label>
                    <input type="number" value={correct} onChange={changeCorrect} />
                </div>
                <div>
                    You have {props.question.quiz.length} question{props.question.quiz.length > 1 ? "s" : ""}
                </div>
                <button onClick={quizPusher}>
                    Add new quiz
                </button>
            </div>
            <div className="AddQuiz__AllQuestion">
                <button 
                    onClick={handlerShowQuestion} 
                    disabled={props.question.quiz.length === 0}>
                    {!show ? "Show" : "Hide"} question{props.question.quiz.length > 1 ? "s" : ""}
                </button>
                {show && (
                    <ul>
                        {props.question.quiz.map((item, index) => (
                            <li key={index}>{item.question}</li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default AddQuiz;