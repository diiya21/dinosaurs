import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ChatIntro />} />
        <Route path="/question" element={<Question />} />
        <Route path="/celebration" element={<Celebration />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
