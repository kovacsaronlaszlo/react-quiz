import {useState} from "react";

const useApp = () => {
    const [name, setName] = useState("");
    const [login, setLogin] = useState(false);
    const [question, setQuestion] = useState({
        quiz: [],
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 0,
        score: 0
    });

    const checkAnswer = answer => {
        if (answer === question.quiz[question.step].correct) {
        setQuestion(oldState => ({
            ...oldState,
            score: question.score + 1,
            correctAnswer: question.correctAnswers[question.step],
            clickedAnswer: parseInt(answer)
        }))
        } else {
        setQuestion(oldState => ({
            ...oldState,
            correctAnswer: 0,
            clickedAnswer: parseInt(answer)
        }))
        }
    }

    const nextStep = step => {
        setQuestion(oldState => ({
        ...oldState,
        step: step + 1,
        correctAnswer: 0,
        clickedAnswer: 0
        }))
    }

    const addName = (e) => {
        setName(e.currentTarget.value);
    }

    const loginFn = () => {
        setLogin(!login)
    }

    const addQuestion = (newQuiz) => {
        setQuestion(oldState => ({
        ...oldState,
        quiz: [...oldState.quiz, newQuiz]
        }))
    }

    return {
        name,
        login,
        question,
        checkAnswer,
        nextStep,
        addName,
        loginFn,
        addQuestion
    }
}

export default useApp;