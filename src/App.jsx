import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Questionnaire from "./Questionnaire";
import Signup from "./signup";
import Benefits from "./Benefits";
import About from "./About";


function App() {
  return (
    <>

      <div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Content/>
              <Footer />
            </>
            } 
          />
          <Route path="/Questionnaire" element={<Questionnaire />} />
          <Route path="/Benefits" element={<><Header /><Benefits /></>} />
          <Route path="/About" element={<><Header /><About /></>} />
          <Route path="/Login" element={<><Header /><Login /></>} />
          <Route path="/Signup" element={<><Header /><Signup /></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
