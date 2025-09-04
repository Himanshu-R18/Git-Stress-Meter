

const QuestionBank = (props) => {
  return (
    <>
      <div className="card">
        <div className="question">
          <p className="ques">
            {props.sl} {props.ques}
          </p>

          <div className="ans" id="ans1">
            <input type="radio" name={"answer"+props.sl} id="anss1" />
            <label htmlFor="anss1"> 😭 Very Bad</label>
          </div>
          <div className="ans" id="ans2">
            <input type="radio" name={"answer"+props.sl} id="anss2" />
            <label htmlFor="anss2"> ☹️ Bad</label>
          </div>
          <div className="ans" id="ans3">
            <input type="radio" name={"answer"+props.sl} id="anss3" />
            <label htmlFor="anss3"> 🙂 Average</label>
          </div>
          <div className="ans" id="ans4">
            <input type="radio" name={"answer"+props.sl} id="anss4" />
            <label htmlFor="anss4"> 😊 Good</label>
          </div>
          <div className="ans" id="ans5">
            <input type="radio" name={"answer"+props.sl} id="anss5" />
            <label htmlFor="anss5"> 😁 Very Good</label>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default QuestionBank;
