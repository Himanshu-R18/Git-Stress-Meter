import { useNavigate } from "react-router-dom";
import { useState , useRef } from "react";
import QuestionBank from "./QuestionBank";

function TestSubmit(){
  const formRef = useRef(null);
  const navigate = useNavigate();
  const clearSelection = () => {
    formRef.current.reset();
    alert("Test is Cleared")
  }


  return(
    <>
      <div className="test-footer">
        <div className="back-test">
          <button className="back-btn" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
        <div className="clear-test">
          <button className="clear-btn" onClick={clearSelection}>
            Clear
          </button>
        </div>
        <div className="submit-test">
          <button className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </>
  );

}

export default TestSubmit