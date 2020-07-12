import {useState} from "react";

const useAddQuiz = (addQuestion) => {
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState("");
    const [correct, setCorrect] = useState(0);
    const [show, showAll] = useState(false)


    const quizPusher = () => {
        if (question === "" && answers === "" && correct > -1) {
            return;
        }

        const answerArray = answers.split(",")

        addQuestion({
            question,
            answers: answerArray,
            correct
        })
        setQuestion("")
        setAnswers("")
        setCorrect(0)

    }

    const changeQuestion = e => {
        setQuestion(e.currentTarget.value)
    }

    const changeAnswers = e => {
        setAnswers(e.currentTarget.value)
    }

    const changeCorrect = e => {
        setCorrect(e.currentTarget.value)
    }

    const handlerShowQuestion = () => {
        showAll(!show)
    }

    return {
        question,
        answers,
        correct,
        show,
        quizPusher,
        changeQuestion,
        changeAnswers,
        changeCorrect,
        handlerShowQuestion
    }
}

export default useAddQuiz;