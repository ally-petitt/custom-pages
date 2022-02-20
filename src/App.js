import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Demo from './pages/demo/Demo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Home />} />
          <Route path="demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
