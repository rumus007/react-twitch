import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const PageOne = () => {
  return <div>Page one</div>;
};

const PageTwo = () => {
  return (
    <div>
      Page two
      <button>click me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<PageOne />}></Route>
          <Route path="/pagetwo" element={<PageTwo />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
