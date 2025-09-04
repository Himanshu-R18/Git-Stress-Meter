import QuestionBank from "./QuestionBank";
import TestSubmit from "./testSubmit";

function Questionnaire() {
  return (
    <>
      <div className="question-container">
        <div className="question-title">
          <p>Questionnaire</p>
        </div>
        <div className="question-box">
          <QuestionBank
            sl="1."
            ques="Been upset because of something that happened unexpectedly?"
          />
          <QuestionBank
            sl="2."
            ques="Felt that you were unable to control important things in your life?"
          />
          <QuestionBank sl="3." ques="Felt nervous and 'stressed'?" />
          <QuestionBank
            sl="4."
            ques="Felt confident about your ability to handle your personal problems?"
          />
          <QuestionBank sl="5." ques="Felt that things were going your way?" />
          <QuestionBank
            sl="6."
            ques="Found that you could NOT cope with all the things you had to do?"
          />
          <QuestionBank
            sl="7."
            ques="Been able to control irritations in your life?"
          />
          <QuestionBank sl="8." ques="Felt that you were on top of things?" />
          <QuestionBank
            sl="9."
            ques="Been angered because of things that happened that were out of your control?"
          />
          <QuestionBank
            sl="10."
            ques="Felt difficulties were piling up so high that you could not overcome them?"
          />
        </div>
        <div className="submit-panel">
          <TestSubmit />
        </div>
      </div>
    </>
  );
}

export default Questionnaire;
