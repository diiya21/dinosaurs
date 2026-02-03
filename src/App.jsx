import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatIntro from "./pages/ChatIntro";
import Question from "./pages/Question";
import Celebration from "./pages/Celebration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatIntro />} />
        <Route path="/question" element={<Question />} />
        <Route path="/celebration" element={<Celebration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
