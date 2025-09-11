
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <div className="content-left">
        <div className="content-title1">
          <p className="title1">Mood & Stress Tester</p>
        </div>
        <div className="content-title2">
          <p className="title2">Test your current mood and stress level.</p>
        </div>

        <div className="content-textbtn">
          <button
            className="test-btn"
            onClick={() => navigate("/Questionnaire")}
          >
            Start Test
          </button>
        </div>
      </div>
      <div className="content-right">
        <img src="/smiles.jpg" alt="title's Image" id="right-image"/>
      </div>
    </div>
  );
}

export default Content;
