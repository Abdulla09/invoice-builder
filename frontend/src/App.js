import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Build from "./pages/Build"

function App() {
  return (
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<Build />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
