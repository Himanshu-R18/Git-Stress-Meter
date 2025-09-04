import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Questionnaire from "./Questionnaire";
import Signup from "./signup";


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
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
