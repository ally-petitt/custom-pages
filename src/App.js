import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Demo from './components/demo/Demo';
import TemplateContainer from './components/templates/TemplateContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<TemplateContainer />} />
          <Route path="demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
