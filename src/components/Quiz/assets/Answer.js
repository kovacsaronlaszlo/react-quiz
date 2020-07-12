import React from "react"

const Answer = (props) => {
    console.log(props)
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));

    return (
        <>
            <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                {answers}
            </ul>
        </>
    );
}

export default Answer;