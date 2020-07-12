import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

import Home from "./components/Home/Home";
import AddQuiz from "./components/AddQuiz/AddQuiz";
import Quiz from "./components/Quiz/Quiz";
import './App.css';
import useApp from './hooks/useApp';

function App() {

  const {
    name,
    login,
    question,
    checkAnswer,
    nextStep,
    addName,
    loginFn,
    addQuestion
  } = useApp();

  return !login ? (
    <section className="App__Login">
      <div className="App__Login--content">
        <h1>Please add your name: </h1>
        <div>
          <input onChange={addName} />
          <button disabled={name === ""} onClick={loginFn} >Go to the Game</button>
        </div>
      </div>
    </section>
  ) : (
    <BrowserRouter>
      <React.Fragment>
        <div className="App">
          <header className="App__header">
            <nav>
              <h1>
                <Link to="/">
                  {name}
                </Link>
              </h1>
              <div>
              <NavLink exact to="/add-question">Add question</NavLink>
              {question.quiz.length > 0 && (<NavLink to="/quiz">Move to quiz</NavLink>)}
              </div>
            </nav>
          </header>
          <section className="App__Content">
            <Switch>
              <Route path={"/"} exact component={() => <Home name={name} quiz={question.quiz} />} />
              <Route path={"/add-question"} component={() => <AddQuiz question={question} addQuestion={addQuestion} />} />
              <Route path={"/quiz"} component={() => <Quiz question={question} name={name} checkAnswer={checkAnswer} nextStep={nextStep} />} />
            </Switch>
          </section>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
