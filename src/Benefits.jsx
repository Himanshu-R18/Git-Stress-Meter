

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-title">
        <p>Benefits Of Regular Testing</p>
      </div>
      <div className="benefits-body">
        <div className="benefits-image">
          <img
            src="./src/assets/stress.jpg"
            alt="depressed person"
            id="benefits-img"
          />
        </div>
        <div className="benefits-content">
          <div className="content1">
            <p className="content-para">
              Not all stress is bad. But too much stress, or feeling stressed
              for a long time, can lead to health problems. Preventing and
              managing stress can lower your risk for other conditions — like
              heart disease, obesity, high blood pressure, and depression.
            </p>
          </div>
          <div className="content2">
            <p>You can prevent or reduce stress by:</p>
          </div>
          <div className="content3">
            <ul className="content-list">
              <li>Planning ahead </li>
              <li>Deciding which tasks to do first</li>
              <li>Preparing for stressful events</li>
              <li>
                Thinking about whether there are ways to solve ongoing problems
                that are causing you stress
              </li>
              <li>
                Limiting your contact with stressors if you can — like by taking
                breaks from the news or social media or avoiding situations that
                cause you stress
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
